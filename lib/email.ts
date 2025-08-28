import { createTransport } from 'nodemailer';

interface EmailData {
  to: string;
  subject: string;
  text: string;
  from: string;
  replyTo: string;
}

interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

export async function sendContactEmail(emailData: EmailData): Promise<EmailResult> {
  try {
    // Check if email credentials are configured
    if (!process.env.ADMIN_EMAIL_USER || !process.env.ADMIN_EMAIL_PASSWORD) {
      return {
        success: false,
        error: 'Email credentials not configured'
      };
    }

    // Create transporter with Google Workspace SMTP
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ADMIN_EMAIL_USER,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
      connectionTimeout: 60000,
      greetingTimeout: 60000,
      socketTimeout: 60000,
    });

    // Send email
    const info = await transporter.sendMail({
      from: `"Indus River Group Contact Form" <${process.env.ADMIN_EMAIL_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      replyTo: emailData.replyTo,
    });

    return {
      success: true,
      messageId: info.messageId
    };

  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown email error'
    };
  }
}

export async function verifyEmailConfig(): Promise<void> {
  if (!process.env.ADMIN_EMAIL_USER || !process.env.ADMIN_EMAIL_PASSWORD) {
    throw new Error('Email credentials not configured in .env.local');
  }

  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL_USER,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,
  });

  await transporter.verify();
}