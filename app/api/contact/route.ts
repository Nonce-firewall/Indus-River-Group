import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, logFormSubmission } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Indus River Group Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString('en-US', { 
  timeZone: 'America/New_York',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}
    `.trim();

    // Always log the form submission locally
    logFormSubmission({
      name,
      email,
      company,
      message,
      submittedAt: new Date().toISOString()
    });

    // Send email and wait for result
    const emailData = {
      to: 'gaurav@indusrivergroup.com',
      subject: 'New Contact Form Submission',
      text: emailContent,
      from: email,
      replyTo: email
    };

    // Send email and wait for result
    const emailResult = await sendContactEmail(emailData);
    
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { error: `Email delivery failed: ${emailResult.error}. Your message has been logged and we will respond soon.` },
        { status: 500 }
      );
    }

    // Return success only if email was sent
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! It has been sent to gaurav@indusrivergroup.com and we will get back to you within 24-48 hours.'
      },
      { status: 200 }
    );

  } catch (error) {
    console.log('Contact form processing error:', error);
    
    // Always return a generic error message
    return NextResponse.json(
      { error: 'There was an issue processing your request. Please try again or contact us directly at gaurav@indusrivergroup.com' },
      { status: 500 }
    );
  }
}