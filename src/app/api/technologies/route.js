import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Technology from '@/models/Technology';
import { getServerSession } from 'next-auth';

export async function GET() {
  try {
    await connectDB();
    const technologies = await Technology.find().sort({ order: 1 });
    return NextResponse.json(technologies);
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
    const technology = await Technology.create(data);
    return NextResponse.json(technology, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
