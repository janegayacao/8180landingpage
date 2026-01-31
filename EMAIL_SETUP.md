# Email Setup Guide for Contact Forms

Your contact forms are now configured to send emails using **EmailJS**. Follow these steps to enable the email functionality:

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.) or use EmailJS's SMTP service
4. Follow the setup instructions for your provider
5. Copy your **Service ID** (looks like: `service_xxxxxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:

**Template Name:** `contact_form`

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Email Content (HTML):**
```html
<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Company:</strong> {{company}}</p>
<p><strong>Phone:</strong> {{phone}}</p>
<p><strong>Preferred Date:</strong> {{preferredDate}}</p>
<p><strong>Project Type:</strong> {{project}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p>This message was sent from your 8180 Studio website.</p>
```

4. Copy your **Template ID** (looks like: `template_xxxxxxxx`)

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to **Account**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxxxxxx`)

## Step 5: Update Environment Variables

Edit the `.env.local` file in your project root and fill in:

```
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
# Preferred: comma-separated list for multiple inboxes
VITE_CONTACT_EMAILS=jane@8180.studio, maya@8180.studio, jess@8180.studio, dj@8180.studio
# Fallback single email (used only if VITE_CONTACT_EMAILS is not set)
VITE_CONTACT_EMAIL=your-email@8180.studio
```

## Step 6: Test Your Forms

1. Run `npm run dev`
2. Fill out the contact form on your website
3. You should receive an email at your configured email address

## Important Notes

- ⚠️ **Do NOT commit `.env.local` to git** - it contains sensitive credentials
- The `.env.local` file should only exist on your local machine
- For production/GitHub Pages, you'll need to configure environment variables in GitHub Actions or use a different approach
- Free EmailJS tier: 200 emails/month (sufficient for most sites)

## Production Deployment Note

To deploy emails to GitHub Pages, consider these options:

1. **EmailJS** (Current setup) - Works with client-side keys, no backend needed
2. **Netlify Forms** - If you host on Netlify instead
3. **Backend Service** - Create a simple Node.js backend for more security

For now, the EmailJS setup will work as long as your public key is configured, which is safe to expose.
