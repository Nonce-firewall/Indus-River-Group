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
    console.log('📝 Email credentials not configured - form data logged locally only');
    return { success: false, error: 'Email service not configured' };
  }

  // Quick network connectivity check - if this fails, skip email entirely
  try {
    // Test basic network connectivity with a very short timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000); // 2 second timeout
    
    await fetch('https://www.google.com', { 
      signal: controller.signal,
      method: 'HEAD'
    });
    clearTimeout(timeoutId);
  } catch (networkError) {
    console.log('📝 Network connectivity issue detected - form data logged locally only');
    console.log('💡 Email sending disabled due to network restrictions');
    return { success: false, error: 'Network connectivity issue' };
  }

  let transporter;
  try {
    // Configure Gmail SMTP transporter with very short timeouts
    transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false
      },
      // Very short timeout settings to fail fast on network issues
      connectionTimeout: 5000, // 5 seconds
      greetingTimeout: 3000, // 3 seconds  
      socketTimeout: 5000, // 5 seconds
    });
  } catch (error) {
    console.log('📝 SMTP transporter creation failed - form data logged locally only');
    return { success: false, error: 'Email service configuration error' };
  }

  try {
    const mailOptions = {
      from: `"Indus River Group Website" <${process.env.GMAIL_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      replyTo: emailData.replyTo,
      attachments: emailData.attachments || [],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email sent successfully to:', emailData.to);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.log('📝 Email sending failed due to network issues - form data logged locally only');
    
    // Return generic error for user-facing messages
    return { 
      success: false, 
      error: 'Network connectivity issue' 
    };
  }
}

// Log form submission locally when email fails
export function logFormSubmission(formData: any) {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    type: 'contact_form_submission',
    data: formData
  };
  
  console.log('=== CONTACT FORM SUBMISSION ===');
  console.log(JSON.stringify(logEntry, null, 2));
  console.log('================================');
}

// Verify email configuration
export async function verifyEmailConfig() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local');
  }

  // Create transporter with the same configuration as sendContactEmail
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
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