import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiUser, FiBriefcase, FiHome, FiArrowRight, FiCheck, FiStar, FiHeart, FiImage } from 'react-icons/fi';
import ScrollReveal from '@/components/ui/ScrollReveal';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import styles from './programs.module.css';

export const metadata: Metadata = {
    title: 'Chương trình đào tạo',
    description: 'Chương trình đào tạo phong thái, nghi thức, giao tiếp chuyên nghiệp cho cá nhân, doanh nghiệp và cơ quan nhà nước. Phương pháp 3 giai đoạn chuẩn hóa bài bản.',
    keywords: [
        'chương trình đào tạo phong thái', 'đào tạo nghi thức doanh nghiệp',
        'khóa học giao tiếp chuyên nghiệp', 'đào tạo kỹ năng mềm',
        'chuẩn hóa hành vi', 'đào tạo nhân sự', 'phong thái lãnh đạo',
    ],
    openGraph: {
        title: 'Chương trình đào tạo | BLOCKERA Education',
        description: 'Giải pháp đào tạo phong thái cho cá nhân, doanh nghiệp và cơ quan nhà nước.',
        url: 'https://blockeraedu.com/chuong-trinh',
    },
    alternates: { canonical: 'https://blockeraedu.com/chuong-trinh' },
};

const programs = [
    {
        icon: <FiUser />, title: 'Cá nhân xây dựng thương hiệu', subtitle: 'Personal Branding',
        color: '#F29023', href: '/chuong-trinh/ca-nhan', image: '/images/bg/hero-ca-nhan.png',
        desc: 'Nâng tầm phong thái cho cá nhân xuất hiện chuyên nghiệp và có sức ảnh hưởng',
        highlights: ['Định vị thương hiệu cá nhân', 'Nghệ thuật giao tiếp thuyết phục', 'Phong thái chuyên nghiệp tự nhiên'],
    },
    {
        icon: <FiBriefcase />, title: 'Doanh nghiệp và Tập đoàn', subtitle: 'Corporate Training',
        color: '#1B3A6B', href: '/chuong-trinh/doanh-nghiep', image: '/images/bg/hero-doanh-nghiep.png',
        desc: 'Chuẩn hóa phong thái toàn diện cho đội ngũ, từ nhân sự đến lãnh đạo',
        highlights: ['Chuẩn hóa hành vi đội ngũ', 'Nâng cao trải nghiệm khách hàng', 'Ổn định văn hóa tổ chức'],
    },
    {
        icon: <FiHome />, title: 'Cơ quan nhà nước', subtitle: 'Government & Public Services',
        color: '#2A9D8F', href: '/chuong-trinh/co-quan-nha-nuoc', image: '/images/bg/hero-co-quan.png',
        desc: 'Chuẩn hóa phong thái công vụ, nâng cao hình ảnh cơ quan',
        highlights: ['Phong thái công vụ chuẩn mực', 'Giao tiếp hành chính chuyên nghiệp', 'Hình ảnh cơ quan đáng tin cậy'],
    },
];

const phases = [
    {
        title: 'Chuẩn hóa nhận thức', subtitle: 'Nền tảng của phong thái', color: '#2A9D8F',
        desc: 'Phong thái không bắt đầu từ hình thức bên ngoài mà bắt đầu từ nhận thức về vai trò và trách nhiệm.',
        items: [
            'Sự khác biệt giữa thói quen cá nhân và hành vi chuyên nghiệp',
            'Các chi tiết nhỏ trong giao tiếp và cảm giác tin cậy',
            'Vai trò của phong thái trong việc tạo dựng thương hiệu và hình ảnh uy tín',
        ],
    },
    {
        title: 'Chuẩn hóa hành động', subtitle: 'Chuyển đổi nhận thức thành thực hành', color: '#F29023',
        desc: 'Quá trình huấn luyện chuyển sang hiệu chỉnh hành động thông qua thực hành thực tế.',
        items: [
            'Phong cách xuất hiện trong môi trường công việc',
            'Ngôn ngữ hình thể và giọng nói tạo cảm giác tin cậy',
            'Nghệ thuật giao tiếp thể hiện tôn trọng nhưng vẫn giữ được vị trí',
        ],
    },
    {
        title: 'Chuẩn hóa môi trường', subtitle: 'Duy trì thay đổi', color: '#6C5B7B',
        desc: 'Đưa tiêu chuẩn vào vận hành để phong thái trở thành một phần của tổ chức.',
        items: [
            'Xác định tiêu chuẩn hành vi được đo lường theo từng vai trò',
            'Sử dụng danh sách kiểm tra và đánh giá để duy trì tiêu chuẩn',
            'Giúp quản lý trở thành người giữ tiêu chuẩn trong nội bộ',
        ],
    },
];

