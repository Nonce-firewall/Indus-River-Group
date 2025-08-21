import { verifyEmailConfig } from './lib/email';

async function testEmailSetup() {
  try {
    console.log('🔧 Testing email configuration...');
    await verifyEmailConfig();
    console.log('✅ Email configuration is working correctly!');
    console.log('📧 Contact form emails will be delivered successfully.');
  } catch (error) {
    console.log('❌ Email configuration issue:', (error as Error).message);
    console.log('💡 Please check your .env.local file credentials.');
  }
}

testEmailSetup();