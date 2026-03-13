export const navigation = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/gioi-thieu' },
    {
        label: 'Chương trình đào tạo',
        href: '/chuong-trinh',
        children: [
            { label: 'Cá nhân', href: '/chuong-trinh/ca-nhan' },
            { label: 'Doanh nghiệp', href: '/chuong-trinh/doanh-nghiep' },
            { label: 'Cơ quan nhà nước', href: '/chuong-trinh/co-quan-nha-nuoc' },
        ]
    },
    { label: 'Phương pháp đào tạo', href: '/phuong-phap-dao-tao' },
    { label: 'Tin tức', href: '/tin-tuc' },
    {
        label: 'Thư viện',
        href: '/thu-vien',
        children: [
            { label: 'Hình ảnh', href: '/thu-vien/hinh-anh' },
            { label: 'Video', href: '/thu-vien/video' },
            { label: 'Sự kiện', href: '/thu-vien/su-kien' },
        ]
    },
    { label: 'Liên hệ', href: '/lien-he' },
];
