import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Contact } from '@/lib/models';

function checkAuth(req: NextRequest) {
    const auth = req.headers.get('authorization');
    return auth === `Bearer ${process.env.ADMIN_PASSWORD}`;
}

export async function GET(req: NextRequest) {
    if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        await connectDB();
        const contacts = await Contact.find().sort({ createdAt: -1 }).lean();
        return NextResponse.json({ contacts: JSON.parse(JSON.stringify(contacts)) });
    } catch (error) {
        console.error('Contacts GET error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}

export async function PATCH(req: NextRequest) {
    if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        await connectDB();
        const { id, isRead } = await req.json();
        await Contact.findByIdAndUpdate(id, { isRead });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contacts PATCH error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    try {
        await connectDB();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 });
        await Contact.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contacts DELETE error:', error);
        return NextResponse.json({ error: 'Lỗi server' }, { status: 500 });
    }
}
