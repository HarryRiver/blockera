import type { Metadata } from 'next';
import { FiImage, FiVideo, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import styles from './gallery.module.css';

export const metadata: Metadata = {
    title: 'Thư viện hình ảnh & video',
    description: 'Thư viện hình ảnh, video và sự kiện đào tạo phong thái của BLOCKERA Education và Hellen Thanh Thùy.',
    openGraph: { title: 'Thư viện | BLOCKERA Education', url: 'https://blockeraedu.com/thu-vien' },
    alternates: { canonical: 'https://blockeraedu.com/thu-vien' },
};

const categories = [
    { icon: <FiImage />, title: 'Hình ảnh', desc: 'Ảnh các khóa đào tạo, sự kiện và hoạt động', href: '/thu-vien/hinh-anh', count: 'Đang cập nhật' },
    { icon: <FiVideo />, title: 'Video', desc: 'Video chia sẻ kiến thức và cảm nhận học viên', href: '/thu-vien/video', count: 'Đang cập nhật' },
    { icon: <FiCalendar />, title: 'Sự kiện', desc: 'Hình ảnh các sự kiện nổi bật', href: '/thu-vien/su-kien', count: 'Đang cập nhật' },
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
                    <div className={styles.catGrid}>
                        {categories.map((cat) => (
                            <Link key={cat.title} href={cat.href} className={styles.catCard}>
                                <div className={styles.catIcon}>{cat.icon}</div>
                                <h2 className={styles.catTitle}>{cat.title}</h2>
                                <p className={styles.catDesc}>{cat.desc}</p>
                                <span className={styles.catCount}>{cat.count}</span>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.placeholder}>
                        <p>Nội dung thư viện đang được cập nhật. Vui lòng quay lại sau.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
