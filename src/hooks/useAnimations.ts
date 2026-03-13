'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.1) {
    const ref = useRef<HTMLDivElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsRevealed(true);
                    observer.unobserve(el);
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isRevealed };
}

export function useAnimatedCounter(target: number, duration = 2000, isActive = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isActive) return;
        let start = 0;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            start = Math.floor(eased * target);
            setCount(start);
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [target, duration, isActive]);

    return count;
}
