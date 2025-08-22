# Indus River Group Website

## Contact Form Setup

The contact form supports two integration methods:

### 1. Email Integration via API

#### Setup Options:

**Option A: Gmail SMTP (Recommended for Google Workspace)**
1. Enable 2-factor authentication on your Google account
2. Generate an app-specific password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Create `.env.local` file with:
   ```
   GMAIL_USER=your-email@indusrivergroup.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   ```

**Option B: Gmail API (More secure)**
1. Enable Gmail API in Google Cloud Console
2. Create service account credentials
3. Install googleapis: `npm add googleapis`
4. Update `lib/email.ts` with API implementation

**Option C: Third-party Service**
- SendGrid, Resend, Mailgun, etc.
- Add API key to `.env.local`
- Update email service in `lib/email.ts`

### 2. Google Forms Integration

1. Create a Google Form at [forms.google.com](https://forms.google.com)
2. Add these fields:
   - Contact Type (dropdown): Business Owner, Investor, Intermediary, Other
   - Full Name (text)
   - Email Address (email)
   - Company/Organization (text)
   - Role/Title (text)
   - Message (paragraph)
3. Get the form URL and update `GOOGLE_FORM_URL` in `.env.local`
4. Update the iframe src in `app/contact/page.tsx`

### Current Status
- ✅ Frontend form with validation
- ✅ API endpoint created (`/api/contact`)
- ✅ Form submissions logged locally (email delivery optional)
- ⏳ Email service configuration (optional enhancement)
- ⏳ Google Form needs to be created and linked

### Next Steps
