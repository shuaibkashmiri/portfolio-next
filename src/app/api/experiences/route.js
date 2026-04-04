import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Experience from '@/models/Experience';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    await connectDB();
    const experiences = await Experience.find().sort({ order: 1 });
    return NextResponse.json(experiences);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    const experience = await Experience.create(data);
    return NextResponse.json(experience, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
