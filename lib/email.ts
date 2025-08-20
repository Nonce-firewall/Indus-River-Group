import { createTransport } from 'nodemailer';

// Email service for sending contact form submissions
export async function sendContactEmail(emailData: {
  to: string;
  subject: string;
  text: string;
  from: string;
  replyTo: string;
  attachments?: Array<{
    filename: string;
    content: Buffer;
    contentType: string;
  }>;
}) {
  // Check if email credentials are configured
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.warn('Email credentials not configured - skipping email send');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    // Configure Gmail SMTP transporter with robust settings
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
      connectionTimeout: 30000, // Reduced to 30 seconds
      greetingTimeout: 15000, // Reduced to 15 seconds
      socketTimeout: 30000, // Reduced to 30 seconds
    });

    const mailOptions = {
      from: `"Indus River Group Website" <${process.env.GMAIL_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      replyTo: emailData.replyTo,
      attachments: emailData.attachments || [],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.message.includes('ETIMEDOUT') || 
          error.message.includes('Greeting never received') ||
          error.message.includes('Connection timeout')) {
        console.warn('SMTP connection timeout - likely network/firewall issue');
        return { 
          success: false, 
          error: 'SMTP connection timeout - email service temporarily unavailable' 
        };
      }
      if (error.message.includes('Invalid login') || 
          error.message.includes('Authentication failed')) {
        console.warn('SMTP authentication failed - check credentials');
        return { 
          success: false, 
          error: 'Email authentication failed - check configuration' 
        };
      }
    }
    
    return { 
      success: false, 
      error: 'Email service temporarily unavailable' 
    };
  }
}

// Verify email configuration
export async function verifyEmailConfig() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local');
  }

  // Create transporter with the same configuration as sendContactEmail
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false
    },
    connectionTimeout: 60000,
    greetingTimeout: 30000,
    socketTimeout: 60000,
  });

  try {
    await transporter.verify();
    console.log('Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('Email configuration verification failed:', error);
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('ETIMEDOUT') || error.message.includes('Greeting never received')) {
        throw new Error('Unable to connect to Gmail SMTP server. Please check your internet connection and ensure Gmail credentials are correct.');
      }
      if (error.message.includes('Invalid login')) {
        throw new Error('Gmail authentication failed. Please verify your email and app password are correct.');
      }
    }
    throw new Error(`Email configuration error: ${error}`);
  }
}