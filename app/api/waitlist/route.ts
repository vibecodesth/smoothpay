import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, userType, stress } = body;

    // For now, log to console (will integrate proper DB later)
    console.log('New waitlist signup:', { email, name, userType, stress });

    // TODO: Integrate with Supabase or email service
    // For MVP, we can use Formspree or Google Sheets API

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully joined waitlist!' 
    });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
}
