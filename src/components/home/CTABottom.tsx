'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useAnimations';
import styles from './HomePage.module.css';

export default function CTABottom() {
    const { ref, isRevealed } = useScrollReveal();

    return (
        <section className={styles.ctaBottom} ref={ref}>
            <div className={styles.ctaDecoHex1} />
            <div className={styles.ctaDecoHex2} />
            <div className={`container ${styles.ctaGrid} ${isRevealed ? styles.revealed : ''}`}>
                <div className={styles.ctaImageCol}>
                    <div className={styles.ctaImageWrapper}>
                        <Image
                            src="/images/hellen-1.png"
                            alt="Hellen Thanh Thùy"
                            width={480}
                            height={600}
                            className={styles.ctaImage}
                        />
                    </div>
                </div>
                <div className={styles.ctaContent}>
                    <span className={styles.ctaLabel}>Bắt đầu hành trình</span>
                    <h2 className={styles.ctaTitle}>Sẵn sàng nâng tầm phong thái?</h2>
                    <span className={styles.ctaLine} />
                    <p className={styles.ctaDesc}>
                        Xây dựng thương hiệu cá nhân và nâng cao phong thái chuyên nghiệp cùng BLOCKERA Education
                    </p>
                    <Link href="/lien-he" className={styles.ctaBtn}>
                        Đăng ký tư vấn ngay
                        <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
