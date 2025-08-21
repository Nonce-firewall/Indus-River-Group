import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail, logFormSubmission } from '@/lib/email';

// Set a timeout for the API route
export const maxDuration = 30; // 30 seconds max
export async function POST(request: NextRequest) {
  try {
    // Start timing the request
    const startTime = Date.now();
    
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

    // Always log the form submission locally
    logFormSubmission({
      audienceType,
      name,
      email,
      company,
      role,
      message,
      attachmentCount: attachments.length,
      attachmentNames: attachments.map(att => att.filename),
      submittedAt: new Date().toISOString()
    });

    // Send email with timeout handling
    const emailData = {
      to: process.env.GMAIL_USER || 'gaurav@indusrivergroup.com',
      subject: `New Contact Form Submission - ${audienceType.charAt(0).toUpperCase() + audienceType.slice(1).replace('-', ' ')}`,
      text: emailContent,
      from: email,
      replyTo: email,
      attachments: attachments
    };

    // Add timeout wrapper for email sending
    const emailPromise = sendContactEmail(emailData);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Email timeout')), 20000) // 20 second timeout
    );
    
    let emailResult;
    try {
      emailResult = await Promise.race([emailPromise, timeoutPromise]);
    } catch (error) {
      console.log('Email sending timed out or failed:', error);
      emailResult = { success: false, error: 'Email timeout' };
    }
    
    const processingTime = Date.now() - startTime;
    console.log(`Form processing completed in ${processingTime}ms`);
    
    // Return different messages based on email success
    if (emailResult.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message. We have received your inquiry and will get back to you within 24-48 hours.'
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Your message has been logged locally, but email delivery failed. Please send your message directly to gaurav@indusrivergroup.com to ensure we receive it promptly.'
        },
        { status: 202 }
      );
    }

  } catch (error) {
    console.log('Contact form processing error:', error);
    
    // Always return a generic error message
    return NextResponse.json(
      { error: 'There was an issue processing your request. Please try again or contact us directly at info@indusrivergroup.com' },
      { status: 500 }
    );
  }
}