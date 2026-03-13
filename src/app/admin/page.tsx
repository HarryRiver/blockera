'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import { FiLogOut, FiLock, FiMessageSquare, FiMail, FiPhone, FiTrash2, FiDownload, FiFilter, FiCheck, FiCircle, FiRefreshCw, FiSearch, FiX, FiChevronLeft, FiChevronRight, FiAlertTriangle, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import styles from './admin.module.css';

interface ContactData {
    _id: string;
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    isRead: boolean;
    createdAt: string;
}

type SortField = 'createdAt' | 'fullName' | 'subject';
type SortOrder = 'asc' | 'desc';
type FilterStatus = 'all' | 'unread' | 'read';

const subjectMap: Record<string, string> = {
    'tu-van-khoa-hoc': 'Tư vấn khóa học',
    'hop-tac-doanh-nghiep': 'Hợp tác doanh nghiệp',
    'khac': 'Khác',
};

const ITEMS_PER_PAGE = 10;

/* Toast Component */
function Toast({ message, type, onClose }: { message: string; type: 'success' | 'error'; onClose: () => void }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className={`${styles.toast} ${type === 'success' ? styles.toastSuccess : styles.toastError}`}>
            {type === 'success' ? <FiCheckCircle /> : <FiXCircle />}
            <span>{message}</span>
            <button onClick={onClose} className={styles.toastClose}><FiX /></button>
        </div>
    );
}

/* Confirm Dialog */
function ConfirmDialog({ message, count, onConfirm, onCancel }: { message: string; count: number; onConfirm: () => void; onCancel: () => void }) {
    return (
        <div className={styles.overlay} onClick={onCancel}>
            <div className={styles.confirmDialog} onClick={e => e.stopPropagation()}>
                <div className={styles.confirmIcon}><FiAlertTriangle /></div>
                <h3>Xác nhận xóa</h3>
                <p>{message}</p>
                <span className={styles.confirmCount}>{count} liên hệ sẽ bị xóa vĩnh viễn</span>
                <div className={styles.confirmActions}>
                    <button onClick={onCancel} className={styles.confirmCancel}>Hủy</button>
                    <button onClick={onConfirm} className={styles.confirmDelete}><FiTrash2 /> Xóa</button>
                </div>
            </div>
        </div>
    );
}

