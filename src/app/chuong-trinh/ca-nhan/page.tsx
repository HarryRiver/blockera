import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
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
