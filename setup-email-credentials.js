const fs = require('fs');
const path = require('path');

function setupEmailCredentials() {
  console.log('📧 EMAIL CREDENTIALS SETUP GUIDE');
  console.log('================================');
  
  const envPath = path.join(process.cwd(), '.env.local');
  
  // Check if .env.local exists
  if (fs.existsSync(envPath)) {
    console.log('✅ .env.local file exists');
    
    // Read and check contents
    const envContent = fs.readFileSync(envPath, 'utf8');
    console.log('\n📋 Current .env.local contents:');
    console.log(envContent);
    
    // Check for required variables
    const hasAdminUser = envContent.includes('ADMIN_EMAIL_USER=');
    const hasAdminPass = envContent.includes('ADMIN_EMAIL_PASSWORD=');
    
    console.log('\n🔍 Configuration check:');
    console.log('ADMIN_EMAIL_USER:', hasAdminUser ? '✅ Found' : '❌ Missing');
    console.log('ADMIN_EMAIL_PASSWORD:', hasAdminPass ? '✅ Found' : '❌ Missing');
    
    if (!hasAdminUser || !hasAdminPass) {
      console.log('\n❌ MISSING EMAIL CREDENTIALS');
    } else {
      console.log('\n✅ Email credentials appear to be configured');
    }
  } else {
    console.log('❌ .env.local file does not exist');
  }
  
  console.log('\n📝 TO SET UP EMAIL DELIVERY:');
  console.log('1. Create/update .env.local file in project root');
  console.log('2. Add these lines:');
  console.log('   ADMIN_EMAIL_USER=gaurav@indusrivergroup.com');
  console.log('   ADMIN_EMAIL_PASSWORD=your-16-character-app-password');
  console.log('');
  console.log('3. To get the app password:');
  console.log('   - Go to Google Account settings for gaurav@indusrivergroup.com');
  console.log('   - Security → 2-Step Verification → App passwords');
  console.log('   - Generate password for "Mail"');
  console.log('   - Use the 16-character password (no spaces)');
  console.log('');
  console.log('4. Restart the dev server after updating .env.local');
  console.log('');
  console.log('💡 The contact form will work without email setup,');
  console.log('   but submissions will only be logged locally.');
}

setupEmailCredentials();