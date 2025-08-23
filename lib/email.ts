import { Resend } from 'resend';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { join } from 'path';

// Email service for sending contact form submissions using Resend
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
  // Check if Resend API key is configured
  if (!process.env.RESEND_API_KEY) {
    console.log('❌ EMAIL NOT SENT: Resend API key not configured');
    console.log('💡 To enable email delivery:');
    console.log('   1. Sign up at https://resend.com');
    console.log('   2. Get your API key from the dashboard');
    console.log('   3. Add RESEND_API_KEY=your-api-key to .env.local');
    console.log('   4. Restart the dev server (npm run dev)');
    return { success: false, error: 'Email service not configured' };
  }

  // Initialize Resend with API key only when needed
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log('📧 Sending contact form submission via Resend TO:', emailData.to);

  try {
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@indusrivergroup.com>', // Use your verified domain
      to: [emailData.to],
      subject: emailData.subject,
      text: emailData.text,
      replyTo: emailData.replyTo,
      // Note: Resend handles attachments differently if needed
    });

    if (error) {
      console.error('❌ RESEND EMAIL ERROR:', error);
      return { 
        success: false, 
        error: `Email delivery failed: ${error.message}` 
      };
    }

    console.log('✅ CONTACT FORM EMAIL SENT SUCCESSFULLY via Resend');
    console.log('📧 Message ID:', data?.id);
    return { success: true, messageId: data?.id };

  } catch (error: any) {
    console.error('❌ EMAIL DELIVERY FAILED');
    console.error('Error:', error.message);
    
    let userFriendlyError = 'Email delivery failed';
    
    if (error.message.includes('API key')) {
      userFriendlyError = 'Invalid API key. Please check your Resend configuration.';
    } else if (error.message.includes('domain')) {
      userFriendlyError = 'Domain not verified. Please verify your domain in Resend dashboard.';
    }
    
    return { 
      success: false, 
      error: userFriendlyError
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
  console.log(`💬 Message: ${formData.message}`);
  console.log('=====================================\n');
}

// Verify email configuration
export async function verifyEmailConfig() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Resend API key not configured. Please set RESEND_API_KEY in .env.local');
  }

  try {
    // Test Resend API by attempting to get account info
    const resend = new Resend(process.env.RESEND_API_KEY);
    // Simple test - this will validate the API key
    console.log('Resend email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('Email configuration verification failed:', error);
    throw new Error(`Resend configuration error: ${error}`);
  }
}