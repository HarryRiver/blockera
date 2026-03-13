'use client';

import { useState, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { useScrollReveal } from '@/hooks/useAnimations';
import { testimonials } from '@/data/siteData';
import styles from './HomePage.module.css';

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const { ref, isRevealed } = useScrollReveal();

    const slide = useCallback((dir: 'left' | 'right') => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);

        setTimeout(() => {
            if (dir === 'right') {
                setCurrent((c) => (c + 1) % testimonials.length);
            } else {
                setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
            }
            setAnimating(false);
        }, 350);
    }, [animating]);

    const goTo = useCallback((index: number) => {
        if (animating || index === current) return;
        setDirection(index > current ? 'right' : 'left');
        setAnimating(true);
        setTimeout(() => {
            setCurrent(index);
            setAnimating(false);
        }, 350);
    }, [animating, current]);

    const cardClass = [
        styles.testimonialCard,
        animating ? styles.slideOut : styles.slideIn,
        animating
            ? (direction === 'right' ? styles.slideOutLeft : styles.slideOutRight)
            : (direction === 'right' ? styles.slideInRight : styles.slideInLeft),
    ].join(' ');

    return (
        <section className={styles.testimonials} ref={ref}>
            <div className={`container ${isRevealed ? styles.revealed : ''}`}>
                <span className="section-label">Đánh giá</span>
                <h2 className="section-title center">Học viên nói về chúng tôi</h2>

                <div className={styles.testimonialSlider}>
                    <button className={styles.sliderBtn} onClick={() => slide('left')} aria-label="Trước">
                        <FiChevronLeft />
                    </button>

                    <div className={cardClass} key={current}>
                        <RiDoubleQuotesL className={styles.quoteIcon} />
                        <p className={styles.testimonialText}>{testimonials[current].content}</p>
                        <div className={styles.testimonialAuthor}>
                            <div className={styles.authorAvatar}>
                                <FiUser />
                            </div>
                            <div>
                                <div className={styles.authorName}>{testimonials[current].name}</div>
                                <div className={styles.authorTitle}>
                                    {testimonials[current].title} - {testimonials[current].company}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className={styles.sliderBtn} onClick={() => slide('right')} aria-label="Tiếp">
                        <FiChevronRight />
                    </button>
                </div>

                <div className={styles.sliderDots}>
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                            onClick={() => goTo(i)}
                            aria-label={`Đánh giá ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
