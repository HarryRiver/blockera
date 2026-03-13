import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Liên hệ tư vấn',
    description: 'Liên hệ BLOCKERA Education để được tư vấn chương trình đào tạo phong thái, nghi thức và giao tiếp chuyên nghiệp. Hotline: 0984 191 359.',
    keywords: ['liên hệ blockera', 'tư vấn đào tạo phong thái', 'đăng ký khóa học phong thái', 'hellen thanh thùy liên hệ'],
    openGraph: {
        title: 'Liên hệ tư vấn | BLOCKERA Education',
        description: 'Liên hệ ngay để được tư vấn chương trình đào tạo phong thái phù hợp. Hotline: 0984 191 359.',
        url: 'https://blockeraedu.com/lien-he',
    },
    alternates: { canonical: 'https://blockeraedu.com/lien-he' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
