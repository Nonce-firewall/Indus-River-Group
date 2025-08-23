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

    // Send email asynchronously without blocking the response
    const emailData = {
      to: 'gaurav@indusrivergroup.com', // Direct to Gaurav who will setup auto-forward
      subject: 'New Contact Form Submission',
      text: emailContent,
      from: email,
      replyTo: email
    };

    // Send email in background without waiting
    sendContactEmail(emailData).catch(error => {
      console.log('Background email sending failed:', error);
    });

    // Return immediate success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We have received your inquiry and will get back to you within 24-48 hours.'
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