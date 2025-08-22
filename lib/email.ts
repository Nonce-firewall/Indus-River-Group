import { createTransport } from 'nodemailer';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

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
    console.log('❌ EMAIL NOT SENT: Gmail credentials not configured');
    console.log('💡 To enable email delivery:');
    console.log('   1. Create .env.local file in project root');
    console.log('   2. Add GMAIL_USER=your-personal-gmail@gmail.com');
    console.log('   3. Add GMAIL_APP_PASSWORD=your-16-char-app-password');
    console.log('   4. Get app password from your personal Gmail account');
    return { success: false, error: 'Email service not configured' };
  }


  console.log('📧 Attempting to send contact form submission to:', emailData.to);
  console.log('📧 Using Gmail account:', process.env.GMAIL_USER);

  try {
    // Configure Gmail SMTP transporter
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
      socketTimeout: 60000, // 60 seconds
    });

    const mailOptions = {
      from: `"Indus River Group Contact Form" <${process.env.GMAIL_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      replyTo: emailData.replyTo,
      attachments: emailData.attachments || [],
    };

    console.log('📧 Sending email with subject:', emailData.subject);
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ CONTACT FORM EMAIL SENT SUCCESSFULLY to:', emailData.to);
    console.log('📧 Message ID:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.log('❌ CONTACT FORM EMAIL NOT SENT: SMTP connection failed');
    console.log('🔧 Error details:', error);
    console.log('📝 Form submission logged locally - check terminal output above');
    
    return { 
      success: false, 
      error: 'Email delivery failed' 
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
  
  // Save to JSON file for easy retrieval
  const logFilePath = join(process.cwd(), 'contact-submissions.json');
  
  let existingLogs = [];
  if (existsSync(logFilePath)) {
    try {
      const fileContent = readFileSync(logFilePath, 'utf8');
      existingLogs = JSON.parse(fileContent);
    } catch (error) {
      console.log('Error reading existing logs, starting fresh');
      existingLogs = [];
    }
  }
  
  existingLogs.push(logEntry);
  
  try {
    writeFileSync(logFilePath, JSON.stringify(existingLogs, null, 2));
    console.log(`✅ Form submission saved to: ${logFilePath}`);
  } catch (error) {
    console.log('❌ Failed to save form submission to file:', error);
  }
  
  console.log('\n🔔 NEW CONTACT FORM SUBMISSION');
  console.log('=====================================');
  console.log(`📅 Time: ${new Date().toLocaleString()}`);
  console.log(`👤 Name: ${formData.name}`);
  console.log(`📧 Email: ${formData.email}`);
  console.log(`🏢 Company: ${formData.company || 'Not provided'}`);
  console.log(`💼 Role: ${formData.role || 'Not provided'}`);
  console.log(`📋 Type: ${formData.audienceType}`);
  console.log(`💬 Message: ${formData.message}`);
  if (formData.attachmentCount > 0) {
    console.log(`📎 Attachments: ${formData.attachmentCount} files`);
    console.log(`   Files: ${formData.attachmentNames?.join(', ')}`);
  }
  console.log('=====================================\n');
}

// Verify email configuration
export async function verifyEmailConfig() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error('Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local');
  }

  // Create transporter with the same configuration as sendContactEmail
  const transporter = createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
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