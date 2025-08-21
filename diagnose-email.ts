import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

async function diagnoseEmailIssues() {
  console.log('🔍 DIAGNOSING EMAIL CONFIGURATION');
  console.log('================================');
  
  // Step 1: Check environment variables
  console.log('\n1. CHECKING ENVIRONMENT VARIABLES:');
  console.log('GMAIL_USER:', process.env.GMAIL_USER ? '✅ Set' : '❌ Missing');
  console.log('GMAIL_APP_PASSWORD:', process.env.GMAIL_APP_PASSWORD ? '✅ Set' : '❌ Missing');
  
  if (process.env.GMAIL_USER) {
    console.log('Email address:', process.env.GMAIL_USER);
  }
  
  if (process.env.GMAIL_APP_PASSWORD) {
    console.log('App password length:', process.env.GMAIL_APP_PASSWORD.length, 'characters');
    console.log('App password format:', /^[a-z]{16}$/.test(process.env.GMAIL_APP_PASSWORD) ? '✅ Correct format' : '⚠️  Should be 16 lowercase letters');
  }
  
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.log('\n❌ MISSING CREDENTIALS - Cannot proceed with email test');
    return;
  }
  
  // Step 2: Test SMTP connection
  console.log('\n2. TESTING SMTP CONNECTION:');
  
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
    tls: {
      rejectUnauthorized: false
    }
  });
  
  try {
    console.log('Connecting to Gmail SMTP server...');
    await transporter.verify();
    console.log('✅ SMTP CONNECTION SUCCESSFUL');
  } catch (error: any) {
    console.log('❌ SMTP CONNECTION FAILED');
    console.log('Error:', error.message);
    
    // Provide specific troubleshooting advice
    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 TROUBLESHOOTING:');
      console.log('- Check that your Gmail address is correct');
      console.log('- Verify your app password is correct (16 characters)');
      console.log('- Make sure 2-factor authentication is enabled on your Google account');
      console.log('- Generate a new app password if needed');
    } else if (error.message.includes('ETIMEDOUT') || error.message.includes('timeout')) {
      console.log('\n🔧 TROUBLESHOOTING:');
      console.log('- Network connectivity issue');
      console.log('- Try again in a few moments');
      console.log('- Check if your firewall is blocking SMTP connections');
    }
    return;
  }
  
  // Step 3: Send test email
  console.log('\n3. SENDING TEST EMAIL:');
  
  try {
    const testEmail = {
      from: `"Test Email" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: 'Test Email from Indus River Group Website',
      text: `This is a test email sent at ${new Date().toISOString()}\n\nIf you receive this, your email configuration is working correctly!`,
    };
    
    console.log('Sending test email to:', testEmail.to);
    const info = await transporter.sendMail(testEmail);
    console.log('✅ TEST EMAIL SENT SUCCESSFULLY');
    console.log('Message ID:', info.messageId);
    console.log('📧 Check your inbox for the test email');
    
  } catch (error: any) {
    console.log('❌ TEST EMAIL FAILED');
    console.log('Error:', error.message);
  }
  
  console.log('\n================================');
  console.log('🏁 DIAGNOSIS COMPLETE');
}

// Run the diagnosis
diagnoseEmailIssues().catch(console.error);