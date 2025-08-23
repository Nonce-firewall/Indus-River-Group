import { sendContactEmail } from './lib/email';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

async function testEmailIntegration() {
  console.log('🧪 Testing Email Integration');
  console.log('============================');
  
  // Check environment variables first
  console.log('📋 Checking environment variables...');
  console.log('ADMIN_EMAIL_USER:', process.env.ADMIN_EMAIL_USER ? '✅ Set' : '❌ Missing');
  console.log('ADMIN_EMAIL_PASSWORD:', process.env.ADMIN_EMAIL_PASSWORD ? '✅ Set' : '❌ Missing');
  
  if (!process.env.ADMIN_EMAIL_USER || !process.env.ADMIN_EMAIL_PASSWORD) {
    console.log('❌ Missing email credentials in .env.local file');
    return;
  }
  
  try {
    console.log('📧 Sending test email to info@indusrivergroup.com...');
    
    const testEmailData = {
      to: 'gaurav@indusrivergroup.com',
      subject: 'Test Contact Form Submission - Email Integration Test',
      text: `
This is a test email from the Indus River Group contact form integration.

Test Details:
- Sent at: ${new Date().toLocaleString()}
- From: Contact form test script
- Purpose: Verify email delivery to group members

If you receive this email, the integration is working correctly!

All group members should receive this test message.
      `.trim(),
      from: 'test@example.com',
      replyTo: 'test@example.com'
    };
    
    const result = await sendContactEmail(testEmailData);
    
    if (result.success) {
      console.log('✅ TEST EMAIL SENT SUCCESSFULLY!');
      console.log('📧 Message ID:', result.messageId);
      console.log('📬 Check gaurav@indusrivergroup.com inbox for the test email');
      console.log('🎉 Email integration is working correctly!');
    } else {
      console.log('❌ TEST EMAIL FAILED');
      console.log('Error:', result.error);
    }
    
  } catch (error) {
    console.log('❌ TEST FAILED WITH ERROR');
    console.log('Error details:', (error as Error).message);
    
    // Provide troubleshooting tips
    console.log('\n🔧 TROUBLESHOOTING TIPS:');
    console.log('1. Check that your .env.local file has the correct credentials');
    console.log('2. Verify the app password is exactly 16 characters with no spaces');
    console.log('3. Ensure 2FA is enabled on gaurav@indusrivergroup.com');
    console.log('4. Try generating a new app password if needed');
  }
}

// Run the test
testEmailIntegration();