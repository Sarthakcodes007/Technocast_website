import { NextRequest, NextResponse } from 'next/server';
import { insertEnquiry } from '@/lib/db';
import { sendEnquiryEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Save to database
    const enquiryId = insertEnquiry({
      name,
      email,
      company,
      phone,
      message,
    });

    // Send email (non-blocking - don't fail if email fails)
    sendEnquiryEmail({
      name,
      email,
      company,
      phone,
      message,
    }).catch((error) => {
      console.error('Failed to send email notification:', error);
      // Don't throw - we still want to return success if DB save worked
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry submitted successfully',
        id: enquiryId 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing enquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

