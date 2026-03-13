import type { Metadata } from 'next';
import styles from '../gallery.module.css';

export const metadata: Metadata = {
    title: 'Video chia sẻ kiến thức',
    description: 'Video chia sẻ kiến thức về phong thái, nghi thức, nghệ thuật giao tiếp và cảm nhận học viên.',
};

export default function VideoPage() {
    return (
        <>
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>THƯ VIỆN</span>
                    <h1 className={styles.bannerTitle}>Video chia sẻ</h1>
                    <p className={styles.bannerSub}>Video kiến thức và cảm nhận từ học viên BLOCKERA</p>
                </div>
            </section>

            <section className={`section ${styles.catSection}`}>
                <div className="container">
                    <div className={styles.placeholder}>
                        <p>Nội dung video đang được cập nhật. Vui lòng quay lại sau.</p>
                    </div>
                </div>
            </section>
        </>
    );
}
