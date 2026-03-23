import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const { name, email, phone, message, projectType } = await request.json();

	// Validate required fields
	if (!name || !email || !message) {
		return json({ error: 'Name, email, and message are required.' }, { status: 400 });
	}

	const smtpHost = process.env.SMTP_HOST;
	const smtpPort = parseInt(process.env.SMTP_PORT ?? '587');
	const smtpUser = process.env.SMTP_USER;
	const smtpPass = process.env.SMTP_PASS;
	const contactEmail = process.env.CONTACT_EMAIL;

	if (!smtpHost || !smtpUser || !smtpPass || !contactEmail) {
		console.error('SMTP environment variables not configured.');
		return json({ error: 'Server email configuration error.' }, { status: 500 });
	}

	const transporter = nodemailer.createTransport({
		host: smtpHost,
		port: smtpPort,
		secure: smtpPort === 465,
		auth: {
			user: smtpUser,
			pass: smtpPass
		}
	});

	try {
		await transporter.sendMail({
			from: `"Baseline Cabinetry Website" <${smtpUser}>`,
			to: contactEmail,
			replyTo: `"${name}" <${email}>`,
			subject: `New Quote Request from ${name}`,
			text: `
Name: ${name}
Email: ${email}
Phone: ${phone ?? 'Not provided'}
Project Type: ${projectType ?? 'Not specified'}

Message:
${message}
			`.trim(),
			html: `
<h2>New Quote Request</h2>
<table style="border-collapse:collapse;font-family:sans-serif">
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Name:</td><td>${name}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Phone:</td><td>${phone ?? 'Not provided'}</td></tr>
  <tr><td style="padding:4px 12px 4px 0;font-weight:bold">Project Type:</td><td>${projectType ?? 'Not specified'}</td></tr>
</table>
<h3>Message:</h3>
<p style="white-space:pre-wrap">${message}</p>
			`.trim()
		});

		return json({ success: true });
	} catch (err) {
		console.error('Failed to send email:', err);
		return json({ error: 'Failed to send message. Please try again later.' }, { status: 500 });
	}
};
