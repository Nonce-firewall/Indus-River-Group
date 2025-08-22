const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function testGoogleWorkspaceConnection() {
  console.log('🔍 Testing Google Workspace SMTP Connection');
  console.log('==========================================');
  
  // Check environment variables
  console.log('\n1. Checking credentials:');
  console.log('ADMIN_EMAIL_USER:', process.env.ADMIN_EMAIL_USER ? '✅ Set' : '❌ Missing');
  console.log('ADMIN_EMAIL_PASSWORD:', process.env.ADMIN_EMAIL_PASSWORD ? '✅ Set' : '❌ Missing');
  
  if (!process.env.ADMIN_EMAIL_USER || !process.env.ADMIN_EMAIL_PASSWORD) {
    console.log('❌ Missing credentials - cannot test connection');
    return;
  }
  
  console.log('Admin email:', process.env.ADMIN_EMAIL_USER);
  console.log('Password length:', process.env.ADMIN_EMAIL_PASSWORD.length, 'characters');
  
  // Create transporter with same settings as production
  console.log('\n2. Creating SMTP transporter...');
  const transporter = nodemailer.createTransporter({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.ADMIN_EMAIL_USER,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
    connectionTimeout: 60000, // 60 seconds
    greetingTimeout: 60000,   // 60 seconds  
    socketTimeout: 60000,     // 60 seconds
    debug: true,              // Enable debug output
    logger: true              // Enable logging
  });
  
  console.log('✅ Transporter created');
  
  // Test connection
  console.log('\n3. Testing SMTP connection...');
  try {
    console.log('Connecting to smtp.gmail.com:587...');
    await transporter.verify();
    console.log('✅ SMTP CONNECTION SUCCESSFUL!');
    console.log('🎉 Google Workspace email is properly configured');
    
    // Optional: Send a test email
    console.log('\n4. Sending test email...');
    const testEmail = {
      from: `"Test Connection" <${process.env.ADMIN_EMAIL_USER}>`,
      to: 'info@indusrivergroup.com',
      subject: 'SMTP Connection Test - Success!',
      text: `SMTP connection test successful at ${new Date().toISOString()}\n\nThis confirms that the Google Workspace email configuration is working correctly.`
    };
    
    const info = await transporter.sendMail(testEmail);
    console.log('✅ TEST EMAIL SENT!');
    console.log('Message ID:', info.messageId);
    console.log('📧 Check group email for the test message');
    
  } catch (error) {
    console.log('❌ SMTP CONNECTION FAILED');
    console.log('Error code:', error.code);
    console.log('Error message:', error.message);
    
    // Provide specific troubleshooting
    if (error.code === 'ETIMEDOUT' || error.message.includes('Greeting never received')) {
      console.log('\n🔧 NETWORK/TIMEOUT ISSUE:');
      console.log('- This appears to be a network connectivity problem');
      console.log('- The SMTP server is not responding within the timeout period');
      console.log('- This could be due to firewall restrictions or network latency');
      console.log('- Try again in a few minutes');
    } else if (error.message.includes('Invalid login')) {
      console.log('\n🔧 AUTHENTICATION ISSUE:');
      console.log('- Check that your app password is correct');
      console.log('- Ensure 2FA is enabled on the Google Workspace account');
      console.log('- Try generating a new app password');
    } else {
      console.log('\n🔧 OTHER ISSUE:');
      console.log('- Unexpected error occurred');
      console.log('- Check Google Workspace admin console for any restrictions');
    }
  }
  
  console.log('\n==========================================');
  console.log('🏁 Connection test complete');
}

// Run the test
testGoogleWorkspaceConnection().catch(console.error);