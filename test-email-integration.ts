import { sendContactEmail } from './lib/email';

async function testEmailIntegration() {
  console.log('🧪 Testing Email Integration');
  console.log('============================');
  
  try {
    console.log('📧 Sending test email to info@indusrivergroup.com...');
    
    const testEmailData = {
      to: 'info@indusrivergroup.com',
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
      console.log('📬 Check all group member inboxes for the test email');
      console.log('🎉 Email integration is working correctly!');
    } else {
      console.log('❌ TEST EMAIL FAILED');
      console.log('Error:', result.error);
    }
    
  } catch (error) {
    console.log('❌ TEST FAILED WITH ERROR');
    console.log('Error details:', error.message);
    
    // Provide troubleshooting tips
    console.log('\n🔧 TROUBLESHOOTING TIPS:');
    console.log('1. Check that your .env.local file has the correct credentials');
    console.log('2. Verify the app password is exactly 16 characters');
    console.log('3. Ensure 2FA is enabled on rohin@indusrivergroup.com');
    console.log('4. Try generating a new app password if needed');
  }
}

// Run the test
testEmailIntegration();