import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

// Load environment variables
config({ path: '.env.local' });

async function diagnoseEmailIssues() {
  console.log('🔍 DIAGNOSING EMAIL CONFIGURATION');
  console.log('================================');
  
  // Step 1: Check environment variables
  console.log('\n1. CHECKING ENVIRONMENT VARIABLES:');
  console.log('ADMIN_EMAIL_USER:', process.env.ADMIN_EMAIL_USER ? '✅ Set' : '❌ Missing');
  console.log('ADMIN_EMAIL_PASSWORD:', process.env.ADMIN_EMAIL_PASSWORD ? '✅ Set' : '❌ Missing');
  
  if (process.env.ADMIN_EMAIL_USER) {
    console.log('Admin email address:', process.env.ADMIN_EMAIL_USER);
  }
  
  if (process.env.ADMIN_EMAIL_PASSWORD) {
    console.log('App password length:', process.env.ADMIN_EMAIL_PASSWORD.length, 'characters');
    console.log('App password format:', /^[a-z]{16}$/.test(process.env.ADMIN_EMAIL_PASSWORD) ? '✅ Correct format' : '⚠️  Should be 16 lowercase letters');
  }
  
  if (!process.env.ADMIN_EMAIL_USER || !process.env.ADMIN_EMAIL_PASSWORD) {
    console.log('\n❌ MISSING CREDENTIALS - Cannot proceed with email test');
    return;
  }
  
  // Step 2: Test Google Workspace SMTP connection
  console.log('\n2. TESTING GOOGLE WORKSPACE SMTP CONNECTION:');
  
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL_USER,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  
  try {
    console.log('Connecting to Google Workspace SMTP server...');
    await transporter.verify();
    console.log('✅ GOOGLE WORKSPACE SMTP CONNECTION SUCCESSFUL');
  } catch (error: any) {
    console.log('❌ GOOGLE WORKSPACE SMTP CONNECTION FAILED');
    console.log('Error:', error.message);
    
    // Provide specific troubleshooting advice
    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 TROUBLESHOOTING:');
      console.log('- Check that your Google Workspace admin email is correct');
      console.log('- Verify your app password is correct (16 characters)');
      console.log('- Make sure 2-factor authentication is enabled on your Google Workspace account');
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
      from: `"Test Email" <${process.env.ADMIN_EMAIL_USER}>`,
      to: 'info@indusrivergroup.com', // Send to group email
      subject: 'Test Email from Indus River Group Website',
      text: `This is a test email sent at ${new Date().toISOString()}\n\nIf you receive this, your email configuration is working correctly!`,
    };
    
    console.log('Sending test email to group email:', testEmail.to);
    const info = await transporter.sendMail(testEmail);
    console.log('✅ TEST EMAIL SENT SUCCESSFULLY');
    console.log('Message ID:', info.messageId);
    console.log('📧 All group members should receive the test email');
    
  } catch (error: any) {
    console.log('❌ TEST EMAIL FAILED');
    console.log('Error:', error.message);
  }
  
  console.log('\n================================');
  console.log('🏁 DIAGNOSIS COMPLETE');
}

// Run the diagnosis
diagnoseEmailIssues().catch(console.error);