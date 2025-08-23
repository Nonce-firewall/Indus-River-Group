const { createTransport } = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

async function diagnoseEmailDelivery() {
  console.log('🔍 DIAGNOSING EMAIL DELIVERY ISSUE');
  console.log('==================================');
  
  // Step 1: Check environment variables
  console.log('\n1. CHECKING EMAIL CREDENTIALS:');
  const adminUser = process.env.ADMIN_EMAIL_USER;
  const adminPass = process.env.ADMIN_EMAIL_PASSWORD;
  
  console.log('ADMIN_EMAIL_USER:', adminUser ? `✅ Set (${adminUser})` : '❌ Missing');
  console.log('ADMIN_EMAIL_PASSWORD:', adminPass ? `✅ Set (${adminPass.length} chars)` : '❌ Missing');
  
  if (!adminUser || !adminPass) {
    console.log('\n❌ EMAIL CREDENTIALS NOT CONFIGURED');
    console.log('📝 To fix this:');
    console.log('1. Create/update .env.local file in project root');
    console.log('2. Add: ADMIN_EMAIL_USER=gaurav@indusrivergroup.com');
    console.log('3. Add: ADMIN_EMAIL_PASSWORD=your-16-character-app-password');
    console.log('4. Get app password from Google Workspace admin console');
    console.log('5. Restart the dev server (npm run dev)');
    return;
  }
  
  // Step 2: Test SMTP connection
  console.log('\n2. TESTING SMTP CONNECTION:');
  
  const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: adminUser,
      pass: adminPass,
    },
    connectionTimeout: 60000,
    greetingTimeout: 60000,
    socketTimeout: 60000,
  });
  
  try {
    console.log('Connecting to Gmail SMTP...');
    await transporter.verify();
    console.log('✅ SMTP CONNECTION SUCCESSFUL');
  } catch (error) {
    console.log('❌ SMTP CONNECTION FAILED');
    console.log('Error:', error.message);
    
    if (error.message.includes('Invalid login')) {
      console.log('\n🔧 AUTHENTICATION ISSUE:');
      console.log('- Verify your Google Workspace email is correct');
      console.log('- Check your app password (should be 16 characters)');
      console.log('- Ensure 2FA is enabled on your Google account');
      console.log('- Generate a new app password if needed');
    } else if (error.message.includes('ETIMEDOUT')) {
      console.log('\n🔧 NETWORK ISSUE:');
      console.log('- Connection timeout - try again in a moment');
      console.log('- Check your internet connection');
    }
    return;
  }
  
  // Step 3: Send test email
  console.log('\n3. SENDING TEST EMAIL:');
  
  try {
    const testEmail = {
      from: `"Indus River Group Contact Form" <${adminUser}>`,
      to: 'gaurav@indusrivergroup.com',
      subject: 'Test Email - Contact Form Diagnostic',
      text: `This is a test email sent at ${new Date().toISOString()}\n\nIf you receive this, your email configuration is working correctly!\n\nTest from: Contact form diagnostic tool`,
      replyTo: 'test@example.com'
    };
    
    console.log('Sending test email to gaurav@indusrivergroup.com...');
    const info = await transporter.sendMail(testEmail);
    console.log('✅ TEST EMAIL SENT SUCCESSFULLY!');
    console.log('Message ID:', info.messageId);
    console.log('📧 Check gaurav@indusrivergroup.com inbox for the test email (will auto-forward to info@indusrivergroup.com)');
    
  } catch (error) {
    console.log('❌ TEST EMAIL FAILED');
    console.log('Error:', error.message);
  }
  
  console.log('\n==================================');
  console.log('🏁 DIAGNOSIS COMPLETE');
  console.log('\nIf the test email was sent successfully but you still don\'t receive contact form emails:');
  console.log('1. Check spam/junk folder');
  console.log('2. Verify gaurav@indusrivergroup.com auto-forward filter is working');
  console.log('3. Try submitting the contact form again');
}

// Run the diagnosis
diagnoseEmailDelivery().catch(console.error);