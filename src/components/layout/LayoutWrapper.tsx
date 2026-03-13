'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer/Footer';
import IntroSplash from '@/components/ui/IntroSplash';
import ScrollToTop from '@/components/ui/ScrollToTop/ScrollToTop';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdmin = pathname.startsWith('/admin');

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <>
            <IntroSplash />
            <Header />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
        </>
    );
}
