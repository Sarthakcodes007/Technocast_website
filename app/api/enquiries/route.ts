import { NextResponse } from 'next/server';
import { getAllEnquiries } from '@/lib/db';

// This endpoint is for viewing all enquiries (you might want to add authentication)
export async function GET() {
  try {
    const enquiries = getAllEnquiries();
    return NextResponse.json({ enquiries }, { status: 200 });
  } catch (error) {
    console.error('Error fetching enquiries:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