export default function AdminPage() {
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false);
    const [contacts, setContacts] = useState<ContactData[]>([]);
    const [loading, setLoading] = useState(false);

    // Filters & Sort
    const [searchQuery, setSearchQuery] = useState('');
    const [filterStatus, setFilterStatus] = useState<FilterStatus>('all');
    const [filterSubject, setFilterSubject] = useState('all');
    const [sortField, setSortField] = useState<SortField>('createdAt');
    const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
    const [showFilterBar, setShowFilterBar] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Toast & Confirm
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
    const [confirmState, setConfirmState] = useState<{ ids: string[]; message: string } | null>(null);

    const showToast = (message: string, type: 'success' | 'error' = 'success') => setToast({ message, type });

    const headers = useCallback(() => ({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${password}`,
    }), [password]);

    const fetchContacts = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/contacts', { headers: headers() });
            if (res.ok) {
                const data = await res.json();
                setContacts(data.contacts || []);
            }
        } catch { /* ignore */ }
        setLoading(false);
    }, [headers]);

    useEffect(() => { if (isAuth) fetchContacts(); }, [isAuth, fetchContacts]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/contacts', { headers: { 'Authorization': `Bearer ${password}`, 'Content-Type': 'application/json' } });
            if (res.ok) setIsAuth(true);
            else showToast('Mật khẩu không đúng', 'error');
        } catch { showToast('Lỗi kết nối', 'error'); }
    };

    const toggleRead = async (id: string, currentRead: boolean) => {
        try {
            const res = await fetch('/api/contacts', {
                method: 'PATCH', headers: headers(),
                body: JSON.stringify({ id, isRead: !currentRead }),
            });
            if (res.ok) {
                setContacts(prev => prev.map(c => c._id === id ? { ...c, isRead: !currentRead } : c));
                showToast(currentRead ? 'Đánh dấu chưa đọc' : 'Đánh dấu đã đọc');
            }
        } catch { showToast('Lỗi cập nhật', 'error'); }
    };

    const requestDelete = (ids: string[]) => {
        const names = contacts.filter(c => ids.includes(c._id)).map(c => c.fullName).slice(0, 3).join(', ');
        const extra = ids.length > 3 ? ` và ${ids.length - 3} liên hệ khác` : '';
        setConfirmState({ ids, message: `${names}${extra}` });
    };

    const executeDelete = async () => {
        if (!confirmState) return;
        const { ids } = confirmState;
        setConfirmState(null);
        try {
            let success = 0;
            for (const id of ids) {
                const res = await fetch(`/api/contacts?id=${id}`, { method: 'DELETE', headers: headers() });
                if (res.ok) success++;
            }
            setContacts(prev => prev.filter(c => !ids.includes(c._id)));
            setSelectedIds(new Set());
            showToast(`Đã xóa ${success} liên hệ thành công`);
        } catch { showToast('Lỗi xóa liên hệ', 'error'); }
    };

    const exportCSV = () => {
        const header = ['Họ tên', 'Email', 'Số điện thoại', 'Chủ đề', 'Nội dung', 'Trạng thái', 'Ngày gửi'];
        const rows = filteredContacts.map(c => [
            c.fullName, c.email, c.phone,
            subjectMap[c.subject] || c.subject,
            `"${c.message.replace(/"/g, '""')}"`,
            c.isRead ? 'Đã đọc' : 'Chưa đọc',
            new Date(c.createdAt).toLocaleDateString('vi-VN'),
        ]);
        const BOM = '\uFEFF';
        const csv = BOM + [header.join(','), ...rows.map(r => r.join(','))].join('\n');
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contacts_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('Đã xuất file CSV thành công');
    };

    const toggleSelectAll = () => {
        if (selectedIds.size === paginatedContacts.length) setSelectedIds(new Set());
        else setSelectedIds(new Set(paginatedContacts.map(c => c._id)));
    };

    const toggleSelect = (id: string) => {
        setSelectedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id); else next.add(id);
            return next;
        });
    };

    // Filtered & sorted
    const filteredContacts = useMemo(() => {
        let result = [...contacts];
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase();
            result = result.filter(c =>
                c.fullName.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) ||
                c.phone.includes(q) || c.message.toLowerCase().includes(q)
            );
        }
        if (filterStatus === 'unread') result = result.filter(c => !c.isRead);
        if (filterStatus === 'read') result = result.filter(c => c.isRead);
        if (filterSubject !== 'all') result = result.filter(c => c.subject === filterSubject);
        result.sort((a, b) => {
            let cmp = 0;
            if (sortField === 'createdAt') cmp = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            else if (sortField === 'fullName') cmp = a.fullName.localeCompare(b.fullName);
            else if (sortField === 'subject') cmp = a.subject.localeCompare(b.subject);
            return sortOrder === 'desc' ? -cmp : cmp;
        });
        return result;
    }, [contacts, searchQuery, filterStatus, filterSubject, sortField, sortOrder]);

    // Pagination
    const totalPages = Math.max(1, Math.ceil(filteredContacts.length / ITEMS_PER_PAGE));
    const safeCurrentPage = Math.min(currentPage, totalPages);
    const paginatedContacts = filteredContacts.slice((safeCurrentPage - 1) * ITEMS_PER_PAGE, safeCurrentPage * ITEMS_PER_PAGE);

    useEffect(() => { setCurrentPage(1); }, [searchQuery, filterStatus, filterSubject]);

    const uniqueSubjects = useMemo(() => Array.from(new Set(contacts.map(c => c.subject))), [contacts]);
    const stats = useMemo(() => ({
        total: contacts.length,
        unread: contacts.filter(c => !c.isRead).length,
        read: contacts.filter(c => c.isRead).length,
    }), [contacts]);

    if (!isAuth) {
        return (
            <div className={styles.loginPage}>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                    <div className={styles.loginIcon}><FiLock /></div>
                    <h1>BLOCKERA Admin</h1>
                    <p>Nhập mật khẩu để truy cập trang quản trị</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mật khẩu" className={styles.loginInput} autoFocus />
                    <button type="submit" className={styles.loginBtn}>Đăng nhập</button>
                </form>
                {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
            </div>
        );
    }

    return (
        <div className={styles.admin}>
            {/* Toast */}
            {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

            {/* Confirm Dialog */}
            {confirmState && (
                <ConfirmDialog
                    message={confirmState.message}
                    count={confirmState.ids.length}
                    onConfirm={executeDelete}
                    onCancel={() => setConfirmState(null)}
                />
            )}

            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.sidebarBrand}>
                    <h2>BLOCKERA</h2>
                    <span>Admin Panel</span>
                </div>
                <nav className={styles.sidebarNav}>
                    <button className={`${styles.navBtn} ${styles.navActive}`}>
                        <FiMessageSquare /> Yêu cầu tư vấn
                        {stats.unread > 0 && <span className={styles.badge}>{stats.unread}</span>}
                    </button>
                </nav>
                <div className={styles.sidebarStats}>
                    <div className={styles.statItem}>
                        <span className={styles.statNum}>{stats.total}</span>
                        <span className={styles.statLabel}>Tổng</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={`${styles.statNum} ${styles.statUnread}`}>{stats.unread}</span>
                        <span className={styles.statLabel}>Chưa đọc</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={`${styles.statNum} ${styles.statRead}`}>{stats.read}</span>
                        <span className={styles.statLabel}>Đã đọc</span>
                    </div>
                </div>
                <button className={styles.logoutBtn} onClick={() => { setIsAuth(false); setPassword(''); }}>
                    <FiLogOut /> Đăng xuất
                </button>
            </aside>

            {/* Main */}
            <main className={styles.main}>
                <div className={styles.topBar}>
                    <h1>Yêu cầu tư vấn</h1>
                    <div className={styles.topActions}>
                        <button className={styles.toolBtn} onClick={() => setShowFilterBar(!showFilterBar)}>
                            <FiFilter /> Lọc
                        </button>
                        <button className={styles.toolBtn} onClick={exportCSV}>
                            <FiDownload /> Xuất CSV
                        </button>
                        <button className={styles.toolBtn} onClick={fetchContacts} disabled={loading}>
                            <FiRefreshCw className={loading ? styles.spinning : ''} />
                        </button>
                    </div>
                </div>

                {/* Filter Bar */}
                {showFilterBar && (
                    <div className={styles.filterBar}>
                        <div className={styles.searchWrap}>
                            <FiSearch className={styles.searchIcon} />
                            <input type="text" placeholder="Tìm kiếm theo tên, email, SĐT..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className={styles.searchInput} />
                            {searchQuery && <button className={styles.clearSearch} onClick={() => setSearchQuery('')}><FiX /></button>}
                        </div>
                        <div className={styles.filterGroup}>
                            <label>Trạng thái</label>
                            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value as FilterStatus)}>
                                <option value="all">Tất cả</option>
                                <option value="unread">Chưa đọc</option>
                                <option value="read">Đã đọc</option>
                            </select>
                        </div>
                        <div className={styles.filterGroup}>
                            <label>Chủ đề</label>
                            <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)}>
                                <option value="all">Tất cả</option>
                                {uniqueSubjects.map(s => <option key={s} value={s}>{subjectMap[s] || s}</option>)}
                            </select>
                        </div>
                        <div className={styles.filterGroup}>
                            <label>Sắp xếp</label>
                            <select value={`${sortField}-${sortOrder}`} onChange={(e) => { const [f, o] = e.target.value.split('-'); setSortField(f as SortField); setSortOrder(o as SortOrder); }}>
                                <option value="createdAt-desc">Mới nhất</option>
                                <option value="createdAt-asc">Cũ nhất</option>
                                <option value="fullName-asc">Tên A→Z</option>
                                <option value="fullName-desc">Tên Z→A</option>
                            </select>
                        </div>
                    </div>
                )}

                {/* Bulk Actions */}
                {selectedIds.size > 0 && (
                    <div className={styles.bulkBar}>
                        <span>Đã chọn {selectedIds.size} liên hệ</span>
                        <div className={styles.bulkActions}>
                            <button onClick={() => requestDelete(Array.from(selectedIds))} className={styles.bulkDelete}>
                                <FiTrash2 /> Xóa
                            </button>
                            <button onClick={() => setSelectedIds(new Set())} className={styles.bulkCancel}>Bỏ chọn</button>
                        </div>
                    </div>
                )}

                {/* Results */}
                <div className={styles.resultsBar}>
                    <span>{filteredContacts.length} kết quả</span>
                    {totalPages > 1 && <span>Trang {safeCurrentPage}/{totalPages}</span>}
                </div>

                {/* Table Header */}
                <div className={styles.tableHeader}>
                    <div className={styles.thCheck}>
                        <input type="checkbox" checked={selectedIds.size === paginatedContacts.length && paginatedContacts.length > 0} onChange={toggleSelectAll} />
                    </div>
                    <div className={styles.thName}>Họ tên</div>
                    <div className={styles.thContact}>Liên hệ</div>
                    <div className={styles.thSubject}>Chủ đề</div>
                    <div className={styles.thMessage}>Nội dung</div>
                    <div className={styles.thDate}>Ngày</div>
                    <div className={styles.thActions}>Thao tác</div>
                </div>

                {/* Contact List */}
                {loading && contacts.length === 0 ? (
                    <div className={styles.emptyBox}><p>Đang tải...</p></div>
                ) : paginatedContacts.length === 0 ? (
                    <div className={styles.emptyBox}>
                        <FiMessageSquare className={styles.emptyIcon} />
                        <p>{contacts.length === 0 ? 'Chưa có yêu cầu tư vấn nào.' : 'Không tìm thấy kết quả phù hợp.'}</p>
                    </div>
                ) : (
                    <div className={styles.contactList}>
                        {paginatedContacts.map((c) => (
                            <div key={c._id} className={`${styles.contactRow} ${!c.isRead ? styles.unread : ''} ${selectedIds.has(c._id) ? styles.selected : ''}`}>
                                <div className={styles.tdCheck}>
                                    <input type="checkbox" checked={selectedIds.has(c._id)} onChange={() => toggleSelect(c._id)} />
                                </div>
                                <div className={styles.tdName}>
                                    <span className={styles.contactName}>{c.fullName}</span>
                                    {!c.isRead && <span className={styles.newBadge}>Mới</span>}
                                </div>
                                <div className={styles.tdContact}>
                                    <span><FiMail /> {c.email}</span>
                                    <span><FiPhone /> {c.phone}</span>
                                </div>
                                <div className={styles.tdSubject}>
                                    <span className={styles.subjectTag}>{subjectMap[c.subject] || c.subject}</span>
                                </div>
                                <div className={styles.tdMessage}>
                                    <p className={styles.msgPreview}>{c.message}</p>
                                </div>
                                <div className={styles.tdDate}>
                                    {new Date(c.createdAt).toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' })}
                                    <span className={styles.timeSmall}>
                                        {new Date(c.createdAt).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </div>
                                <div className={styles.tdActions}>
                                    <button onClick={() => toggleRead(c._id, c.isRead)} title={c.isRead ? 'Chưa đọc' : 'Đã đọc'} className={styles.actionBtn}>
                                        {c.isRead ? <FiCircle /> : <FiCheck />}
                                    </button>
                                    <button onClick={() => requestDelete([c._id])} title="Xóa" className={`${styles.actionBtn} ${styles.deleteBtn}`}>
                                        <FiTrash2 />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={safeCurrentPage === 1} className={styles.pageBtn}>
                            <FiChevronLeft />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button key={page} onClick={() => setCurrentPage(page)} className={`${styles.pageBtn} ${page === safeCurrentPage ? styles.pageActive : ''}`}>
                                {page}
                            </button>
                        ))}
                        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={safeCurrentPage === totalPages} className={styles.pageBtn}>
                            <FiChevronRight />
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}
