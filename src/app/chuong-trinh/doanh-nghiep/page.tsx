import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import styles from '../detail.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
    title: 'Đào tạo Doanh nghiệp và Tập đoàn',
    description: 'Chương trình đào tạo phong thái chuyên nghiệp cho doanh nghiệp và tập đoàn.',
    openGraph: {
        title: 'Doanh nghiệp và Tập đoàn | BLOCKERA Education',
        url: 'https://blockeraedu.com/chuong-trinh/doanh-nghiep',
    },
    alternates: { canonical: 'https://blockeraedu.com/chuong-trinh/doanh-nghiep' },
};

const objectives = [
    'Chuẩn hóa phong thái và hoạt động của đội ngũ theo hình ảnh thương hiệu mong muốn',
    'Nâng cao chất lượng giao tiếp trong mọi tình huống',
    'Hỗ trợ lãnh đạo và quản lý xây dựng phong thái bản lĩnh, tạo nên niềm tin trong đội ngũ',
    'Hình thành đồng hành giữa các bộ phận, góp phần ổn định tổ chức văn hóa',
];

const results = [
    'Sự đồng bộ trong hoạt động và giao tiếp giữa các bộ phận',
    'Giảm xung đột phát sinh từ cách diễn đạt và thái độ giao tiếp',
    'Nâng cao chất lượng trải nghiệm từ khách hàng trong mọi điểm tiếp xúc',
    'Tăng cường sự tự tin của đội ngũ khi hiện diện tại các sự kiện',
    'Ổn định văn hóa tổ chức',
];

const departments = [
    {
        name: 'Toàn bộ nhân sự',
        issues: [
            'Hình ảnh thương hiệu không đồng nhất qua nhân sự',
            'Văn hóa doanh nghiệp tồn tại trên khẩu hiệu hơn là hành vi',
            'Xung đột nội bộ phát sinh từ giao tiếp và quy trình làm việc',
            'Lãnh đạo và đội ngũ thiếu chuẩn tham chiếu hành vi',
            'Áp lực công nghệ AI, truyền thông và môi trường lên hình ảnh nhân sự, ảnh hưởng đến uy tín thương hiệu',
        ],
        training: [
            'Nhận thức vai trò & truyền thông hình ảnh đại diện cho tổ chức',
            'Chuẩn hóa nghi thức giao tiếp, xã giao và tác phong chuyên nghiệp nơi làm việc',
            'Chuẩn hóa hình ảnh và phong cách trang phục nơi công sở',
            'Nghệ thuật làm chủ giọng nói và giao tiếp ứng xử công sở, kỹ năng phối hợp làm việc đội nhóm',
            'Trang bị kỹ năng sử dụng AI trong công việc, kỹ năng ứng xử, truyền thông và an toàn thông tin trên không gian mạng',
        ],
    },
    {
        name: 'Phòng Dịch vụ & Kinh doanh',
        issues: [
            'Trải nghiệm khách hàng thiếu ổn định',
            'Thiếu năng lực tạo ấn tượng ngay điểm chạm đầu tiên',
            'Giao tiếp mang tính cảm xúc thay vì chuẩn mực',
            'Kỹ năng thuyết trình, đàm phán, thuyết phục khó khăn thiếu điểm nhấn',
        ],
        training: [
            'Nghệ thuật giao tiếp, xã giao trong mọi trường doanh nghiệp',
            'Chuẩn hóa hình ảnh và tác phong đồng bộ, nhất quán',
            'Nghệ thuật 8 giây tạo ấn tượng ngay từ điểm chạm đầu tiên',
            'Định vị phong cách cá nhân và phong thái chuyên nghiệp',
            'Nghệ thuật làm chủ ngôn ngữ hình thể và giọng nói thu hút',
            'Nghệ thuật ứng xử và kỹ năng làm việc ảnh hưởng',
        ],
    },
    {
        name: 'Lãnh đạo và Quản lý',
        issues: [
            'Năng lực chuyên môn mạnh nhưng sự hiện diện chưa tạo được niềm tin',
            'Hình ảnh chưa đồng nhất với định vị tổ chức',
            'Thông điệp từ lãnh đạo không chuyển hóa thành hành vi',
            'Giao tiếp quản trị chưa kiểm soát được cảm nhận của đội ngũ, phân việc chưa đúng người đúng vai',
        ],
        training: [
            'Phong thái lãnh đạo tạo ảnh hưởng',
            'Nghệ thuật hiện diện tạo ấn tượng trong các bối cảnh quan trọng',
            'Nghệ thuật làm chủ ngôn ngữ hình thể và giọng nói thu hút',
            'Nghệ thuật quản trị giao tiếp, phản hồi, xử lý tình huống nhạy cảm',
            'Phân tích body shape, lựa chọn phong cách phù hợp theo từng sự kiện',
        ],
    },
];

