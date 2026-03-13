import mongoose, { Schema, Model } from 'mongoose';

export interface IContact {
    fullName: string;
    email: string;
    phone: string;
    subject: 'tu-van-khoa-hoc' | 'hop-tac-doanh-nghiep' | 'khac';
    message: string;
    isRead: boolean;
    createdAt: Date;
}

export interface IBlogPost {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    thumbnail: string;
    category: string;
    tags: string[];
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string[];
    isPublished: boolean;
    publishedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}

export interface IGalleryItem {
    title: string;
    type: 'image' | 'video' | 'event';
    url: string;
    thumbnail: string;
    description: string;
    category: string;
    order: number;
    isPublished: boolean;
    createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, enum: ['tu-van-khoa-hoc', 'hop-tac-doanh-nghiep', 'khac'], default: 'khac' },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
}, { timestamps: true });

const BlogPostSchema = new Schema<IBlogPost>({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    thumbnail: { type: String, default: '' },
    category: { type: String, default: 'Chung' },
    tags: [{ type: String }],
    seoTitle: { type: String, default: '' },
    seoDescription: { type: String, default: '' },
    seoKeywords: [{ type: String }],
    isPublished: { type: Boolean, default: false },
    publishedAt: { type: Date },
}, { timestamps: true });

BlogPostSchema.index({ slug: 1 });
BlogPostSchema.index({ isPublished: 1, publishedAt: -1 });
BlogPostSchema.index({ category: 1 });

const GalleryItemSchema = new Schema<IGalleryItem>({
    title: { type: String, required: true },
    type: { type: String, enum: ['image', 'video', 'event'], required: true },
    url: { type: String, required: true },
    thumbnail: { type: String, default: '' },
    description: { type: String, default: '' },
    category: { type: String, default: '' },
    order: { type: Number, default: 0 },
    isPublished: { type: Boolean, default: true },
}, { timestamps: true });

export const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);
export const BlogPost: Model<IBlogPost> = mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
export const GalleryItem: Model<IGalleryItem> = mongoose.models.GalleryItem || mongoose.model<IGalleryItem>('GalleryItem', GalleryItemSchema);
