'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiChevronDown, FiPhone } from 'react-icons/fi';
import { navigation } from '@/data/navigation';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => { setMounted(true); }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
        setOpenDropdown(null);
    }, [pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    /* Mobile menu rendered via portal to avoid header overflow clipping */
    const mobileMenuContent = mounted ? createPortal(
        <>
            <div
                className={`${styles.mobileOverlay} ${mobileOpen ? styles.show : ''}`}
                onClick={() => setMobileOpen(false)}
            />
            <div className={`${styles.mobileMenu} ${mobileOpen ? styles.open : ''}`}>
                <button
                    className={styles.mobileClose}
                    onClick={() => setMobileOpen(false)}
                    aria-label="Đóng menu"
                >
                    ✕
                </button>
                <div className={styles.mobileNavList}>
                    {navigation.map((item) => (
                        <div key={item.href}>
                            {item.children ? (
                                <>
                                    <button
                                        className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}
                                        onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                                    >
                                        {item.label}
                                        <FiChevronDown style={{
                                            transform: openDropdown === item.href ? 'rotate(180deg)' : 'rotate(0)',
                                            transition: 'transform 0.3s ease'
                                        }} />
                                    </button>
                                    <div className={`${styles.mobileDropdown} ${openDropdown === item.href ? styles.show : ''}`}>
                                        {item.children.map((child) => (
                                            <Link key={child.href} href={child.href} className={styles.mobileDropdownItem}>
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link href={item.href} className={`${styles.mobileNavLink} ${isActive(item.href) ? styles.active : ''}`}>
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
                <Link href="/lien-he" className={`${styles.ctaButton} ${styles.mobileCta}`}>
                    <FiPhone />
                    Đăng ký tư vấn
                </Link>
            </div>
        </>,
        document.body
    ) : null;

    const isNewsPage = pathname.startsWith('/tin-tuc');
    const headerClasses = `${styles.header} ${scrolled || isNewsPage ? styles.scrolled : ''}`;

    return (
        <>
            <header className={headerClasses}>
                <div className={styles.headerInner}>
                    <Link href="/" className={styles.logo}>
                        <Image
                            src="/images/logo-horizontal.png"
                            alt="BLOCKERA Education"
                            width={180}
                            height={45}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav}>
                        {navigation.map((item) => (
                            <div key={item.href} className={styles.navItem}>
                                {item.children ? (
                                    <>
                                        <Link href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}>
                                            {item.label}
                                            <FiChevronDown className={styles.chevron} />
                                        </Link>
                                        <div className={styles.dropdown}>
                                            {item.children.map((child) => (
                                                <Link key={child.href} href={child.href} className={styles.dropdownItem}>
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link href={item.href} className={`${styles.navLink} ${isActive(item.href) ? styles.active : ''}`}>
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    <Link href="/lien-he" className={`${styles.ctaButton} desktop`}>
                        <FiPhone />
                        Đăng ký tư vấn
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className={`${styles.mobileToggle} ${mobileOpen ? styles.open : ''}`}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Menu"
                    >
                        <span /><span /><span />
                    </button>
                </div>
            </header>

            {/* Mobile menu rendered via portal */}
            {mobileMenuContent}
        </>
    );
}
