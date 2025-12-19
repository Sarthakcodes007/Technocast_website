# Enquiry Form Setup Guide

## Overview
The enquiry form saves submissions to a local SQLite database and sends email notifications via Gmail.

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Gmail (Optional - for email notifications)

The form will work without email configuration, but you won't receive email notifications.

#### Steps to set up Gmail:

1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "TechnoCast" as the name
   - Copy the generated 16-character password

3. **Create `.env.local` file** in the root directory:
   ```env
   GMAIL_EMAIL=your-email@gmail.com
   GMAIL_APP_PASSWORD=your-16-character-app-password
   RECIPIENT_EMAIL=your-email@gmail.com
   ```

   Note: Use the App Password, NOT your regular Gmail password.

### 3. Database

The database is automatically created in the `data/` directory when the first enquiry is submitted. The database file is `data/enquiries.db`.

### 4. View Enquiries

You can view all enquiries by:
- Accessing the database file directly using a SQLite browser
- Making a GET request to `/api/enquiries` (consider adding authentication for production)

### 5. Database Schema

```sql
CREATE TABLE enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Features

- ✅ Local SQLite database storage
- ✅ Gmail email notifications (optional)
- ✅ Form validation
- ✅ Success/error feedback
- ✅ Responsive design
- ✅ Dark theme matching website

## Troubleshooting

### Email not sending?
- Check that `.env.local` file exists and has correct credentials
- Verify App Password is correct (not regular password)
- Check server logs for error messages
- Note: Form will still save to database even if email fails

### Database errors?
- Ensure the `data/` directory has write permissions
- Check that better-sqlite3 installed correctly
- On Windows, you may need to rebuild native modules: `npm rebuild better-sqlite3`

## Production Deployment

For Vercel deployment:
1. SQLite databases don't persist on serverless functions
2. Consider migrating to a cloud database (PostgreSQL, MongoDB, etc.)
3. Update `lib/db.ts` to use your cloud database
4. Add environment variables in Vercel dashboard

