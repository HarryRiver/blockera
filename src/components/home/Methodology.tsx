'use client';

import React from 'react';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useAnimations';
import { methodology } from '@/data/siteData';
import styles from './HomePage.module.css';

export default function Methodology() {
    const { ref, isRevealed } = useScrollReveal();

    return (
        <section className={styles.methodology} ref={ref}>
            <div className="container">
                <span className="section-label">Phương pháp</span>
                <h2 className="section-title center">3 giai đoạn huấn luyện</h2>
                <p className="section-subtitle center">
                    Quy trình bài bản từ nhận thức đến hành động và duy trì bền vững
                </p>

                <div className={`${styles.methodGrid} ${isRevealed ? styles.revealed : ''}`}>
                    {methodology.map((m, i) => (
                        <React.Fragment key={m.step}>
                            {i > 0 && <div className={styles.methodConnector} />}
                            <div className={styles.methodCard} style={{ transitionDelay: `${i * 0.2}s` }}>
                                <div className={styles.methodStep}>
                                    <span className={styles.methodStepNum}>{m.step}</span>
                                    <h3 className={styles.methodTitle}>{m.title}</h3>
                                </div>
                                <p className={styles.methodDesc}>{m.description}</p>
                            </div>
                        </React.Fragment>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <Link href="/phuong-phap-dao-tao" className={styles.methodCta}>
                        Xem chi tiết <FiArrowRight />
                    </Link>
                </div>
            </div>
        </section>
    );
}
