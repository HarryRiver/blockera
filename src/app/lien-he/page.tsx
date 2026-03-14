'use client';

import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiYoutube, FiSend, FiCheck } from 'react-icons/fi';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { FaTiktok } from 'react-icons/fa';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './contact.module.css';

export default function ContactPage() {
    const [form, setForm] = useState({ fullName: '', email: '', phone: '', subject: 'tu-van-khoa-hoc', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
            if (res.ok) {
                setStatus('success');
                setForm({ fullName: '', email: '', phone: '', subject: 'tu-van-khoa-hoc', message: '' });
            } else if (res.status === 429) {
                setStatus('error');
                alert('Bạn đã gửi yêu cầu gần đây. Vui lòng đợi 3 phút trước khi gửi lại.');
            } else setStatus('error');
        } catch { setStatus('error'); }
    };

    return (
        <>
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <ScrollReveal delay={100}>
                        <span className={styles.bannerLabel}>LIÊN HỆ</span>
                    </ScrollReveal>
                    <ScrollReveal delay={250}>
                        <h1 className={styles.bannerTitle}>Kết nối với BLOCKERA</h1>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <p className={styles.bannerSub}>Liên hệ ngay để được tư vấn chương trình đào tạo phù hợp</p>
                    </ScrollReveal>
                </div>
            </section>

            <section className={`section ${styles.contactSection}`}>
                <div className={`container ${styles.contactGrid}`}>
                    <ScrollReveal direction="left" delay={100}>
                        <div className={styles.contactInfo}>
                            <h2 className="section-title">Thông tin liên hệ</h2>
                            <p className={styles.contactDesc}>
                                Hãy liên hệ với chúng tôi để được tư vấn giải pháp đào tạo phù hợp nhất cho bạn hoặc doanh nghiệp của bạn.
                            </p>

                            <div className={styles.infoList}>
                                <a href="tel:0984191359" className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiPhone /></div>
                                    <div>
                                        <div className={styles.infoLabel}>Điện thoại / Zalo</div>
                                        <div className={styles.infoValue}>0984 191 359</div>
                                    </div>
                                </a>
                                <a href="mailto:contact@blockeraedu.com" className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiMail /></div>
                                    <div>
                                        <div className={styles.infoLabel}>Email</div>
                                        <div className={styles.infoValue}>contact@blockeraedu.com</div>
                                    </div>
                                </a>
                                <div className={styles.infoItem}>
                                    <div className={styles.infoIcon}><FiMapPin /></div>
                                    <div>
                                        <div className={styles.infoLabel}>Địa chỉ</div>
                                        <div className={styles.infoValue}>Hà Nội, Việt Nam</div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.socialGroup}>
                                <h3 className={styles.socialTitle}>Theo dõi chúng tôi</h3>
                                <div className={styles.socialLinks}>
                                    <a href="#" className={styles.socialLink} onClick={(e) => e.preventDefault()}>
                                        <FiFacebook /> Facebook
                                    </a>
                                    <a href="https://www.facebook.com/share/18CR7W6rAr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        <FiFacebook /> Fanpage
                                    </a>
                                    <a href="https://zalo.me/0984191359" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        <BiMessageRoundedDots /> Zalo
                                    </a>
                                    <a href="#" className={styles.socialLink} onClick={(e) => e.preventDefault()}>
                                        <FaTiktok /> TikTok
                                    </a>
                                    <a href="https://youtube.com/@hellenthanhthuy?si=zvGijTHswswF3Y6x" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                        <FiYoutube /> YouTube
                                    </a>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" delay={250}>
                        <div className={styles.formWrapper}>
                            <h2 className={styles.formTitle}>Gửi yêu cầu tư vấn</h2>
                            {status === 'success' ? (
                                <div className={styles.successMsg}>
                                    <FiCheck className={styles.successIcon} />
                                    <h3>Gửi thành công!</h3>
                                    <p>Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.</p>
                                    <button onClick={() => setStatus('idle')} className={styles.resetBtn}>Gửi yêu cầu khác</button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="fullName">Họ và tên *</label>
                                            <input id="fullName" type="text" required value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="Nhập họ tên" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">Số điện thoại *</label>
                                            <input id="phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="0xxx xxx xxx" />
                                        </div>
                                    </div>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">Email *</label>
                                            <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@example.com" />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="subject">Chủ đề</label>
                                            <select id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value as typeof form.subject })}>
                                                <option value="tu-van-khoa-hoc">Tư vấn khóa học</option>
                                                <option value="hop-tac-doanh-nghiep">Hợp tác doanh nghiệp</option>
                                                <option value="khac">Khác</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Nội dung *</label>
                                        <textarea id="message" required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Mô tả nhu cầu của bạn..." />
                                    </div>
                                    {status === 'error' && <p className={styles.errorMsg}>Có lỗi xảy ra. Vui lòng thử lại.</p>}
                                    <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Đang gửi...' : <><FiSend /> Gửi yêu cầu</>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
