import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './about.module.css';
import { FiCheckSquare, FiRefreshCw, FiStar, FiHeart, FiFeather, FiBox, FiShield, FiSun, FiAward, FiUsers, FiBook, FiGlobe } from 'react-icons/fi';
import { HiOutlineEye, HiOutlineTrophy } from 'react-icons/hi2';
import ScrollReveal from '@/components/ui/ScrollReveal';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export const metadata: Metadata = {
    title: 'Giới thiệu Hellen Thanh Thùy',
    description: 'Hellen Thanh Thùy - Kiến trúc sư chuẩn hóa hành vi, phong thái, nghi thức. Gần 10 năm kinh nghiệm đào tạo phong thái cho lãnh đạo, doanh nghiệp và tổ chức.',
    keywords: ['hellen thanh thùy', 'kiến trúc sư hành vi', 'đào tạo phong thái', 'blockera education', 'nghi thức giao tiếp', 'thương hiệu cá nhân'],
    openGraph: {
        title: 'Giới thiệu Hellen Thanh Thùy | BLOCKERA Education',
        description: 'Kiến trúc sư chuẩn hóa hành vi - Phong thái - Nghi thức. Gần 10 năm kinh nghiệm.',
        url: 'https://blockeraedu.com/gioi-thieu',
    },
    alternates: { canonical: 'https://blockeraedu.com/gioi-thieu' },
};

const values = [
    { title: 'CHUẨN MỰC', desc: 'Mọi sự chuyên nghiệp bắt đầu từ chuẩn mực rõ ràng', icon: <FiCheckSquare /> },
    { title: 'NHẤT QUÁN', desc: 'Uy tín được xây bằng sự lặp lại đáng tin', icon: <FiRefreshCw /> },
    { title: 'HIỆN DIỆN', desc: 'Phong thái, khí chất là cách năng lực được cảm nhận', icon: <FiStar /> },
    { title: 'NGHI THỨC', desc: 'Nghi thức là ngôn ngữ của sự tôn trọng và vị thế', icon: <FiHeart /> },
    { title: 'TINH TẾ', desc: 'Giao tiếp đẳng cấp nằm ở sự điều chỉnh', icon: <FiFeather /> },
    { title: 'KIẾN TRÚC', desc: 'Thương hiệu cá nhân không được tạo, mà được thiết kế', icon: <FiBox /> },
    { title: 'BỀN VỮNG', desc: 'Sự chuyên nghiệp thật sự trở thành thói quen, không phải nỗ lực', icon: <FiShield /> },
    { title: 'TRUYỀN CẢM HỨNG', desc: 'Lan tỏa giá trị tích cực qua phong thái và hành động mỗi ngày', icon: <FiSun /> },
];

const fields = [
    'Kiến trúc sư chuẩn hóa hành vi - Phong thái - Nghi thức - Văn hóa công sở - Kỹ năng giao tiếp - Quy trình trải nghiệm, chăm sóc khách hàng',
    'Chuyên gia đào tạo tư duy ứng dụng AI marketing, truyền thông, xây dựng thương hiệu',
];

const highlights = [
    { icon: <FiAward />, number: '10+', label: 'Năm kinh nghiệm' },
    { icon: <FiUsers />, number: '5000+', label: 'Học viên đào tạo' },
    { icon: <FiBook />, number: '200+', label: 'Khóa đào tạo' },
    { icon: <FiGlobe />, number: '50+', label: 'Đối tác doanh nghiệp' },
];

