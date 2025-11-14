import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to escape HTML and prevent XSS attacks
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Helper function to validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Log for debugging
    console.log('Contact form submission:', { name, email, hasMessage: !!message });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing fields:', { name: !!name, email: !!email, message: !!message });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Validate field lengths to prevent abuse
    if (name.length > 100 || email.length > 254 || message.length > 5000) {
      return res.status(400).json({ error: 'Input exceeds maximum length' });
    }

    // Check if API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found in environment variables');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    // Send email using Resend with escaped HTML to prevent XSS
    console.log('Attempting to send email...');
    const data = await resend.emails.send({
      from: 'contact@codecs8.de',
      to: 'cs8.code@gmail.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${escapeHtml(name)}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Email sent successfully:', data);

    // Check if there was an error from Resend
    if (data.error) {
      console.error('Resend error:', data.error);
      return res.status(500).json({ error: 'Failed to send email', details: data.error });
    }

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
