import nodemailer from 'nodemailer';

interface EnquiryData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

// Create transporter using Gmail
// Note: You'll need to set up environment variables for Gmail credentials
export function createTransporter() {
  const email = process.env.GMAIL_EMAIL;
  const password = process.env.GMAIL_APP_PASSWORD; // Use App Password, not regular password

  if (!email || !password) {
    console.warn('Gmail credentials not configured. Email functionality will be disabled.');
    return null;
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password,
    },
  });
}

export async function sendEnquiryEmail(data: EnquiryData): Promise<boolean> {
  const transporter = createTransporter();
  
  if (!transporter) {
    console.log('Email transporter not available. Skipping email send.');
    return false;
  }

  const recipientEmail = process.env.RECIPIENT_EMAIL || process.env.GMAIL_EMAIL;

  if (!recipientEmail) {
    console.warn('No recipient email configured.');
    return false;
  }

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: recipientEmail,
    subject: `New Enquiry from TechnoCast: ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New Enquiry from TechnoCast Website</h2>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        </div>
        
        <div style="margin: 20px 0;">
          <h3 style="color: #333;">Message:</h3>
          <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <p style="color: #666; font-size: 12px; margin-top: 30px;">
          This enquiry was submitted through the TechnoCast website contact form.
        </p>
      </div>
    `,
    replyTo: data.email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

