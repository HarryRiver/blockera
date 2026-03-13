'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

import styles from './HomePage.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero} id="hero">
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.heroContent}>
                    <span className={styles.heroLabel}>BLOCKERA EDUCATION</span>
                    <h1 className={styles.heroTitle}>
                        THƯƠNG HIỆU CÁ NHÂN LÀ
                        <span className={styles.heroHighlight}> ĐIỂM CHẠM ĐẦU TIÊN </span>
                        TẠO NÊN UY TÍN BỀN VỮNG
                    </h1>
                    <p className={styles.heroDesc}>
                        Kiến trúc sư chuẩn hóa hành vi &ndash; Phong thái &ndash; Nghi thức &ndash;
                        Nghệ thuật giao tiếp và xây dựng thương hiệu cá nhân
                    </p>
                    <div className={styles.heroActions}>
                        <Link href="/lien-he" className={styles.btnPrimary}>
                            Đăng ký khóa học
                            <FiArrowRight />
                        </Link>
                        <Link href="/gioi-thieu" className={styles.btnOutline}>
                            <FiPlay />
                            Tìm hiểu thêm
                        </Link>
                    </div>
                </div>

                <div className={styles.heroVisual}>
                    {/* Decorative glow elements */}
                    <div className={styles.heroGlow1} />
                    <div className={styles.heroGlow2} />

                    <div className={styles.heroImageWrapper}>
                        <Image
                            src="/images/hellen-1.png"
                            alt="Hellen Thanh Thùy"
                            width={400}
                            height={520}
                            className={styles.heroImage}
                            priority
                        />
                    </div>



                </div>
            </div>

        </section>
    );
}
