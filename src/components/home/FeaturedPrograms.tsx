'use client';

import Link from 'next/link';
import { FiUser, FiBriefcase, FiHome, FiArrowRight } from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useAnimations';
import styles from './HomePage.module.css';

const programs = [
    {
        icon: <FiUser />,
        title: 'Cá nhân',
        subtitle: 'Xây dựng thương hiệu',
        description: 'Tự tin dựa trên chuẩn mực, giao tiếp thuyết phục, phong thái phù hợp vai trò và vị trí công việc.',
        href: '/chuong-trinh/ca-nhan',
        color: 'var(--chrome)',
    },
    {
        icon: <FiBriefcase />,
        title: 'Doanh nghiệp',
        subtitle: 'Tập đoàn & Công ty',
        description: 'Chuẩn hóa phong thái, nghi thức giao tiếp, trang phục công sở và nghệ thuật tạo ấn tượng chuyên nghiệp.',
        href: '/chuong-trinh/doanh-nghiep',
        color: 'var(--navy)',
    },
    {
        icon: <FiHome />,
        title: 'Cơ quan nhà nước',
        subtitle: 'Đơn vị hành chính',
        description: 'Chuẩn hóa phong thái giao tiếp công vụ, xây dựng môi trường làm việc văn minh, nhất quán.',
        href: '/chuong-trinh/co-quan-nha-nuoc',
        color: 'var(--steel)',
    },
];

export default function FeaturedPrograms() {
    const { ref, isRevealed } = useScrollReveal();

    return (
        <section className={styles.programs} ref={ref}>
            <div className="container">
                <div className={styles.programsHeader}>
                    <span className="section-label">Chương trình đào tạo</span>
                    <h2 className="section-title center">Giải pháp cho mọi đối tượng</h2>
                    <p className="section-subtitle center">
                        Chương trình được thiết kế riêng biệt cho từng nhóm đối tượng, đảm bảo hiệu quả tối ưu
                    </p>
                </div>

                <div className={`${styles.programsGrid} ${isRevealed ? styles.revealed : ''}`}>
                    {programs.map((prog, i) => (
                        <Link href={prog.href} key={prog.title} className={styles.programCard} style={{ transitionDelay: `${i * 0.15}s` }}>
                            <div className={styles.programIconWrap}>
                                {prog.icon}
                            </div>
                            <h3 className={styles.programTitle}>{prog.title}</h3>
                            <span className={styles.programSub}>{prog.subtitle}</span>
                            <p className={styles.programDesc}>{prog.description}</p>
                            <span className={styles.programLink}>
                                Xem chi tiết <FiArrowRight />
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
