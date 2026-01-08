import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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

    const fullName = `${firstName} ${lastName}`;

    const data = await resend.emails.send({
      from: 'BDL Contact Form <onboarding@resend.dev>',
      to: ['connect@bdlusa.com'],
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

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}

