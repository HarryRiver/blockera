import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import connectDB from '@/lib/mongodb';
import { BlogPost } from '@/lib/models';
import styles from '../blog.module.css';

interface Props { params: Promise<{ slug: string }> }

async function getPost(slug: string) {
    try {
        await connectDB();
        const post = await BlogPost.findOne({ slug, isPublished: true }).lean();
        return post ? JSON.parse(JSON.stringify(post)) : null;
    } catch { return null; }
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return { title: 'Không tìm thấy bài viết' };
    return {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        keywords: post.seoKeywords || [],
        openGraph: {
            title: post.seoTitle || post.title,
            description: post.seoDescription || post.excerpt,
            url: `https://blockeraedu.com/tin-tuc/${post.slug}`,
            images: post.thumbnail ? [{ url: post.thumbnail }] : [],
            type: 'article',
            publishedTime: post.publishedAt,
        },
        alternates: { canonical: `https://blockeraedu.com/tin-tuc/${post.slug}` },
    };
}

export default async function BlogDetailPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) notFound();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.thumbnail || '',
        "datePublished": post.publishedAt,
        "dateModified": post.updatedAt,
        "author": { "@type": "Person", "name": "Hellen Thanh Thúy" },
        "publisher": { "@type": "Organization", "name": "BLOCKERA Education", "logo": { "@type": "ImageObject", "url": "https://blockeraedu.com/images/logo-horizontal-black.png" } },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <section className={styles.banner}>
                <div className={`container ${styles.bannerContent}`}>
                    <span className={styles.bannerLabel}>{post.category || 'TIN TỨC'}</span>
                    <h1 className={styles.bannerTitle} style={{ fontSize: '2.25rem' }}>{post.title}</h1>
                </div>
            </section>
            <article className={styles.article}>
                <div className={styles.articleContainer}>
                    <div className={styles.articleMeta}>
                        <span className={styles.articleCat}>{post.category || 'Chung'}</span>
                        <time className={styles.articleDate}>
                            {new Date(post.publishedAt).toLocaleDateString('vi-VN', { day: '2-digit', month: 'long', year: 'numeric' })}
                        </time>
                    </div>
                    {post.thumbnail && <img src={post.thumbnail} alt={post.title} className={styles.articleThumb} loading="lazy" />}
                    <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: post.content }} />
                    {post.tags?.length > 0 && (
                        <div className={styles.articleTags}>
                            {post.tags.map((tag: string) => <span key={tag} className={styles.articleTag}>{tag}</span>)}
                        </div>
                    )}
                    <Link href="/tin-tuc" className={styles.backLink}><FiArrowLeft /> Quay lại tin tức</Link>
                </div>
            </article>
        </>
    );
}