export default function DoanhNghiepPage() {
    return (
        <>
            <section className={styles.banner}>
                <div className={styles.bannerBg}>
                    <Image src="/images/bg/hero-doanh-nghiep.png" alt="" fill style={{ objectFit: 'cover' }} priority />
                </div>
                <div className={styles.bannerOverlay} />
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                    <div className={styles.bannerIcon} style={{ background: 'linear-gradient(135deg, #1B3A6B, #2a5298)' }}>
                        <HiOutlineBuildingOffice2 />
                    </div>
                    <h1 className={styles.bannerTitle}>DOANH NGHIỆP VÀ TẬP ĐOÀN</h1>
                    <p className={styles.bannerSub}>Corporate Training — Chuẩn hóa phong thái toàn diện cho đội ngũ, từ nhân sự đến lãnh đạo</p>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container">
                    <ScrollReveal>
                        <p className={styles.introText}>
                            Trong môi trường doanh nghiệp, con người là yếu tố trực tiếp tạo ra trải nghiệm thương hiệu. Điều khác biệt giữa một tổ chức chuyên nghiệp và một tổ chức thông thường không nằm ở sản phẩm, mà là cách đội ngũ sản xuất và tương tác với khách hàng, đối tác và nội bộ.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className={styles.problemsSection}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">MỤC TIÊU &amp; KẾT QUẢ</span>
                        <h2 className="section-title center">GIẢI PHÁP TOÀN DIỆN</h2>
                    </ScrollReveal>
                    <div className={styles.problemsGrid}>
                        <ScrollReveal delay={100}>
                            <div className={styles.problemCol}>
                                <h3 style={{ color: '#1B3A6B' }}>Mục tiêu đào tạo</h3>
                                <ul className={`${styles.problemList} ${styles.issues}`}>
                                    {objectives.map(p => <li key={p}>{p}</li>)}
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={250}>
                            <div className={styles.problemCol}>
                                <h3 style={{ color: '#2ecc71' }}>Kết quả đạt được</h3>
                                <ul className={`${styles.problemList} ${styles.results}`}>
                                    {results.map(r => <li key={r}>{r}</li>)}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className={styles.deptSection}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">CHI TIẾT THEO BỘ PHẬN</span>
                        <h2 className="section-title center">NỘI DUNG ĐÀO TẠO CHUYÊN SÂU</h2>
                    </ScrollReveal>
                    <div className={styles.deptGrid}>
                        {departments.map((dept, i) => (
                            <ScrollReveal key={dept.name} delay={i * 150}>
                                <div className={styles.deptCard}>
                                    <h3 className={styles.deptName}>{dept.name}</h3>
                                    <div className={styles.deptContent}>
                                        <div>
                                            <h4 className={styles.deptColTitle}>THỰC TRẠNG</h4>
                                            <ul className={styles.deptList}>
                                                {dept.issues.map(issue => <li key={issue}>{issue}</li>)}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className={styles.deptColTitle}>NỘI DUNG ĐÀO TẠO</h4>
                                            <ul className={styles.deptList}>
                                                {dept.training.map(t => <li key={t}>{t}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container">
                    <ScrollReveal>
                        <h2 className={styles.ctaTitle}>Nâng tầm đội ngũ doanh nghiệp</h2>
                        <p className={styles.ctaDesc}>Liên hệ để nhận tư vấn chương trình đào tạo phù hợp với tổ chức</p>
                        <Link href="/lien-he" className={styles.ctaBtn}>
                            ĐĂNG KÝ TƯ VẤN <FiArrowRight />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
