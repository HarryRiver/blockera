import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import styles from "./News.module.css";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
	title: "Tin tức | Hellen Thanh Thùy",
	description:
		"Cập nhật những tin tức mới nhất về các hoạt động đào tạo, phong thái và văn hóa doanh nghiệp của Hellen Thanh Thùy.",
	keywords: [
		"tin tức",
		"hoạt động đào tạo",
		"phong thái",
		"văn hóa doanh nghiệp",
		"hellen thanh thùy",
	],
	openGraph: {
		title: "Tin tức | BLOCKERA Education",
		description: "Cập nhật những tin tức mới nhất từ Hellen Thanh Thùy.",
		url: "https://blockeraedu.com/tin-tuc",
	},
};

const NEWS_DATA = [
	{
		id: "xay-dung-van-hoa-cong-so-trong-ky-nguyen-moi",
		title: "Xây dựng văn hóa công sở trong kỷ nguyên mới",
		date: "12/08/2023",
		image:
			"https://cdn.giaoducthoidai.vn/images/b5058254b5037c9bf1af77643b3717adba8dbad46026da1760c8747de093af63a8904041fc31274acb4faf5c0a71469e/vh-1.jpg",
		excerpt:
			'GD&TĐ - Hội nhập và chuyển đổi số toàn cầu, văn hóa công sở trở thành "bộ mặt" sống động, định hình thương hiệu của mỗi cơ quan, đơn vị.',
		externalLink:
			"https://giaoducthoidai.vn/xay-dung-van-hoa-cong-so-trong-ky-nguyen-moi-post743783.html",
	},
];

export default function NewsPage() {
	return (
		<main className={styles.newsContainer}>
			<BreadcrumbJsonLd
				items={[
					{ name: "Trang chủ", url: "https://blockeraedu.com" },
					{ name: "Tin tức", url: "https://blockeraedu.com/tin-tuc" },
				]}
			/>

			<section className={styles.banner}>
				<div className={`container ${styles.bannerContent}`}>
					<span className={styles.bannerLabel}>TIN TỨC CẬP NHẬT</span>
					<h1 className={styles.bannerTitle}>TIN TỨC SỰ KIỆN</h1>
					<p className={styles.bannerSub}>
						Cập nhật những hoạt động nổi bật và xu hướng mới nhất
					</p>
				</div>
			</section>

			<section className={styles.newsListContainer}>
				{NEWS_DATA.map((news, index) => (
					<ScrollReveal key={news.id} delay={index * 150} direction="up">
						<a
							href={news.externalLink}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.newsCard}
						>
							<div className={styles.newsImageFrame}>
								<Image
									src={news.image}
									alt={news.title}
									fill
									className={styles.newsThumb}
									sizes="(max-width: 768px) 100vw, 350px"
								/>
							</div>
							<div className={styles.newsInfo}>
								<h2 className={styles.newsCardTitle}>{news.title}</h2>
								<p className={styles.newsExcerpt}>{news.excerpt}</p>
								<div className={styles.newsDate}>{news.date}</div>
							</div>
						</a>
					</ScrollReveal>
				))}
			</section>
		</main>
	);
}
