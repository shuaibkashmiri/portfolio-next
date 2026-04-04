import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import SiteSettings from '@/models/SiteSettings';
import { getServerSession } from 'next-auth';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    await connectDB();
    let settings = await SiteSettings.findOne();
    
    if (!settings) {
      // Create default settings if none exist
      settings = await SiteSettings.create({
        aboutText: 'Default about text',
        heroTitle: 'Full Stack Developer',
        heroSubtitle: 'Building amazing web applications',
        profileImage: '/default-profile.jpg',
        aboutImage: '/default-about.jpg',
        contactEmail: 'contact@example.com',
        contactPhone: '+1234567890',
        location: 'Location',
      });
    }
    
    return NextResponse.json(settings, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    
    let settings = await SiteSettings.findOne();
    
    if (!settings) {
      settings = await SiteSettings.create(data);
    } else {
      settings = await SiteSettings.findByIdAndUpdate(settings._id, data, { new: true });
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
