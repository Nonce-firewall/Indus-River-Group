import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const role = formData.get('role') as string;
    const message = formData.get('message') as string;
    const audienceType = formData.get('audienceType') as string;
    
    // Get attached files
    const attachments: { name: string; size: number; type: string }[] = [];
    const entries = Array.from(formData.entries());
    
    entries.forEach(([key, value]) => {
      if (key.startsWith('attachment_') && value instanceof File) {
        attachments.push({
          name: value.name,
          size: value.size,
          type: value.type
        });
      }
    });

    // Validate required fields
    if (!name || !email || !message || !audienceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = `
New Contact Form Submission from Indus River Group Website

Contact Type: ${audienceType}
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Role: ${role || 'Not provided'}

Message:
${message}

${attachments.length > 0 ? `
Attachments (${attachments.length} files):
${attachments.map(att => `- ${att.name} (${(att.size / 1024 / 1024).toFixed(2)} MB, ${att.type})`).join('\n')}
` : ''}
---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // For now, we'll use a simple email service
    // You'll need to configure this with your Google Workspace credentials
    const emailData = {
      to: 'info@indusrivergroup.com', // Replace with your actual email
      subject: `New Contact Form Submission - ${audienceType}`,
      text: emailContent,
      from: email,
      replyTo: email
    };

    // TODO: Integrate with your preferred email service
    // Options: Gmail API, SendGrid, Resend, etc.
    console.log('Email would be sent:', emailData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message. We will get back to you within 24-48 hours.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}