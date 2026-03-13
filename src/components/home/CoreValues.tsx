'use client';

import {
    FiCheckSquare, FiRepeat, FiStar, FiHeart,
    FiFeather, FiLayers, FiShield, FiSun
} from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useAnimations';
import { coreValues } from '@/data/siteData';
import styles from './HomePage.module.css';

const iconMap: Record<string, React.ReactNode> = {
    FiCheckSquare: <FiCheckSquare />, FiRepeat: <FiRepeat />,
    FiStar: <FiStar />, FiHeart: <FiHeart />,
    FiFeather: <FiFeather />, FiLayers: <FiLayers />,
    FiShield: <FiShield />, FiSun: <FiSun />,
};

export default function CoreValues() {
    const { ref, isRevealed } = useScrollReveal();

    return (
        <section className={styles.values} ref={ref}>
            <div className="container">
                <span className="section-label">Nền tảng</span>
                <h2 className="section-title center">Giá trị cốt lõi</h2>
                <p className="section-subtitle center">
                    8 giá trị cốt lõi định hướng mọi hoạt động đào tạo và tư vấn
                </p>

                <div className={`${styles.valuesGrid} ${isRevealed ? styles.revealed : ''}`}>
                    {coreValues.map((val, i) => (
                        <div key={val.title} className={styles.valueCard} style={{ transitionDelay: `${i * 0.08}s` }}>
                            <div className={styles.valueHex}>
                                {iconMap[val.icon]}
                            </div>
                            <h4 className={styles.valueTitle}>{val.title}</h4>
                            <p className={styles.valueDesc}>{val.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
