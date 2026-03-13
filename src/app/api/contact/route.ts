import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Contact } from '@/lib/models';

/* Simple in-memory rate limiter: 1 submission per IP per 3 minutes */
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_MS = 3 * 60 * 1000; // 3 minutes

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const lastSubmit = rateLimitMap.get(ip);
    if (lastSubmit && now - lastSubmit < RATE_LIMIT_MS) {
        return true;
    }
    rateLimitMap.set(ip, now);
    // Clean old entries every 100 entries
    if (rateLimitMap.size > 100) {
        for (const [key, time] of rateLimitMap) {
            if (now - time > RATE_LIMIT_MS) rateLimitMap.delete(key);
        }
    }
    return false;
}

export async function POST(req: NextRequest) {
    try {
        const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Bạn đã gửi yêu cầu gần đây. Vui lòng đợi 3 phút trước khi gửi lại.' },
                { status: 429 }
            );
        }

        const data = await req.json();
        const { fullName, email, phone, subject, message } = data;

        if (!fullName || !email || !phone || !message) {
            return NextResponse.json({ error: 'Vui lòng điền đầy đủ thông tin' }, { status: 400 });
        }

        await connectDB();
        await Contact.create({ fullName, email, phone, subject: subject || 'khac', message });

        return NextResponse.json({ success: true, message: 'Gửi thành công' });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}
