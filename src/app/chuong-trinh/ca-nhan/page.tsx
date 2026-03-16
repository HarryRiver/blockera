import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiUser, FiBriefcase, FiHome } from 'react-icons/fi';
import { HiOutlineUser } from 'react-icons/hi2';
import styles from '../detail.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
    title: 'Đào tạo Cá nhân - Xây dựng thương hiệu',
    description: 'Chương trình đào tạo phong thái cá nhân, xây dựng thương hiệu cá nhân chuyên nghiệp.',
    openGraph: {
        title: 'Cá nhân xây dựng thương hiệu | BLOCKERA Education',
        description: 'Đào tạo phong thái cho cá nhân muốn xây dựng thương hiệu chuyên nghiệp.',
        url: 'https://blockeraedu.com/chuong-trinh/ca-nhan',
    },
    alternates: { canonical: 'https://blockeraedu.com/chuong-trinh/ca-nhan' },
};

const problems = [
    'Năng lực chuyên môn cao nhưng không tạo được dấu ấn riêng và sự ghi nhớ trong tâm trí người đối diện',
    'Giao tiếp tốt nhưng thiếu dấu ấn, chưa làm chủ được giọng nói, nội dung và kỹ năng trình bày thuyết phục',
    'Phong cách cá nhân chênh lệch giữa "tôi muốn thể hiện" và "người khác cảm nhận"',
    'Hình ảnh cá nhân được xây dựng theo cảm hứng, thương hiệu thiếu định vị rõ ràng',
    'Tự ti với một số khuyết điểm cá nhân về: vóc dáng, khuôn mặt, nụ cười, giọng nói, đi lại, ngôn ngữ hình thể...',
    'Chưa biết tạo ấn tượng tại các sự kiện, thiếu kỹ năng kiến thức trong nghi thức giao tiếp kinh doanh',
];

const results = [
    'Tự tin dựa trên chuẩn mực, không dựa trên cảm xúc nhất thời',
    'Khả năng giao tiếp rõ ràng, thoáng và có tầm',
    'Phong thái phù hợp với vai trò và vị trí công việc',
    'Khả năng xử lý vấn đề khó vẫn duy trì hình ảnh chuyên nghiệp',
];

const problemIllustrations = [
    { src: '/images/illustrations/personal-branding/problem-1.svg', alt: 'Problem 1 illustration' },
    { src: '/images/illustrations/personal-branding/problem-2.svg', alt: 'Problem 2 illustration' },
    { src: '/images/illustrations/personal-branding/problem-3.svg', alt: 'Problem 3 illustration' },
    { src: '/images/illustrations/personal-branding/problem-4.svg', alt: 'Problem 4 illustration' },
    { src: '/images/illustrations/personal-branding/problem-5.svg', alt: 'Problem 5 illustration' },
    { src: '/images/illustrations/personal-branding/problem-6.svg', alt: 'Problem 6 illustration' },
];

const resultIllustrations = [
    { src: '/images/illustrations/personal-branding/result-1.svg', alt: 'Result 1 illustration' },
    { src: '/images/illustrations/personal-branding/result-2.svg', alt: 'Result 2 illustration' },
    { src: '/images/illustrations/personal-branding/result-3.svg', alt: 'Result 3 illustration' },
    { src: '/images/illustrations/personal-branding/result-4.svg', alt: 'Result 4 illustration' },
];

const outcomes = [
    'Năng lực chuyên môn được ghi nhận thông qua dấu ấn cá nhân rõ ràng',
    'Giao tiếp có chiều sâu, giọng nói và cách trình bày mang tính thuyết phục',
    'Hình ảnh và phong thái cá nhân nhất quán với định hướng phát triển nghề nghiệp',
    'Vị trí cá nhân được thiết lập rõ ràng và bền vững',
    'Nghệ thuật tạo ấn tượng chuyên nghiệp trong bối cảnh quan trọng',
    'Phong thái trở thành một phần tự nhiên của năng lực cá nhân',
    'Khi chuẩn mực và sự tự tin, phong thái rõ ràng, chuyên nghiệp trở thành tự nhiên',
];

const participantTargets = [
    'Lãnh đạo, quản lý các cấp',
    'Chuyên viên, nhân sự chuyên môn',
    'Đội ngũ kinh doanh, chăm sóc khách hàng',
    'Nhân sự hậu cần, vận hành, hỗ trợ',
    'Cá nhân xây dựng hình ảnh nghề nghiệp',
    'Cán bộ công vụ, đơn vị hành chính nhà nước',
];

