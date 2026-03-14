'use client';

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { SiZalo, SiFacebook } from 'react-icons/si';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={styles.floatingContainer}>
            <div className={`${styles.socialButtons} ${isVisible ? styles.shifted : ''}`}>
                <a
                    href="https://zalo.me/0984191359"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label="Liên hệ qua Zalo"
                >
                    <SiZalo size={32} color="#0068FF" />
                </a>
                <a
                    href="https://www.facebook.com/hellenthanhthuy.phongthaidoanhnhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label="Liên hệ qua Facebook"
                >
                    <SiFacebook size={32} color="#1877F2" />
                </a>
            </div>
            <button
                className={`${styles.scrollToTopBtn} ${isVisible ? styles.visible : ''}`}
                onClick={scrollToTop}
                aria-label="Cuộn lên đầu trang"
            >
                <FiArrowUp />
            </button>
        </div>
    );
}
