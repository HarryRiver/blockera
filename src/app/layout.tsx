import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/layout/LayoutWrapper";

const SITE_URL = 'https://blockeraedu.com';
const SITE_NAME = 'BLOCKERA Education';
const SITE_DESC = 'Hellen Thanh Thùy - Chuyên gia đào tạo phong thái, nghi thức, nghệ thuật giao tiếp và xây dựng thương hiệu cá nhân. Gần 10 năm kinh nghiệm huấn luyện lãnh đạo và doanh nghiệp.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'BLOCKERA Education - Đào tạo Phong thái & Nghi thức | Hellen Thanh Thùy',
    template: '%s | BLOCKERA Education'
  },
  description: SITE_DESC,
  keywords: [
    'đào tạo phong thái', 'nghi thức giao tiếp', 'thương hiệu cá nhân',
    'kỹ năng giao tiếp', 'hellen thanh thúy', 'hellen thanh thùy', 'blockera', 'blockera education',
    'chuẩn hóa hành vi', 'phong thái doanh nhân', 'đào tạo doanh nghiệp',
    'nghệ thuật giao tiếp', 'kiến trúc sư phong thái', 'phong thái chuyên nghiệp',
    'đào tạo kỹ năng mềm', 'xây dựng hình ảnh cá nhân', 'nghi thức xã giao',
    'kỹ năng thuyết trình', 'phong cách lãnh đạo', 'tác phong chuyên nghiệp',
    'đào tạo giao tiếp', 'khoá học phong thái', 'công ty đào tạo phong thái',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/images/logo-vertical.png', type: 'image/png' },
    ],
    apple: '/images/logo-vertical.png',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'BLOCKERA Education - Đào tạo Phong thái & Nghi thức | Hellen Thanh Thùy',
    description: 'Kiến trúc sư chuẩn hóa hành vi - Phong thái - Nghi thức. Gần 10 năm kinh nghiệm đào tạo lãnh đạo và doanh nghiệp.',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'BLOCKERA Education - Đào tạo Phong thái & Nghi thức',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLOCKERA Education - Đào tạo Phong thái & Nghi thức',
    description: 'Hellen Thanh Thùy - Chuyên gia đào tạo phong thái, nghi thức, nghệ thuật giao tiếp.',
    images: ['/images/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large' as const,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {},
  other: {
    'geo.region': 'VN-HN',
    'geo.placename': 'Hanoi',
    'theme-color': '#0e1330',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": SITE_NAME,
  "alternateName": "Hellen Thanh Thùy - Kiến trúc sư chuẩn hóa hành vi",
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/logo-horizontal.png`,
  "image": `${SITE_URL}/images/og-image.png`,
  "description": SITE_DESC,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hà Nội",
    "addressCountry": "VN"
  },
  "telephone": "+84984191359",
  "sameAs": [
    "https://www.facebook.com/hellenthanhthuy.phongthaidoanhnhan",
    "https://youtube.com/@thuyanhchannels"
  ],
  "founder": {
    "@type": "Person",
    "name": "Hellen Thanh Thùy",
    "jobTitle": "Kiến trúc sư chuẩn hóa hành vi - Phong thái - Nghi thức"
  }
};

/* SiteNavigationElement structured data for Google sitelinks */
const siteNavigation = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      "name": "Trang chủ",
      "url": SITE_URL,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Giới thiệu",
      "url": `${SITE_URL}/gioi-thieu`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Chương trình đào tạo",
      "url": `${SITE_URL}/chuong-trinh`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Đào tạo Cá nhân",
      "url": `${SITE_URL}/chuong-trinh/ca-nhan`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Đào tạo Doanh nghiệp",
      "url": `${SITE_URL}/chuong-trinh/doanh-nghiep`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Đào tạo Cơ quan nhà nước",
      "url": `${SITE_URL}/chuong-trinh/co-quan-nha-nuoc`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Thư viện",
      "url": `${SITE_URL}/thu-vien`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Thư viện Hình ảnh",
      "url": `${SITE_URL}/thu-vien/hinh-anh`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Thư viện Video",
      "url": `${SITE_URL}/thu-vien/video`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Sự kiện",
      "url": `${SITE_URL}/thu-vien/su-kien`,
    },
    {
      "@type": "SiteNavigationElement",
      "name": "Liên hệ",
      "url": `${SITE_URL}/lien-he`,
    },
  ]
};

/* WebSite Schema for Google sitelinks search box */
const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": SITE_NAME,
  "alternateName": "BLOCKERA",
  "url": SITE_URL,
  "description": SITE_DESC,
  "inLanguage": "vi",
  "publisher": {
    "@type": "EducationalOrganization",
    "name": SITE_NAME,
    "url": SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigation) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
