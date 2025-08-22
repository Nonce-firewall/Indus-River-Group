const fs = require('fs');
const path = require('path');

function viewSubmissions() {
  const logFilePath = path.join(process.cwd(), 'contact-submissions.json');
  
  if (!fs.existsSync(logFilePath)) {
    console.log('📝 No contact submissions found yet.');
    console.log('💡 Submissions will be saved to: contact-submissions.json');
    return;
  }
  
  try {
    const fileContent = fs.readFileSync(logFilePath, 'utf8');
    const submissions = JSON.parse(fileContent);
    
    console.log(`\n📋 CONTACT FORM SUBMISSIONS (${submissions.length} total)\n`);
    console.log('='.repeat(80));
    
    submissions.forEach((submission, index) => {
      const data = submission.data;
      const date = new Date(submission.timestamp).toLocaleString();
      
      console.log(`\n📧 SUBMISSION #${index + 1}`);
      console.log(`📅 Date: ${date}`);
      console.log(`👤 Name: ${data.name}`);
      console.log(`📧 Email: ${data.email}`);
      console.log(`🏢 Company: ${data.company || 'Not provided'}`);
      console.log(`💼 Role: ${data.role || 'Not provided'}`);
      console.log(`📋 Type: ${data.audienceType}`);
      console.log(`💬 Message: ${data.message}`);
      
      if (data.attachmentCount > 0) {
        console.log(`📎 Attachments: ${data.attachmentCount} files`);
        console.log(`   Files: ${data.attachmentNames?.join(', ')}`);
      }
      
      console.log('-'.repeat(80));
    });
    
    console.log(`\n✅ Found ${submissions.length} contact form submissions`);
    console.log(`📁 Full data saved in: ${logFilePath}`);
    
  } catch (error) {
    console.log('❌ Error reading submissions:', error.message);
  }
}

// Run the viewer
viewSubmissions();