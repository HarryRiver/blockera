import type { Metadata } from 'next';
import { FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import styles from './gallery.module.css';

export const metadata: Metadata = {
    title: 'Thư viện hình ảnh & video',
    description: 'Thư viện hình ảnh, video và sự kiện đào tạo phong thái của BLOCKERA Education và Hellen Thanh Thùy.',
    openGraph: { title: 'Thư viện | BLOCKERA Education', url: 'https://blockeraedu.com/thu-vien' },
    alternates: { canonical: 'https://blockeraedu.com/thu-vien' },
};

const albumCategories = [
    {
        title: 'Cơ quan Nhà nước',
        albums: [
            { name: 'Album Hoạt động CQNN 1', href: 'https://photos.app.goo.gl/5mw85sUbhxQdbtP88', image: '/images/CQNN_1.jpeg' },
            { name: 'Album Hoạt động CQNN 2', href: 'https://photos.app.goo.gl/kGuYcJB1kg6BjSdu6', image: '/images/CQNN_2.JPG' },
            { name: 'Album Hoạt động CQNN 3', href: 'https://photos.app.goo.gl/fHxt22H5KP5hcLjT8', image: '/images/CQNN_3.JPG' },
            { name: 'Album Hoạt động CQNN 4', href: 'https://photos.app.goo.gl/Aku8ooooYuZ8tTyQ7', image: '/images/CQNN_4.JPG' },
            { name: 'Album Hoạt động CQNN 5', href: 'https://photos.app.goo.gl/9axyPb2Ad2Hig9NJ7', image: '/images/CQNN_5.JPG' },
        ]
    },
    {
        title: 'Doanh nghiệp',
        albums: [
            { name: 'Album Đào tạo Doanh nghiệp 1', href: 'https://photos.app.goo.gl/VU5iEW4jqDRqQD4T9', image: '/images/DN_1.JPG' },
            { name: 'Album Đào tạo Doanh nghiệp 2', href: 'https://photos.app.goo.gl/TdLModkmsXF8d7xv8', image: '/images/DN_2.JPG' },
        ]
    },
    {
        title: 'Hoa hậu & Người đẹp',
        albums: [
            { name: 'Album Hoa hậu ngành làm đẹp 1', href: 'https://photos.app.goo.gl/jY9hcK2RuwMgN4AVA', image: '/images/HH_1.JPG' },
            { name: 'Album Hoa hậu ngành làm đẹp 2', href: 'https://photos.app.goo.gl/iz61NPJciTkUyjKK7', image: '/images/HH_2.JPG' },
        ]
    }
];

export default function GalleryPage() {
    return (
        <>
            <BreadcrumbJsonLd items={[
                { name: 'Trang chủ', url: 'https://blockeraedu.com' },
                { name: 'Thư viện', url: 'https://blockeraedu.com/thu-vien' },
            ]} />
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>THƯ VIỆN</span>
                    <h1 className={styles.bannerTitle}>Hình ảnh & Video</h1>
                    <p className={styles.bannerSub}>Khám phá các hoạt động đào tạo và sự kiện của BLOCKERA</p>
                </div>
            </section>

            <section className={`section ${styles.catSection}`}>
                <div className="container">
                    {albumCategories.map((group) => (
                        <div key={group.title} className={styles.categoryGroup}>
                            <div className={styles.categoryHeader}>
                                <h2 className={styles.categoryTitle}>{group.title}</h2>
                            </div>
                            <div className={styles.albumGrid}>
                                {group.albums.map((album, idx) => (
                                    <a 
                                        key={idx} 
                                        href={album.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={styles.albumCard}
                                    >
                                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10' }}>
                                            <Image 
                                                src={album.image} 
                                                alt={album.name}
                                                fill
                                                className={styles.albumImage}
                                            />
                                        </div>
                                        <div className={styles.albumContent}>
                                            <h3 className={styles.albumName}>{album.name}</h3>
                                            <span className={styles.albumLinkText}>
                                                Xem album <FiExternalLink />
                                            </span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
