import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const { 
      userType, 
      firstName, 
      lastName, 
      email, 
      organization, 
      role, 
      country, 
      interest, 
      message 
    } = await request.json();

    // Basic validation
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    // Use verified domain email from environment variable
    // Fallback to onboarding@resend.dev only for testing
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'BDL Contact Form <onboarding@resend.dev>';
    const toEmail = process.env.RESEND_TO_EMAIL || 'connect@bdlusa.com';

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Contact Form Submission: ${fullName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #1a1a1a; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Inquiry from ${fullName}</h2>
          
          <div style="margin-top: 20px;">
            <p><strong>I AM:</strong> ${userType}</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Organization/Company:</strong> ${organization}</p>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Interested In:</strong> ${interest || 'Not specified'}</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-radius: 5px;">
            <p><strong>Comments:</strong></p>
            <p style="white-space: pre-wrap;">${message || 'No comments provided.'}</p>
          </div>
          
          <div style="margin-top: 30px; font-size: 12px; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
            This email was sent from the BDL Website Contact Form.
          </div>
        </div>
      `,
    });

    // Check if Resend returned an error
    if (result.error) {
      console.error('Resend API error:', result.error);
      return NextResponse.json(
        { success: false, error: result.error.message || 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true, 
      data: { id: result.data?.id } 
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to send email' },
      { status: 500 }
    );
  }
}

