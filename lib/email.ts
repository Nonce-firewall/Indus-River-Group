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
  if (!process.env.ADMIN_EMAIL_USER || !process.env.ADMIN_EMAIL_PASSWORD) {
    console.log('❌ EMAIL NOT SENT: Admin email credentials not configured');
    console.log('💡 To enable email delivery:');
    console.log('   1. Create .env.local file in project root');
    console.log('   2. Add ADMIN_EMAIL_USER=rohin@indusrivergroup.com');
    console.log('   3. Add ADMIN_EMAIL_PASSWORD=your-16-char-app-password');
    console.log('   4. Get app password from Google Workspace admin console');
    return { success: false, error: 'Email service not configured' };
  }


  console.log('📧 Sending contact form submission to group email:', emailData.to);
  console.log('📧 Using admin account:', process.env.ADMIN_EMAIL_USER);

  try {
    // Configure Google Workspace SMTP transporter
    const transporter = createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.ADMIN_EMAIL_USER,
        pass: process.env.ADMIN_EMAIL_PASSWORD,
      },
      connectionTimeout: 25000, // 25 seconds
      greetingTimeout: 25000, // 25 seconds
      socketTimeout: 25000, // 25 seconds
    });

    const mailOptions = {
      from: `"Indus River Group Contact Form" <${process.env.ADMIN_EMAIL_USER}>`,
      to: emailData.to,
      subject: emailData.subject,
      text: emailData.text,
      replyTo: emailData.replyTo,
      attachments: emailData.attachments || [],
    };

    console.log('📧 Sending email with subject:', emailData.subject);
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ CONTACT FORM EMAIL SENT SUCCESSFULLY to group email:', emailData.to);
    console.log('📧 All group members will receive this submission');
    console.log('📧 Message ID:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.log('❌ CONTACT FORM EMAIL NOT SENT: Google Workspace SMTP connection failed');
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
  if (!process.env.ADMIN_EMAIL_USER || !process.env.ADMIN_EMAIL_PASSWORD) {
    throw new Error('Admin email credentials not configured. Please set ADMIN_EMAIL_USER and ADMIN_EMAIL_PASSWORD in .env.local');
  }

  // Create Google Workspace transporter with the same configuration as sendContactEmail
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL_USER,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
    connectionTimeout: 60000,
    greetingTimeout: 25000,
    socketTimeout: 25000,
  });

  try {
    await transporter.verify();
    console.log('Google Workspace email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('Email configuration verification failed:', error);
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('ETIMEDOUT') || error.message.includes('Greeting never received')) {
        throw new Error('Unable to connect to Google Workspace SMTP server. Please check your internet connection and ensure admin email credentials are correct.');
      }
      if (error.message.includes('Invalid login')) {
        throw new Error('Google Workspace authentication failed. Please verify your admin email and app password are correct.');
      }
    }
    throw new Error(`Email configuration error: ${error}`);
  }
}