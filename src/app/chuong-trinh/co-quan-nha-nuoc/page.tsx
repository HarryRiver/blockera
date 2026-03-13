import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import styles from '../detail.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
    title: 'Đào tạo Cơ quan nhà nước và đơn vị hành chính',
    description: 'Chương trình đào tạo phong thái công vụ, chuẩn hóa giao tiếp hành chính.',
    openGraph: {
        title: 'Cơ quan nhà nước | BLOCKERA Education',
        url: 'https://blockeraedu.com/chuong-trinh/co-quan-nha-nuoc',
    },
    alternates: { canonical: 'https://blockeraedu.com/chuong-trinh/co-quan-nha-nuoc' },
};

const objectives = [
    'Chuẩn hóa phong thái và giao tiếp công vụ theo chuẩn mực, tôn trọng và rõ ràng',
    'Xây dựng phong cách làm việc chuyên nghiệp, tạo cảm giác tin cậy',
    'Nâng cao nhận diện hình ảnh trong giao tiếp với người dân và đối tác',
    'Góp phần xây dựng môi trường làm việc văn minh, chuyên nghiệp và nhất quán',
];

const results = [
    'Hình ảnh tổ chức trở nên chỉn chu, đồng bộ và đáng tin cậy hơn',
    'Ấn tượng về sự chuyên nghiệp được hình thành ngay từ khoảnh khắc đầu tiên',
    'Giao tiếp và hợp tác diễn ra thuận lợi nhờ sự rõ ràng trong cách hiện diện',
    'Phong thái trở thành một phần của thương hiệu tổ chức',
];

const departments = [
    {
        name: 'Toàn bộ cán bộ, công chức',
        issues: [
            'Phong thái công vụ chưa được chuẩn hóa đồng bộ',
            'Giao tiếp hành chính còn thiên về xử lý thủ tục hơn là phục vụ',
            'Thiếu kỹ năng kiểm soát cảm xúc, xử lý tình huống tế nhị',
            'Chuyển đổi số nhưng chưa được chuẩn hóa quy trình',
            'Hình ảnh, tác phong chưa được chú trọng sự chỉn chu chuyên nghiệp',
            'Văn hóa công sở chỉ là khẩu hiệu chưa chuyển hóa thành hành vi',
        ],
        training: [
            'Xây dựng hình ảnh và phong cách chỉn chu chuyên nghiệp',
            'Nghệ thuật làm chủ ngôn ngữ hình thể và giọng nói thu hút',
            'Nghi thức dùng trà, tiệc và nghệ thuật giao tiếp tại sự kiện',
            'Nghệ thuật ứng xử và kỹ năng làm việc đội nhóm',
            'Quy trình tiếp đón phục vụ công tạo niềm tin và uy tín đơn vị',
            'Kỹ năng quản trị cảm xúc, xử lý tình huống giao tiếp căng thẳng',
            'Kỹ năng sử dụng AI trong công việc và an toàn thông tin trên không gian mạng',
        ],
    },
    {
        name: 'Lãnh đạo cấp quản lý',
        issues: [
            'Phong thái lãnh đạo chưa được chuẩn hóa trong môi trường hiện đại',
            'Giao tiếp công việc thiếu sự cân bằng giữa quyền hạn và tinh thần phục vụ',
            'Áp lực truyền thông và môi trường minh bạch gia tăng',
            'Cách điều chỉnh giữa các vị trí chưa đồng bộ',
        ],
        training: [
            'Chuẩn hóa phong thái lãnh đạo trong môi trường công vụ',
            'Nghệ thuật quản trị trực tiếp theo môi trường hoạt động chính',
            'Nghệ thuật xử lý tình huống nhạy cảm và áp lực xã hội',
            'Xây dựng hình ảnh lãnh đạo đồng nhất với hình ảnh cơ quan',
            'Vai trò lãnh đạo trong kiến trúc tạo môi trường công vụ văn minh',
            'Nghệ thuật làm chủ ngôn ngữ hình thể và giọng nói thu hút',
            'Nghi thức giao tiếp xã giao, dùng trà, tiệc theo từng vai trò tham dự',
            'Ứng dụng công nghệ AI trong lãnh đạo, quản trị và điều hành',
        ],
    },
];

export default function CoQuanNhaNuocPage() {
    return (
        <>
            <section className={styles.banner}>
                <div className={styles.bannerBg}>
                    <Image src="/images/bg/hero-co-quan.png" alt="" fill style={{ objectFit: 'cover' }} priority />
                </div>
                <div className={styles.bannerOverlay} />
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                    <div className={styles.bannerIcon} style={{ background: 'linear-gradient(135deg, #2A9D8F, #1a7a6e)' }}>
                        <HiOutlineBuildingLibrary />
                    </div>
                    <h1 className={styles.bannerTitle}>CƠ QUAN NHÀ NƯỚC VÀ ĐƠN VỊ HÀNH CHÍNH</h1>
                    <p className={styles.bannerSub}>Government &amp; Public Services — Chuẩn hóa phong thái công vụ, nâng cao hình ảnh cơ quan</p>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container">
                    <ScrollReveal>
                        <p className={styles.introText}>
                            Đối với cơ quan và đơn vị công, phong thái và cách xử lý của cán bộ không chỉ phản ánh hình ảnh cá nhân mà còn đại diện cho hình ảnh của cơ quan trước nhân dân và xã hội.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className={styles.problemsSection}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">MỤC TIÊU &amp; KẾT QUẢ</span>
                        <h2 className="section-title center">GIẢI PHÁP CHO KHU VỰC CÔNG</h2>
                    </ScrollReveal>
                    <div className={styles.problemsGrid}>
                        <ScrollReveal delay={100}>
                            <div className={styles.problemCol}>
                                <h3 style={{ color: '#2A9D8F' }}>Mục tiêu đào tạo</h3>
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
                        <span className="section-label">CHI TIẾT THEO ĐỐI TƯỢNG</span>
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
                        <h2 className={styles.ctaTitle}>Nâng tầm hình ảnh cơ quan</h2>
                        <p className={styles.ctaDesc}>Liên hệ để nhận tư vấn chương trình đào tạo phù hợp</p>
                        <Link href="/lien-he" className={styles.ctaBtn}>
                            ĐĂNG KÝ TƯ VẤN <FiArrowRight />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