const trainingModules = [
    'Chuẩn hóa phong thái hiện diện theo vai trò',
    'Giao tiếp thể hiện sự tôn trọng và hiệu quả',
    'Ngôn ngữ hình thể, giọng nói và biểu đạt chuyên nghiệp',
    'Nghi thức giao tiếp, ứng xử trong môi trường công việc',
    'Kỹ năng xử lý tình huống và quản trị cảm xúc',
    'Định vị hình ảnh cá nhân và đội ngũ',
];

const implementationMethods = [
    {
        step: 1,
        title: 'Chuẩn hóa nhận thức',
        description: 'Nền tảng của phong thái - hiểu rõ vai trò và trách nhiệm',
    },
    {
        step: 2,
        title: 'Chuẩn hóa hành động',
        description: 'Chuyển đổi nhận thức thành thực hành - hiệu chỉnh hành động thực tế',
    },
    {
        step: 3,
        title: 'Chuẩn hóa môi trường',
        description: 'Duy trì thay đổi - tích hợp vào vận hành tổ chức',
    },
];

const featuredProgramsFromHome = [
    {
        icon: <FiUser />,
        title: 'Cá nhân',
        subtitle: 'Xây dựng thương hiệu',
        description: 'Tự tin dựa trên chuẩn mực, giao tiếp thuyết phục, phong thái phù hợp vai trò và vị trí công việc.',
        href: '/chuong-trinh/ca-nhan',
    },
    {
        icon: <FiBriefcase />,
        title: 'Doanh nghiệp',
        subtitle: 'Tập đoàn & Công ty',
        description: 'Chuẩn hóa phong thái, nghi thức giao tiếp, trang phục công sở và nghệ thuật tạo ấn tượng chuyên nghiệp.',
        href: '/chuong-trinh/doanh-nghiep',
    },
    {
        icon: <FiHome />,
        title: 'Cơ quan nhà nước',
        subtitle: 'Đơn vị hành chính',
        description: 'Chuẩn hóa phong thái giao tiếp công vụ, xây dựng môi trường làm việc văn minh, nhất quán.',
        href: '/chuong-trinh/co-quan-nha-nuoc',
    },
];

