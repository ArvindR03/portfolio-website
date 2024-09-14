import { EMAIL } from '@/lib/constants';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import ContactEmail from '@/emails/ContactEmail';

const rateLimit = new Map<string, number>();

export async function POST(request: Request) {
  const { name, email, message } = await request.json();
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr') || '';

  // Rate limiting logic
  const currentTime = Date.now();
  const lastRequestTime = rateLimit.get(ip);

  if (lastRequestTime && currentTime - lastRequestTime < 60000) {
    return NextResponse.json({ message: 'Rate limit exceeded. Please try again later.' }, { status: 429 });
  }

  rateLimit.set(ip, currentTime);

  // Render the email template
  const emailHtml = await render(<ContactEmail name={name} email={email} message={message} />);

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.RECIPIENT_EMAIL_USER, // Send to  email address
    subject: `${name} contacted you from your portfolio website!`,
    html: emailHtml,
  };

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
        user: process.env.SENDER_EMAIL_USER, // Your sender email address
        pass: process.env.SENDER_EMAIL_PASS, // Your sender email password
        },
    });

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
}