export default function AboutPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: 'Trang chủ', url: 'https://blockeraedu.com' },
                { name: 'Giới thiệu', url: 'https://blockeraedu.com/gioi-thieu' },
            ]} />
            <section className={styles.banner}>
                <div className={styles.bannerOverlay} />
                <div className={`container ${styles.bannerContent}`}>
                    <ScrollReveal delay={200}>
                        <span className={styles.bannerLabel}>GIỚI THIỆU</span>
                    </ScrollReveal>
                    <ScrollReveal delay={400}>
                        <h1 className={styles.bannerTitle}>Hellen Thanh Thùy</h1>
                    </ScrollReveal>
                    <ScrollReveal delay={600}>
                        <p className={styles.bannerScript}>Kiến trúc sư chuẩn hóa hành vi</p>
                    </ScrollReveal>
                    <ScrollReveal delay={800}>
                        <p className={styles.bannerSub}>Phong thái &ndash; Nghi thức &ndash; Nghệ thuật giao tiếp &ndash; Xây dựng thương hiệu cá nhân</p>
                    </ScrollReveal>
                </div>

                {/* Floating stats in banner */}
                <div className={`container ${styles.bannerStats}`}>
                    {highlights.map((h, i) => (
                        <ScrollReveal key={h.label} delay={900 + i * 150} direction="up">
                            <div className={styles.bannerStat}>
                                <span className={styles.bannerStatIcon}>{h.icon}</span>
                                <span className={styles.bannerStatNum}>{h.number}</span>
                                <span className={styles.bannerStatLabel}>{h.label}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </section>

            {/* Philosophy */}
            <section className={`section ${styles.philosophy}`}>
                <div className="container">
                    <ScrollReveal>
                        <div className={styles.philosophyContent}>
                            <h2 className={styles.philosophyTitle}>Chuẩn mực tạo nên phong thái<br />Phong thái tạo nên uy tín</h2>
                            <p className={styles.philosophyText}>
                                Trong môi trường chuyên nghiệp hiện đại, năng lực không chỉ đánh giá qua chuyên môn mà còn qua cách một cá nhân hiện diện, giao tiếp và tạo dựng sự tin cậy trong từng tương tác. Cách một người bước vào phòng họp, cách một nhân viên tiếp đón khách, cách một người lắng nghe và phản hồi, hay cách một người lãnh đạo xuất hiện trước tập thể đều âm thầm tạo ra nên cảm nhận về sự chuyên nghiệp và mức độ đáng tin cậy của tổ chức.
                            </p>
                            <p className={styles.philosophyText}>
                                Phong thái vì vậy không phải là yếu tố mang tính cá nhân hay hình thức bên ngoài. Phong thái là biểu hiện của nhận thức, kỷ luật và văn hóa. Khi phong thái thiếu chuẩn mực, hình ảnh cá nhân, tổ chức trở nên thiếu nhất quán. Khi phong thái được chuẩn hóa, chuyên nghiệp trở thành một trạng thái tự nhiên.
                            </p>
                            <p className={styles.philosophyHighlight}>
                                <em>&ldquo;Thương hiệu cá nhân là điểm chạm đầu tiên tạo nên uy tín bền vững.&rdquo;</em>
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Profile */}
            <section className={`section ${styles.profile}`}>
                <div className={`container ${styles.profileGrid}`}>
                    <ScrollReveal direction="left" delay={100}>
                        <div className={styles.profileImageWrap}>
                            <Image
                                src="/images/hellen-3.png"
                                alt="Hellen Thanh Thùy"
                                width={450}
                                height={600}
                                className={styles.profileImage}
                            />
                        </div>
                    </ScrollReveal>
                    <ScrollReveal direction="right" delay={250}>
                        <div>
                            <span className="section-label">Introduction</span>
                            <h2 className="section-title">Hellen Thanh Thùy</h2>
                            <p className={styles.profileText}>
                                Hellen Thanh Thùy &ndash; Kiến trúc sư chuẩn hóa hành vi, phong thái, nghi thức, nghệ thuật giao tiếp và xây dựng thương hiệu cá nhân. Với nền tảng vững chắc về chuẩn hóa tác phong, diện mạo và kỹ năng giao tiếp chuẩn mực, Chị đã huấn luyện và truyền cảm hứng cho hàng nghìn học viên là lãnh đạo, quản lý và đội ngũ nhân sự tại nhiều tập đoàn, hiệp hội và tổ chức lớn.
                            </p>
                            <p className={styles.profileText}>
                                Chị hiện là Chuyên gia đào tạo về phong thái &amp; nghi thức, đồng thời tham gia huấn luyện nhiều cuộc thi sắc đẹp, các diễn đàn doanh nhân.
                            </p>
                            <p className={styles.profileText}>
                                Với gần 10 năm kinh nghiệm trong lĩnh vực huấn luyện, đào tạo, Chị đã thiết kế và triển khai nhiều chương trình huấn luyện chuyên biệt: từ phong thái, nghi thức giao tiếp, nghệ thuật giao tiếp trên bàn tiệc, kỹ năng thuyết trình và làm chủ sân khấu, đến xây dựng thương hiệu cá nhân, nghiệp vụ Lễ tân, nghi thức tiếp đón ngoại giao và văn hóa doanh nghiệp chuyên nghiệp.
                            </p>
                            <h3 className={styles.fieldTitle}>Lĩnh vực tư vấn và đào tạo</h3>
                            <ul className={styles.fieldList}>
                                {fields.map((f) => (
                                    <li key={f}>{f}</li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className={`section ${styles.visionSection}`}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">Tầm nhìn &amp; Sứ mệnh</span>
                        <h2 className="section-title center">Định hướng phát triển</h2>
                    </ScrollReveal>
                    <div className={styles.vmGrid}>
                        <ScrollReveal delay={100}>
                            <div className={styles.vmCard}>
                                <div className={styles.vmIcon}>
                                    <div className={styles.vmIconBg}></div>
                                    <HiOutlineEye className={styles.vmIconSvg} />
                                </div>
                                <h3>Tầm nhìn</h3>
                                <p>
                                    Trong giai đoạn 3&ndash;5 năm tới, Blockera định hướng trở thành top 3 thương hiệu tiên phong
                                    tại Việt Nam và là thương hiệu dẫn dắt tại châu Á trong lĩnh vực Kiến trúc sư chuẩn hóa
                                    hành vi &ndash; nghi thức &ndash; nghệ thuật giao tiếp, giúp cá nhân, lãnh đạo, doanh nghiệp
                                    và đơn vị xây dựng hình ảnh nhất quán, chuẩn mực và có sức ảnh hưởng bền vững.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={250}>
                            <div className={styles.vmCard}>
                                <div className={styles.vmIcon}>
                                    <div className={styles.vmIconBg}></div>
                                    <HiOutlineTrophy className={styles.vmIconSvg} />
                                </div>
                                <h3>Sứ mệnh</h3>
                                <p>
                                    Với sứ mệnh kiến tạo chuẩn mực hành vi và phong thái chuyên nghiệp để con người và tổ chức
                                    xây dựng uy tín bền vững bằng sự hiện diện. Khi chuẩn mực được xác định rõ ràng và được duy trì
                                    nhất quán, chuyên nghiệp trở thành trạng thái tự nhiên và uy tín được hình thành bền vững theo thời gian.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={`section ${styles.valuesSection}`}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">Nền tảng</span>
                        <h2 className="section-title center" style={{ marginBottom: '1rem' }}>Giá trị cốt lõi</h2>
                        <p className="section-subtitle center">8 giá trị cốt lõi định hướng mọi hoạt động đào tạo và tư vấn</p>
                    </ScrollReveal>
                    <div className={styles.valGrid}>
                        {values.map((v, i) => (
                            <ScrollReveal key={v.title} delay={i * 80}>
                                <div className={styles.valCard}>
                                    <div className={styles.vmIcon} style={{ margin: '0 auto 1.5rem' }}>
                                        <div className={styles.vmIconBg} style={{ borderRadius: '50%', transform: 'none' }}></div>
                                        <div className={styles.valIconInner}>{v.icon}</div>
                                    </div>
                                    <h4 className={styles.valTitle}>{v.title}</h4>
                                    <p className={styles.valDesc}>{v.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Các dự án đã tham dự */}
            <section className={`section ${styles.projectsSection}`}>
                <div className="container">
                    <ScrollReveal>
                        <span className="section-label">THÀNH TỰU</span>
                        <h2 className="section-title center">Các dự án đã tham dự</h2>
                    </ScrollReveal>

                    <div className={styles.projectsGrid}>
                        {[
                            {
                                num: '01',
                                role: 'Top chung kết',
                                title: 'Hoa hậu Quý bà Việt Nam 2018',
                                accent: '#c8912a',
                            },
                            {
                                num: '02',
                                role: 'Huấn luyện viên, Ban giám khảo',
                                title: 'Cuộc thi Hoa cúc biển Cửa Lò Nghệ An 2023',
                                accent: '#2aadc8',
                            },
                            {
                                num: '03',
                                role: 'Huấn luyện viên, Phó Ban tổ chức',
                                title: 'Cuộc thi Hoa hậu Ngành làm đẹp Việt Nam và Quốc tế 2025',
                                accent: '#8e44ad',
                            },
                            {
                                num: '04',
                                role: 'Ban tổ chức, Host Chương trình',
                                title: 'Hội nghị chiến lược ngành tóc toàn cầu',
                                accent: '#27ae60',
                            },
                        ].map((project, index) => (
                            <ScrollReveal key={index} delay={index * 120} direction="up">
                                <Link href="/thu-vien" className={styles.projectCard} style={{ '--accent': project.accent } as React.CSSProperties}>
                                    <div className={styles.projectImageFrame}>
                                        {/* Bạn có thể thay div này bằng <Image src="..." alt="..." fill /> */}
                                        <div className={styles.projectImagePlaceholder}>
                                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                                <circle cx="8.5" cy="8.5" r="1.5" />
                                                <path d="M21 15l-5-5L5 21" />
                                            </svg>
                                            <span>Thêm ảnh tại đây</span>
                                        </div>
                                    </div>
                                    <div className={styles.projectInfo}>
                                        <span className={styles.projectNum}>{project.num}</span>
                                        <p className={styles.projectRole}>{project.role}</p>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                    </div>
                                </Link>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner */}
            <section className={`section ${styles.partner}`}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <ScrollReveal>
                        <span className="section-label">Đối tác</span>
                        <h2 className="section-title center">Khách hàng tiêu biểu</h2>
                    </ScrollReveal>
                    
                    <div className={styles.clientGrid}>
                        {[
                            { name: 'VSIP', img: 'VSIP.png' },
                            { name: 'MB', img: 'MB-bank.jpg' },
                            { name: 'Ngân hàng Nhà nước VN', img: 'logo-ngan-hang-nha-nuoc-viet-nam.webp' },
                            { name: 'Agribank', img: 'Logo-Agribank-V.webp' },
                            { name: 'Co-opBank', img: 'Co-opbank-2.webp' },
                            { name: 'Tân Hoàng Minh Group', img: 'logo-tan-hoang-minh-footer-2.png' },
                            { name: 'Bamboo Airways', img: 'Bamboo_Airways_Logo_QH-BAV.png' },
                            { name: 'HRD', img: 'HRD.png' },
                            { name: 'Manulife', img: 'logo-manulife-inkythuatso-01-16-14-48-52.jpg' },
                            { name: 'JBMC', img: 'JBMC-cong-ty-tu-van-quan-ly-doanh-nghiep.jpg' },
                            { name: 'ecopark', img: 'Logo-Cong-ty-CP-Tap-doan-Ecopark.webp' },
                            { name: 'Hanoi Nostalgia', img: 'Hanoi.jpg' },
                            { name: 'TST', img: 'TST.png' },
                            { name: 'Sun Life', img: 'sun-life-logo-inkythuatso-01-02-15-44-03.jpg' },
                            { name: 'TOPLINKS', img: 'New-Logo-Toplinks-02.jpg' },
                            { name: 'Khách hàng', img: 'images.jpg' }
                        ].map((client, i) => (
                            <ScrollReveal key={i} delay={100 + (i % 5) * 50}>
                                <div className={styles.clientCard}>
                                    <div className={styles.clientLogoWrapper}>
                                        <Image
                                            src={`/images/partners/${client.img}`}
                                            alt={client.name}
                                            fill
                                            className={styles.clientLogo}
                                        />
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
