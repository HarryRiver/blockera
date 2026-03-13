import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { BlogPost } from '@/lib/models';

function checkAuth(req: NextRequest) {
    const auth = req.headers.get('authorization');
    return auth === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

// GET: Lấy danh sách bài viết (admin)
export async function GET(req: NextRequest) {
    if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '20');
        const skip = (page - 1) * limit;

        const [posts, total] = await Promise.all([
            BlogPost.find().sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
            BlogPost.countDocuments(),
        ]);
        return NextResponse.json({ posts: JSON.parse(JSON.stringify(posts)), total, pages: Math.ceil(total / limit) });
    } catch (error) {
        console.error('Blog GET error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}

// POST: Tạo bài viết mới
export async function POST(req: NextRequest) {
    if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const data = await req.json();
        await connectDB();

        // Tạo slug từ title
        const slug = data.slug || data.title
            .toLowerCase()
            .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');

        const post = await BlogPost.create({
            ...data,
            slug,
            publishedAt: data.isPublished ? new Date() : undefined,
        });

        return NextResponse.json({ success: true, post: JSON.parse(JSON.stringify(post)) });
    } catch (error) {
        console.error('Blog POST error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}

// PUT: Cập nhật bài viết
export async function PUT(req: NextRequest) {
    if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const data = await req.json();
        const { _id, ...update } = data;
        await connectDB();

        if (update.isPublished && !update.publishedAt) {
            update.publishedAt = new Date();
        }

        const post = await BlogPost.findByIdAndUpdate(_id, update, { new: true }).lean();
        return NextResponse.json({ success: true, post: JSON.parse(JSON.stringify(post)) });
    } catch (error) {
        console.error('Blog PUT error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}

// DELETE: Xóa bài viết
export async function DELETE(req: NextRequest) {
    if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        await connectDB();
        await BlogPost.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Blog DELETE error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}
