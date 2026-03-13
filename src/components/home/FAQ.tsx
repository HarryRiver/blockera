'use client';

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useAnimations';
import styles from './HomePage.module.css';

const faqs = [
    {
        q: 'Khóa đào tạo phù hợp với ai?',
        a: 'Chương trình phù hợp với lãnh đạo doanh nghiệp, quản lý cấp trung, nhân sự mong muốn nâng tầm phong thái và nghi thức chuyên nghiệp. Bất kỳ ai mong muốn xây dựng hình ảnh cá nhân uy tín đều có thể tham gia.',
    },
    {
        q: 'Thời lượng mỗi chương trình đào tạo là bao lâu?',
        a: 'Tùy theo quy mô và nhu cầu, chương trình có thể kéo dài từ 1 buổi workshop (3-4 giờ) đến chương trình chuyên sâu kéo dài 3-6 tháng với lộ trình cá nhân hóa.',
    },
    {
        q: 'Có chương trình đào tạo cho doanh nghiệp không?',
        a: 'Có. BLOCKERA cung cấp giải pháp đào tạo in-house cho doanh nghiệp, tập đoàn và tổ chức với chương trình được thiết kế riêng phù hợp đặc thù ngành nghề và văn hóa doanh nghiệp.',
    },
    {
        q: 'Học viên nhận được chứng chỉ sau khóa học không?',
        a: 'Hoàn thành chương trình, học viên sẽ nhận chứng chỉ từ BLOCKERA Education có giá trị chứng nhận năng lực phong thái và nghi thức chuyên nghiệp.',
    },
    {
        q: 'Hình thức đào tạo online hay offline?',
        a: 'BLOCKERA cung cấp cả hai hình thức: đào tạo trực tiếp tại doanh nghiệp hoặc địa điểm thuận tiện, và các chương trình online linh hoạt qua nền tảng Zoom/Google Meet.',
    },
    {
        q: 'Làm thế nào để đăng ký tư vấn?',
        a: 'Bạn có thể liên hệ trực tiếp qua hotline 0984 191 359, gửi email tại contact@blockeraedu.com, hoặc điền form tư vấn trên website. Đội ngũ chúng tôi sẽ phản hồi trong vòng 24 giờ.',
    },
];

export default function FAQ() {
    const [openIdx, setOpenIdx] = useState<number | null>(null);
    const { ref, isRevealed } = useScrollReveal();

    return (
        <section className={styles.faq} ref={ref}>
            <div className="container">
                <span className="section-label">Câu hỏi thường gặp</span>
                <h2 className="section-title center">FAQ</h2>
                <p className="section-subtitle center">
                    Giải đáp những thắc mắc phổ biến về chương trình đào tạo
                </p>

                <div className={`${styles.faqList} ${isRevealed ? styles.revealed : ''}`}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`${styles.faqItem} ${openIdx === i ? styles.faqOpen : ''}`}
                            style={{ transitionDelay: `${i * 0.06}s` }}
                        >
                            <button
                                className={styles.faqQuestion}
                                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                                aria-expanded={openIdx === i}
                            >
                                <span className={styles.faqNum}>{String(i + 1).padStart(2, '0')}</span>
                                <span style={{ flex: 1 }}>{faq.q}</span>
                                <FiChevronDown className={styles.faqChevron} />
                            </button>
                            <div className={styles.faqAnswer}>
                                <div className={styles.faqAnswerInner}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
