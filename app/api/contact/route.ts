import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { audienceType, name, email, company, role, message } = body;

    // Validate required fields
    if (!audienceType || !name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Log submission locally (always works)
    const submissionData = {
      timestamp: new Date().toISOString(),
      data: {
        audienceType,
        name,
        email,
        company: company || 'Not provided',
        role: role || 'Not provided',
        message
      }
    };

    // Save to local file
    const logFilePath = path.join(process.cwd(), 'contact-submissions.json');
    let submissions = [];
    
    try {
      if (fs.existsSync(logFilePath)) {
        const fileContent = fs.readFileSync(logFilePath, 'utf8');
        submissions = JSON.parse(fileContent);
      }
    } catch (error) {
      console.log('Could not read existing submissions file, starting fresh');
    }

    submissions.push(submissionData);
    fs.writeFileSync(logFilePath, JSON.stringify(submissions, null, 2));

    // Prepare email content
    const emailSubject = `New Contact Form Submission - ${audienceType}`;
    const emailText = `
New contact form submission received:

Contact Type: ${audienceType}
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Role: ${role || 'Not provided'}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString()}
    `.trim();

    // Try to send email (optional - won't fail if email isn't configured)
    try {
      const emailResult = await sendContactEmail({
        to: 'info@indusrivergroup.com',
        subject: emailSubject,
        text: emailText,
        from: email,
        replyTo: email
      });

      if (emailResult.success) {
        console.log('✅ Contact form email sent successfully:', emailResult.messageId);
      } else {
        console.log('⚠️ Email sending failed (but submission logged):', emailResult.error);
      }
    } catch (emailError) {
      console.log('⚠️ Email service error (but submission logged):', emailError);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24-48 hours.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}