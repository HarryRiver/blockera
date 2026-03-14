import { Metadata } from 'next';
import styles from './method.module.css';
import { FiChevronRight, FiEdit3, FiLayout, FiTarget, FiBriefcase, FiStar } from 'react-icons/fi';
import ScrollReveal from '@/components/ui/ScrollReveal';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';

export const metadata: Metadata = {
    title: 'Phương pháp đào tạo | Hellen Thanh Thùy',
    description: 'Quy trình triển khai và lý do nên chọn phương pháp đào tạo chuẩn hóa hành vi, phong thái, nghi thức của Hellen Thanh Thùy.',
    keywords: ['phương pháp đào tạo', 'quy trình triển khai', 'đào tạo phong thái', 'hệ thống hóa hành vi', 'hellen thanh thùy'],
    openGraph: {
        title: 'Phương pháp đào tạo | BLOCKERA Education',
        description: 'Quy trình triển khai 5 bước bài bản và phương pháp hiện đại nhất.',
        url: 'https://blockeraedu.com/phuong-phap-dao-tao',
    },
    alternates: { canonical: 'https://blockeraedu.com/phuong-phap-dao-tao' },
};

const processSteps = [
    { title: 'Khảo sát và đánh giá kỳ vọng hiện trạng', icon: <FiEdit3 /> },
    { title: 'Thiết kế và đóng gói chương trình', icon: <FiLayout /> },
    { title: 'Huấn luyện và hiệu chỉnh hành động', icon: <FiTarget /> },
    { title: 'Ứng dụng trong môi trường làm việc', icon: <FiBriefcase /> },
    { title: 'Đánh giá và duy trì', icon: <FiStar /> },
];

const reasons = [
    'Cách tiếp cận mang tính hệ thống, không chỉ đào tạo kỹ năng.',
    'Phong thái được huấn luyện như một năng lực lãnh đạo.',
    'Thiết lập tiêu chuẩn hành vi chung, từ đó tạo ra sự đồng bộ trong cách đội ngũ cán bộ xuất hiện và tương tác với đồng nghiệp, người dân và cộng đồng.',
    'Nội dung là những vấn đề thực tế mà cán bộ các đơn vị thường xuyên gặp phải.',
    'Kết hợp giữa hình ảnh cá nhân và chuyên môn tạo nên bản sắc riêng cho văn hóa của đơn vị.',
    'Truyền cảm hứng và tạo nên giá trị thực sự cho từng cá nhân nâng tầm uy tín và thương hiệu cho tổ chức.'
];

export default function MethodPage() {
    return (
        <main>
            <BreadcrumbJsonLd items={[
                { name: 'Trang chủ', url: 'https://blockeraedu.com' },
                { name: 'Phương pháp đào tạo', url: 'https://blockeraedu.com/phuong-phap-dao-tao' },
            ]} />
            
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>PHƯƠNG PHÁP CỦA CHÚNG TÔI</span>
                    <h1 className={styles.bannerTitle}>PHƯƠNG PHÁP ĐÀO TẠO</h1>
                    <p className={styles.bannerSub}>Hướng đến sự chuẩn mực, chuyên nghiệp và áp dụng thực tiễn</p>
                </div>
            </section>

            {/* Quy trình triển khai */}
            <section className={styles.processSection}>
                <div className="container">
                    <ScrollReveal>
                        <h2 className={styles.sectionTitle}>Quy trình triển khai</h2>
                    </ScrollReveal>
                    
                    <div className={styles.processGrid}>
                        {processSteps.map((step, index) => (
                            <div className={styles.processCardWrapper} key={index}>
                                <ScrollReveal delay={100 + index * 100} style={{ width: '100%' }}>
                                    <div className={styles.processCard}>
                                        <div className={styles.processNum}>{index + 1}</div>
                                        <div className={styles.processIcon}>{step.icon}</div>
                                        <p className={styles.processText}>{step.title}</p>
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vì sao chọn... */}
            <section className={styles.whySection}>
                <div className="container">
                    <ScrollReveal>
                        <h2 className={styles.sectionTitle}>Vì sao chọn Hellen Thanh Thùy?</h2>
                    </ScrollReveal>

                    <div className={styles.timeline}>
                        {reasons.map((reason, index) => (
                            <ScrollReveal key={index} delay={index * 150} direction="up">
                                <div className={styles.timelineItem}>
                                    <div className={styles.timelineDot}></div>
                                    <FiChevronRight className={styles.arrowRight} />
                                    <div className={styles.timelineContent}>
                                        {reason}
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
