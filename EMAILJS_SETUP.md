# EmailJS Setup Guide

## Overview
Your contact form is now integrated with EmailJS! This guide will help you set up your EmailJS account and configure the form to send emails.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Give your service a name (e.g., "Gmail")
6. Copy the **Service ID** (you'll need this later)

### 3. Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Choose "Blank Template"
4. Configure your template:

**Template Content Example:**
```
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your website contact form.
```

5. Save the template
6. Copy the **Template ID** (you'll need this later)

### 4. Get Your Public Key
1. Go to "Account" → "API Keys" in your dashboard
2. Copy your **Public Key**

### 5. Update Configuration
1. Open `src/config/emailjs.js`
2. Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'your_service_id_here',
  TEMPLATE_ID: 'your_template_id_here', 
  PUBLIC_KEY: 'your_public_key_here'
};
```

### 6. Test Your Form
1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email to see if the message was received
5. Check the browser console for any error messages

## Features Added

✅ **Form State Management**: The form now tracks input values and submission status
✅ **Loading States**: Button shows loading spinner while sending
✅ **Success/Error Messages**: User gets feedback on form submission
✅ **Form Reset**: Form clears after successful submission
✅ **Input Validation**: Required fields are validated
✅ **Responsive Design**: Works on all device sizes

## Troubleshooting

### Common Issues:

1. **"Service ID not found"**
   - Double-check your Service ID in the EmailJS dashboard
   - Make sure the service is active

2. **"Template ID not found"**
   - Verify your Template ID is correct
   - Ensure the template is published

3. **"Public Key invalid"**
   - Check your Public Key in the Account → API Keys section
   - Make sure you're using the Public Key, not the Private Key

4. **Form not sending emails**
   - Check browser console for error messages
   - Verify all credentials are correctly set in `src/config/emailjs.js`
   - Ensure your email service is properly configured

### Testing Tips:
- Use the browser's developer tools console to see detailed error messages
- Test with a simple message first
- Check your spam folder if emails aren't arriving

## Security Notes
- The Public Key is safe to use in client-side code
- Never expose your Private Key
- Consider rate limiting on your form to prevent spam

## Support
If you need help with EmailJS setup, check their documentation at [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/) 