const valuesDelivered = [
    {
        icon: <FiStar />, title: 'Giá trị đối với cá nhân', color: '#F29023',
        items: [
            'Tự tin dựa trên chuẩn mực, không dựa trên cảm xúc nhất thời',
            'Khả năng giao tiếp rõ ràng, thuyết phục',
            'Phong thái phù hợp với vai trò và vị trí công việc',
            'Phong thái trở thành một phần của thói quen làm việc',
        ],
    },
    {
        icon: <FiHeart />, title: 'Giá trị đối với tổ chức', color: '#E91E63',
        items: [
            'Sự đồng bộ trong hoạt động và giao tiếp giữa các bộ phận',
            'Giảm xung đột phát sinh từ cách diễn đạt và thái độ giao tiếp',
            'Nâng cao chất lượng trải nghiệm từ khách hàng',
            'Ổn định văn hóa tổ chức',
        ],
    },
    {
        icon: <FiImage />, title: 'Giá trị đối với hình ảnh', color: '#2A9D8F',
        items: [
            'Hình ảnh tổ chức chỉn chu, đồng bộ và đáng tin cậy',
            'Ấn tượng chuyên nghiệp từ khoảnh khắc đầu tiên',
            'Phong thái trở thành một phần của thương hiệu tổ chức',
        ],
    },
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

export default function ProgramsPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: 'Trang chủ', url: 'https://blockeraedu.com' },
                { name: 'Chương trình đào tạo', url: 'https://blockeraedu.com/chuong-trinh' },
            ]} />
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>CHƯƠNG TRÌNH ĐÀO TẠO</span>
                    <h1 className={styles.bannerTitle}>GIẢI PHÁP CHO MỌI ĐỐI TƯỢNG</h1>
                    <p className={styles.bannerSub}>Chương trình được thiết kế riêng biệt cho từng nhóm đối tượng, đảm bảo hiệu quả tối ưu</p>
                </div>
            </section>

            <section className={`section ${styles.audienceSection}`}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">3 CHƯƠNG TRÌNH</span>
                        <h2 className="section-title center">CHỌN CHƯƠNG TRÌNH PHÙ HỢP</h2>
                    </ScrollReveal>
                    <div className={styles.programCardsGrid}>
                        {programs.map((prog, i) => (
                            <ScrollReveal key={prog.title} delay={i * 150}>
                                <Link href={prog.href} className={styles.programCard}>
                                    <div className={styles.programCardImage}>
                                        <Image src={prog.image} alt={prog.title} fill style={{ objectFit: 'cover' }} />
                                        <div className={styles.programCardOverlay} />
                                    </div>
                                    <div className={styles.programCardContent}>
                                        <div className={styles.programCardIcon}>{prog.icon}</div>
                                        <span className={styles.programCardSub}>{prog.subtitle}</span>
                                        <h3 className={styles.programCardTitle}>{prog.title}</h3>
                                        <p className={styles.programCardDesc}>{prog.desc}</p>
                                        <ul className={styles.programCardHighlights}>
                                            {prog.highlights.map((h) => <li key={h}><FiCheck /> {h}</li>)}
                                        </ul>
                                        <span className={styles.programCardLink}>
                                            XEM CHI TIẾT <FiArrowRight />
                                        </span>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.methodSection}`}>
                <div className="container">
                    <span className="section-label">Mục tiêu</span>
                    <h2 className="section-title center">3 giai đoạn huấn luyện</h2>
                    <div className={styles.phaseGrid}>
                        {phases.map((p, i) => (
                            <div key={p.title} className={styles.phaseCard}>
                                <div className={styles.phaseNum} style={{ color: p.color }}>{String(i + 1).padStart(2, '0')}</div>
                                <h3>{p.title}</h3>
                                <span className={styles.phaseSubtitle}>{p.subtitle}</span>
                                <p className={styles.phaseDesc}>{p.desc}</p>
                                <ul className={styles.phaseItems}>
                                    {p.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={`section ${styles.valuesDelivered}`}>
                <div className="container">
                    <span className="section-label">Cam kết</span>
                    <h2 className="section-title center">Giá trị mang lại</h2>
                    <div className={styles.valuesGrid}>
                        {valuesDelivered.map((v) => (
                            <div key={v.title} className={styles.valueCard}>
                                <div className={styles.valueIcon} style={{ color: v.color }}>{v.icon}</div>
                                <h3 className={styles.valueTitle}>{v.title}</h3>
                                <ul className={styles.valueList}>
                                    {v.items.map((item) => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
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

            <section className={styles.programCta}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 className={styles.programCtaTitle}>Bắt đầu hành trình chuẩn hóa phong thái</h2>
                    <p className={styles.programCtaDesc}>Liên hệ ngay để được tư vấn chương trình phù hợp nhất</p>
                    <Link href="/lien-he" className={styles.programCtaBtn}>
                        Đăng ký tư vấn <FiArrowRight />
                    </Link>
                </div>
            </section>
        </>
    );
}
