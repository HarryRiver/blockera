import type { Metadata } from 'next';
import styles from '../gallery.module.css';

export const metadata: Metadata = {
    title: 'Sự kiện nổi bật',
    description: 'Hình ảnh và thông tin các sự kiện đào tạo, hội thảo của BLOCKERA Education.',
};

export default function SuKienPage() {
    return (
        <>
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>THƯ VIỆN</span>
                    <h1 className={styles.bannerTitle}>Sự kiện nổi bật</h1>
                    <p className={styles.bannerSub}>Những sự kiện và hội thảo ấn tượng của BLOCKERA</p>
                </div>
            </section>

            <section className={`section ${styles.catSection}`}>
                <div className="container">
                    <div className={styles.placeholder}>
                        <p>Nội dung sự kiện đang được cập nhật. Vui lòng quay lại sau.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
