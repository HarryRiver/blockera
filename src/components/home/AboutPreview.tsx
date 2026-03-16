'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useAnimations';
import styles from './HomePage.module.css';

const photos = [
    { src: '/images/hellen-1.png', alt: 'Hellen Thanh Thùy - Sự kiện' },
    { src: '/images/hellen-5.JPG', alt: 'Hellen Thanh Thùy - Đào tạo' },
    { src: '/images/hellen-4.JPG', alt: 'Hellen Thanh Thùy - Đào tạo thực chiến' },
];

export default function AboutPreview() {
    const { ref, isRevealed } = useScrollReveal();

    return (
        <section className={styles.aboutPreview} ref={ref}>
            <div className={`container ${styles.aboutGrid} ${isRevealed ? styles.revealed : ''}`}>
                <div className={styles.aboutImageCol}>
                    <div className={styles.aboutCardStack}>
                        {photos.map((photo, i) => (
                            <div
                                key={photo.src}
                                className={`${styles.aboutStackCard} ${isRevealed ? styles.aboutStackRevealed : ''}`}
                                style={{
                                    '--card-index': i,
                                    '--card-delay': `${i * 0.2}s`,
                                } as React.CSSProperties}
                            >
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={400}
                                    height={500}
                                    className={styles.aboutImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.aboutContentCol}>
                    <span className="section-label">Về chúng tôi</span>
                    <h2 className="section-title">Hellen Thanh Thùy</h2>
                    <p className={styles.aboutRole}>Kiến trúc sư chuẩn hóa hành vi &ndash; Phong thái &ndash; Nghi thức</p>
                    <p className={styles.aboutText}>
                        Với nền tảng vững chắc về chuẩn hóa tác phong, diện mạo và kỹ năng giao tiếp chuẩn mực,
                        đã huấn luyện và truyền cảm hứng cho hàng nghìn học viên là lãnh đạo, quản lý và đội ngũ
                        nhân sự tại nhiều tập đoàn, hiệp hội và tổ chức lớn.
                    </p>
                    <ul className={styles.aboutList}>
                        <li>Chuyên gia đào tạo phong thái &amp; nghi thức</li>
                        <li>Huấn luyện các cuộc thi sắc đẹp, diễn đàn doanh nhân</li>
                        <li>Gần 10 năm kinh nghiệm huấn luyện, đào tạo</li>
                        <li>Đào tạo tư duy ứng dụng AI marketing &amp; thương hiệu</li>
                    </ul>
                    <Link href="/gioi-thieu" className={styles.aboutLink}>
                        Xem thêm <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
