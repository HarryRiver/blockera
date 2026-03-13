import Image from 'next/image';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <section className={styles.notFoundPage}>
            <div className={`container ${styles.content}`}>
                <div className={styles.imageWrap}>
                    <Image
                        src="/images/404-illustration.png"
                        alt="404"
                        width={400}
                        height={400}
                        priority
                    />
                </div>
                <span className={styles.label}>TRANG KHÔNG TỒN TẠI</span>
                <h1 className={styles.title}>Rất tiếc, không tìm thấy trang bạn yêu cầu</h1>
                <p className={styles.desc}>
                    Trang này có thể đã được di chuyển hoặc không còn tồn tại.
                </p>
                <Link href="/" className={styles.homeBtn}>
                    Về trang chủ
                </Link>
            </div>
        </section>
    );
}
