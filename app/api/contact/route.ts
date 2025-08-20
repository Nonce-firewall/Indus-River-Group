import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, verifyEmailConfig } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const role = formData.get('role') as string;
    const message = formData.get('message') as string;
    const audienceType = formData.get('audienceType') as string;
    
    // Process attached files
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType: string;
    }> = [];
    
    const entries = Array.from(formData.entries());
    
    for (const [key, value] of entries) {
      if (key.startsWith('attachment_') && value instanceof File) {
        const buffer = Buffer.from(await value.arrayBuffer());
        attachments.push({
          filename: value.name,
          content: buffer,
          contentType: value.type || 'application/octet-stream'
        });
      }
    }

    // Validate required fields
    if (!name || !email || !message || !audienceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from Indus River Group Website

Contact Type: ${audienceType.charAt(0).toUpperCase() + audienceType.slice(1).replace('-', ' ')}
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Role: ${role || 'Not provided'}

Message:
${message}

${attachments.length > 0 ? `
Attachments (${attachments.length} files):
${attachments.map(att => `- ${att.filename} (${(att.content.length / 1024 / 1024).toFixed(2)} MB)`).join('\n')}
` : ''}
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

    // Send email
    const emailData = {
      to: process.env.GMAIL_USER || 'info@indusrivergroup.com',
      subject: `New Contact Form Submission - ${audienceType.charAt(0).toUpperCase() + audienceType.slice(1).replace('-', ' ')}`,
      text: emailContent,
      from: email,
      replyTo: email,
      attachments: attachments
    };

    const emailResult = await sendContactEmail(emailData);
    
    if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us directly at info@indusrivergroup.com' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you within 24-48 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Gmail credentials not configured') || 
          error.message.includes('Email configuration error')) {
        return NextResponse.json(
          { error: 'Email service not configured. Please contact us directly at info@indusrivergroup.com' },
          { status: 500 }
        );
      }
      if (error.message.includes('Invalid login') || 
          error.message.includes('Gmail authentication failed')) {
        return NextResponse.json(
          { error: 'Email authentication failed. Please contact us directly at info@indusrivergroup.com' },
          { status: 500 }
        );
      }
      if (error.message.includes('ETIMEDOUT') || 
          error.message.includes('Greeting never received') ||
          error.message.includes('Unable to connect to Gmail SMTP server')) {
        return NextResponse.json(
          { error: 'Unable to connect to email server. Please try again in a few minutes or contact us directly at info@indusrivergroup.com' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or contact us directly at info@indusrivergroup.com' },
      { status: 500 }
    );
  }
}