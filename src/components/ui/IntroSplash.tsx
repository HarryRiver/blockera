'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './IntroSplash.module.css';

/* Fixed particle positions */
const PARTICLES = [
    { l: 5, t: 12, d: '0s', dur: '5s' },
    { l: 15, t: 78, d: '1.2s', dur: '6s' },
    { l: 25, t: 35, d: '0.5s', dur: '4.5s' },
    { l: 35, t: 90, d: '2s', dur: '5.5s' },
    { l: 45, t: 20, d: '0.8s', dur: '6.5s' },
    { l: 55, t: 65, d: '1.5s', dur: '4s' },
    { l: 65, t: 8, d: '0.3s', dur: '5.8s' },
    { l: 75, t: 50, d: '2.5s', dur: '4.2s' },
    { l: 85, t: 30, d: '1.8s', dur: '6.2s' },
    { l: 92, t: 72, d: '0.7s', dur: '5.3s' },
    { l: 10, t: 55, d: '2.2s', dur: '4.8s' },
    { l: 30, t: 15, d: '1s', dur: '5.6s' },
    { l: 50, t: 85, d: '0.4s', dur: '6.8s' },
    { l: 70, t: 42, d: '1.7s', dur: '3.8s' },
    { l: 88, t: 95, d: '2.8s', dur: '5.2s' },
];

export default function IntroSplash() {
    const [phase, setPhase] = useState(0);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timers = [
            setTimeout(() => setPhase(1), 200),     // line appears
            setTimeout(() => setPhase(2), 800),     // logo white
            setTimeout(() => setPhase(3), 1600),    // logo turns color + B appears
            setTimeout(() => setPhase(4), 2200),    // LOCKERA slides in
            setTimeout(() => setPhase(5), 3000),    // name + tagline
            setTimeout(() => {
                document.body.classList.add('intro-done');
                setPhase(6);
            }, 4200),    // curtain up + trigger page animations
            setTimeout(() => {
                setHidden(true);
                document.body.style.overflow = '';
            }, 5100),
        ];

        return () => {
            timers.forEach(clearTimeout);
            document.body.style.overflow = '';
        };
    }, []);

    if (hidden) return null;

    return (
        <div className={`${styles.splash} ${phase >= 6 ? styles.exit : ''}`}>
            {/* Particles */}
            <div className={styles.particles}>
                {PARTICLES.map((p, i) => (
                    <span key={i} className={styles.particle} style={{
                        left: `${p.l}%`,
                        top: `${p.t}%`,
                        animationDelay: p.d,
                        animationDuration: p.dur,
                    }} />
                ))}
            </div>

            {/* Ambient glow */}
            <div className={styles.glow} />

            {/* Center content */}
            <div className={styles.center}>
                {/* Top decorative line */}
                <div className={`${styles.topLine} ${phase >= 1 ? styles.show : ''}`} />

                {/* Logo: starts white, transitions to original color */}
                <div className={`${styles.logo} ${phase >= 2 ? styles.logoShow : ''} ${phase >= 3 ? styles.logoColor : ''}`}>
                    <Image
                        src="/images/logo-vertical-black.png"
                        alt="BLOCKERA"
                        width={90}
                        height={90}
                        priority
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                {/* Brand: B appears first, then LOCKERA slides */}
                <div className={styles.brandRow}>
                    <span className={`${styles.brandB} ${phase >= 3 ? styles.brandBShow : ''}`}>B</span>
                    <span className={`${styles.brandRest} ${phase >= 4 ? styles.brandRestShow : ''}`}>LOCKERA</span>
                </div>

                {/* Script name */}
                <div className={`${styles.name} ${phase >= 5 ? styles.nameShow : ''}`}>
                    Hellen Thanh Thùy
                </div>

                {/* Expanding line */}
                <div className={`${styles.midLine} ${phase >= 5 ? styles.midLineShow : ''}`} />

                {/* Tagline — bigger */}
                <div className={`${styles.tagline} ${phase >= 5 ? styles.taglineShow : ''}`}>
                    Chuẩn mực tạo nên phong thái
                </div>
            </div>

            {/* Bottom shimmer */}
            <div className={`${styles.shimmer} ${phase >= 4 ? styles.shimmerShow : ''}`} />
        </div>
    );
}
