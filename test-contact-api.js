const fetch = require('node-fetch');

async function testContactAPI() {
  console.log('🧪 Testing Contact Form API');
  console.log('===========================');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    company: 'Test Company',
    message: 'This is a test message from the API test script.'
  };
  
  try {
    console.log('📤 Sending test submission...');
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ API TEST SUCCESSFUL!');
      console.log('Response:', result);
      console.log('📧 Check if email was sent to gaurav@indusrivergroup.com');
      console.log('📝 Check contact-submissions.json for logged data');
    } else {
      console.log('❌ API TEST FAILED');
      console.log('Status:', response.status);
      console.log('Error:', result);
    }
    
  } catch (error) {
    console.log('❌ API TEST ERROR');
    console.log('Error:', error.message);
    console.log('💡 Make sure the dev server is running (npm run dev)');
  }
}

// Run the test
testContactAPI();