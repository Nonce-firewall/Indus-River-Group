const nodemailer = require('nodemailer');
const fs = require('fs');
require('dotenv').config({ path: '.env.local' });

async function diagnoseEmail() {
  console.log('🔍 Email Diagnostic Tool Starting...\n');

  // Step 1: Check environment variables
  console.log('1. Checking Environment Variables:');
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  console.log(`   EMAIL_USER: ${emailUser ? '✅ Set' : '❌ Missing'}`);
  console.log(`   EMAIL_PASS: ${emailPass ? '✅ Set' : '❌ Missing'}`);
  
  if (!emailUser || !emailPass) {
    console.log('\n❌ Missing email credentials in .env.local file');
    console.log('Please ensure you have:');
    console.log('EMAIL_USER=your-gmail@gmail.com');
    console.log('EMAIL_PASS=your-16-character-app-password');
    return;
  }

  // Step 2: Validate email format
  console.log('\n2. Validating Email Format:');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailRegex.test(emailUser);
  console.log(`   Email format: ${isValidEmail ? '✅ Valid' : '❌ Invalid'}`);
  
  if (!isValidEmail) {
    console.log('   Please use a valid email address format');
    return;
  }

  // Step 3: Check app password format
  console.log('\n3. Checking App Password Format:');
  const isValidAppPassword = emailPass.length === 16 && /^[a-z]+$/.test(emailPass);
  console.log(`   App password length: ${emailPass.length} characters`);
  console.log(`   App password format: ${isValidAppPassword ? '✅ Valid (16 lowercase letters)' : '❌ Invalid'}`);
  
  if (!isValidAppPassword) {
    console.log('   App password should be exactly 16 lowercase letters');
    console.log('   Generate a new one at: https://myaccount.google.com/apppasswords');
    return;
  }

  // Step 4: Create transporter
  console.log('\n4. Creating Email Transporter:');
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  });

  console.log('   Transporter created ✅');

  // Step 5: Test SMTP connection
  console.log('\n5. Testing SMTP Connection:');
  try {
    await transporter.verify();
    console.log('   SMTP connection: ✅ Success');
  } catch (error) {
    console.log('   SMTP connection: ❌ Failed');
    console.log(`   Error: ${error.message}`);
    
    if (error.message.includes('Invalid login')) {
      console.log('\n💡 Troubleshooting Tips:');
      console.log('   - Ensure 2-factor authentication is enabled on your Google account');
      console.log('   - Generate a new app password at: https://myaccount.google.com/apppasswords');
      console.log('   - Use the app password (not your regular Gmail password)');
    }
    return;
  }

  // Step 6: Send test email
  console.log('\n6. Sending Test Email:');
  const testEmail = {
    from: emailUser,
    to: emailUser, // Send to yourself for testing
    subject: 'Email Diagnostic Test - Success!',
    html: `
      <h2>🎉 Email Configuration Working!</h2>
      <p>This test email confirms that your email configuration is working correctly.</p>
      <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      <p><strong>From:</strong> ${emailUser}</p>
      <hr>
      <p><em>This is an automated test email from your Indus River Group contact form diagnostic.</em></p>
    `,
  };

  try {
    const info = await transporter.sendMail(testEmail);
    console.log('   Test email: ✅ Sent successfully');
    console.log(`   Message ID: ${info.messageId}`);
    console.log(`   Check your inbox at: ${emailUser}`);
  } catch (error) {
    console.log('   Test email: ❌ Failed to send');
    console.log(`   Error: ${error.message}`);
    return;
  }

  console.log('\n🎉 Email Diagnostic Complete - Everything is working!');
  console.log('\nYour contact form should now work properly.');
  console.log('If the contact form is still slow, the issue might be network-related.');
}

// Run the diagnostic
diagnoseEmail().catch(console.error);