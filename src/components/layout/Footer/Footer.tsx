import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiYoutube } from 'react-icons/fi';
import { BiMessageRoundedDots } from 'react-icons/bi';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.hexDecor} />
            <div className={styles.footerGrid}>
                <div className={styles.footerBrand}>
                    <Image src="/images/logo-horizontal.png" alt="BLOCKERA" width={180} height={55} className={styles.footerLogo} />
                    <p className={styles.footerSlogan}>&ldquo;Beyond the chain&rdquo;</p>
                    <p className={styles.footerTagline}>
                        Thương hiệu cá nhân là điểm chạm đầu tiên tạo nên uy tín bền vững
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com/hellenthanhthuy.phongthaidoanhnhan" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                            <FiFacebook />
                        </a>
                        <a href="https://youtube.com/@thuyanhchannels" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                            <FiYoutube />
                        </a>
                        <a href="https://zalo.me/0984191359" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Zalo">
                            <BiMessageRoundedDots />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className={styles.footerTitle}>Liên kết nhanh</h4>
                    <div className={styles.footerLinks}>
                        <Link href="/" className={styles.footerLink}>Trang chủ</Link>
                        <Link href="/gioi-thieu" className={styles.footerLink}>Giới thiệu</Link>
                        <Link href="/chuong-trinh" className={styles.footerLink}>Chương trình đào tạo</Link>
                        <Link href="/thu-vien" className={styles.footerLink}>Thư viện</Link>
                        <Link href="/tin-tuc" className={styles.footerLink}>Tin tức</Link>
                        <Link href="/lien-he" className={styles.footerLink}>Liên hệ</Link>
                    </div>
                </div>

                <div>
                    <h4 className={styles.footerTitle}>Liên hệ</h4>
                    <div className={styles.footerContact}>
                        <div className={styles.contactItem}>
                            <FiMapPin className={styles.contactIcon} />
                            <span>Hà Nội, Việt Nam</span>
                        </div>
                        <div className={styles.contactItem}>
                            <FiPhone className={styles.contactIcon} />
                            <a href="tel:0984191359" style={{ color: 'inherit', textDecoration: 'none' }}>0984 191 359</a>
                        </div>
                        <div className={styles.contactItem}>
                            <FiMail className={styles.contactIcon} />
                            <a href="mailto:contact@blockeraedu.com" style={{ color: 'inherit', textDecoration: 'none' }}>contact@blockeraedu.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} BLOCKERA Education. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
