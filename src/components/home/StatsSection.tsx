'use client';

import { FiAward, FiUsers, FiBriefcase, FiBookOpen } from 'react-icons/fi';
import { useScrollReveal, useAnimatedCounter } from '@/hooks/useAnimations';
import { stats } from '@/data/siteData';
import styles from './HomePage.module.css';

const iconMap: Record<string, React.ReactNode> = {
    FiAward: <FiAward />,
    FiUsers: <FiUsers />,
    FiBriefcase: <FiBriefcase />,
    FiBookOpen: <FiBookOpen />,
};

function StatItem({ stat, isActive, delay }: { stat: typeof stats[0]; isActive: boolean; delay: number }) {
    const count = useAnimatedCounter(stat.number, 2000, isActive);
    return (
        <div className={styles.statItem} style={{ transitionDelay: `${delay}s` }}>
            <div className={styles.statIcon}>{iconMap[stat.icon]}</div>
            <div className={styles.statNumber}>
                {count.toLocaleString()}<span className={styles.statSuffix}>{stat.suffix}</span>
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
        </div>
    );
}

export default function StatsSection() {
    const { ref, isRevealed } = useScrollReveal(0.3);

    return (
        <section className={styles.stats} ref={ref} aria-labelledby="stats-heading">
            <h2 id="stats-heading" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}>
                Thành tựu và Con số nổi bật
            </h2>
            <div className={`container ${styles.statsGrid}`}>
                {stats.map((stat, i) => (
                    <StatItem key={stat.label} stat={stat} isActive={isRevealed} delay={i * 0.15} />
                ))}
            </div>
        </section>
    );
}