export default function CaNhanPage() {
    return (
        <>
            <section className={styles.banner}>
                <div className={styles.bannerBg}>
                    <Image src="/images/bg/hero-ca-nhan.png" alt="" fill style={{ objectFit: 'cover' }} priority />
                </div>
                <div className={styles.bannerOverlay} />
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                    <div className={styles.bannerIcon} style={{ background: 'linear-gradient(135deg, #F29023, #e8830d)' }}>
                        <HiOutlineUser />
                    </div>
                    <h1 className={styles.bannerTitle}>CÁ NHÂN XÂY DỰNG THƯƠNG HIỆU</h1>
                    <p className={styles.bannerSub}>Personal Branding — Nâng tầm phong thái cho cá nhân xuất hiện chuyên nghiệp và có sức ảnh hưởng</p>
                </div>
            </section>

            <section className={styles.introSection}>
                <div className="container">
                    <ScrollReveal>
                        <p className={styles.introText}>
                            Đối với cá nhân, đặc biệt là người giữ vị trí quản lý hoặc thường xuyên xuất hiện trước công chúng, phong thái là yếu tố quyết định độ tin tưởng trước khi nội dung được truyền đạt.
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <section className={styles.problemsSection}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">THỰC TRẠNG &amp; KẾT QUẢ</span>
                        <h2 className="section-title center">VẤN ĐỀ CẦN GIẢI QUYẾT</h2>
                    </ScrollReveal>
                    <div className={styles.problemsGrid}>
                        <ScrollReveal delay={100}>
                            <div className={styles.problemCol}>
                                <h3 style={{ color: '#e74c3c' }}>Vấn đề thường gặp</h3>
                                <ul className={`${styles.problemList} ${styles.issues}`}>
                                    {problems.map((p, index) => (
                                        <li key={p} className={styles.problemItem}>
                                            <div className={styles.problemVisual}>
                                                <Image
                                                    src={problemIllustrations[index]?.src ?? '/images/illustrations/personal-branding/problem-1.svg'}
                                                    alt={problemIllustrations[index]?.alt ?? 'Problem illustration'}
                                                    width={72}
                                                    height={72}
                                                    sizes="72px"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <p className={styles.problemText}>{p}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={250}>
                            <div className={styles.problemCol}>
                                <h3 style={{ color: '#2ecc71' }}>Kết quả đạt được</h3>
                                <ul className={`${styles.problemList} ${styles.results}`}>
                                    {results.map((r, index) => (
                                        <li key={r} className={styles.problemItem}>
                                            <div className={styles.problemVisual}>
                                                <Image
                                                    src={resultIllustrations[index]?.src ?? '/images/illustrations/personal-branding/result-1.svg'}
                                                    alt={resultIllustrations[index]?.alt ?? 'Result illustration'}
                                                    width={72}
                                                    height={72}
                                                    sizes="72px"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <p className={styles.problemText}>{r}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className={styles.outcomesSection}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label" style={{ color: 'var(--chrome-light)' }}>SAU KHÓA ĐÀO TẠO</span>
                        <h2 className="section-title center" style={{ color: 'white' }}>GIÁ TRỊ BẠN NHẬN ĐƯỢC</h2>
                    </ScrollReveal>
                    <div className={styles.outcomesGrid}>
                        {outcomes.map((o, i) => (
                            <ScrollReveal key={o} delay={i * 100}>
                                <div className={styles.outcomeCard}>
                                    <div className={styles.outcomeIcon}><FiCheck /></div>
                                    <p className={styles.outcomeText}>{o}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.trainingContentSection}`}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">NỘI DUNG TRIỂN KHAI</span>
                        <h2 className="section-title center">Tổng quan chương trình đào tạo</h2>
                    </ScrollReveal>

                    <div className={styles.trainingTopGrid}>
                        <ScrollReveal delay={80}>
                            <article className={styles.trainingInfoCard}>
                                <h3 className={styles.trainingInfoTitle}>1. Đối tượng tham gia</h3>
                                <ul className={styles.trainingChecklist}>
                                    {participantTargets.map((item) => (
                                        <li key={item}>
                                            <FiCheck />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </ScrollReveal>

                        <ScrollReveal delay={180}>
                            <article className={styles.trainingInfoCard}>
                                <h3 className={styles.trainingInfoTitle}>2. Nội dung đào tạo</h3>
                                <ul className={styles.trainingChecklist}>
                                    {trainingModules.map((item) => (
                                        <li key={item}>
                                            <FiCheck />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </ScrollReveal>
                    </div>

                    <div className={styles.trainingBottomGrid}>
                        <ScrollReveal delay={80}>
                            <article className={styles.trainingInfoCard}>
                                <h3 className={styles.trainingInfoTitle}>3. Phương pháp triển khai</h3>
                                <div className={styles.trainingMethodGrid}>
                                    {implementationMethods.map((phase) => (
                                        <div key={phase.step} className={styles.trainingMethodItem}>
                                            <span className={styles.trainingMethodStep}>{phase.step}</span>
                                            <h4>{phase.title}</h4>
                                            <p>{phase.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </article>
                        </ScrollReveal>

                        <ScrollReveal delay={180}>
                            <article className={styles.trainingInfoCard}>
                                <h3 className={styles.trainingInfoTitle}>4. Các chương trình đã đào tạo</h3>
                                <div className={styles.trainingProgramGrid}>
                                    {featuredProgramsFromHome.map((program) => (
                                        <Link key={program.title} href={program.href} className={styles.trainingProgramCard}>
                                            <div className={styles.trainingProgramIcon}>{program.icon}</div>
                                            <h4>{program.title}</h4>
                                            <span>{program.subtitle}</span>
                                            <p>{program.description}</p>
                                        </Link>
                                    ))}
                                </div>
                            </article>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container">
                    <ScrollReveal>
                        <h2 className={styles.ctaTitle}>Bắt đầu hành trình xây dựng thương hiệu cá nhân</h2>
                        <p className={styles.ctaDesc}>Liên hệ ngay để được tư vấn chương trình phù hợp</p>
                        <Link href="/lien-he" className={styles.ctaBtn}>
                            ĐĂNG KÝ TƯ VẤN <FiArrowRight />
                        </Link>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
}
