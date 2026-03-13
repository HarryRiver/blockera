import type { Metadata } from 'next';
import styles from '../gallery.module.css';

export const metadata: Metadata = {
    title: 'Hình ảnh đào tạo',
    description: 'Thư viện hình ảnh các khóa đào tạo phong thái, nghi thức và nghệ thuật giao tiếp của BLOCKERA Education.',
};

export default function HinhAnhPage() {
    return (
        <>
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>THƯ VIỆN</span>
                    <h1 className={styles.bannerTitle}>Hình ảnh đào tạo</h1>
                    <p className={styles.bannerSub}>Ghi lại khoảnh khắc từ các chương trình đào tạo của BLOCKERA</p>
                </div>
            </section>

            <section className={`section ${styles.catSection}`}>
                <div className="container">
                    <div className={styles.placeholder}>
                        <p>Nội dung hình ảnh đang được cập nhật. Vui lòng quay lại sau.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
