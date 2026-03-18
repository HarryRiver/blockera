"use client";

import Image from "next/image";
import Link from "next/link";
import { FiPlay, FiArrowRight } from "react-icons/fi";
import { useScrollReveal } from "@/hooks/useAnimations";
import styles from "./HomePage.module.css";

const showcasePrograms = [
	{
		id: "ca-nhan",
		title: "Cá nhân",
		subtitle: "Personal Branding",
		album: [
			"/images/bg/program-personal.png",
			"/images/bg/hero-ca-nhan.png",
			"/images/hellen-1.png",
		],
		albumHref: "/thu-vien",
		videoThumb: "/images/bg/hero-ca-nhan.png",
		videoHref: "/thu-vien",
	},
	{
		id: "doanh-nghiep",
		title: "Doanh nghiệp",
		subtitle: "Corporate Training",
		album: [
			"/images/bg/program-corporate.png",
			"/images/bg/hero-doanh-nghiep.png",
			"/images/hellen-2.png",
		],
		albumHref: "/thu-vien",
		videoThumb: "/images/bg/hero-doanh-nghiep.png",
		videoHref: "/thu-vien",
	},
	{
		id: "co-quan",
		title: "Cơ quan, đơn vị nhà nước",
		subtitle: "Government & Public Services",
		album: [
			"/images/bg/program-government.png",
			"/images/bg/hero-co-quan.png",
			"/images/hellen-3.png",
		],
		albumHref: "/thu-vien",
		videoThumb: "/images/bg/hero-co-quan.png",
		videoHref: "/thu-vien",
	},
];

export default function TrainingShowcase() {
	const { ref, isRevealed } = useScrollReveal();

	return (
		<section className={styles.trainingShowcase} ref={ref}>
			<div className="container">
				<span className="section-label">Chương trình nổi bật</span>
				<h2 className="section-title center">Các chương trình đã đào tạo</h2>

				<div
					className={`${styles.showcaseGrid} ${isRevealed ? styles.revealed : ""}`}
				>
					{showcasePrograms.map((program) => (
						<article key={program.id} className={styles.showcaseCard}>
							<header className={styles.showcaseHead}>
								<h3 className={styles.showcaseTitle}>{program.title}</h3>
								<p className={styles.showcaseSub}>{program.subtitle}</p>
							</header>

							<div className={styles.albumFrame}>
								{program.album.map((src, index) => (
									<Link key={src} href={program.albumHref} className={styles.albumThumb} aria-label={`Xem album ảnh ${program.title}`}>
										<Image
											src={src}
											alt={`${program.title} album ${index + 1}`}
											width={320}
											height={220}
											sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
											loading="lazy"
										/>
									</Link>
								))}
							</div>

							<Link
								href={program.videoHref}
								className={styles.videoFrame}
								aria-label={`Xem video minh họa ${program.title}`}
							>
								<Image
									src={program.videoThumb}
									alt={`Video minh họa ${program.title}`}
									width={640}
									height={360}
									sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
									loading="lazy"
								/>
								<span className={styles.videoOverlay}>
									<span className={styles.videoPlay}>
										<FiPlay />
									</span>
									<span className={styles.videoLabel}>
										Video minh họa <FiArrowRight />
									</span>
								</span>
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
