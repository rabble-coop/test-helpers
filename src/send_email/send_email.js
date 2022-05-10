import { transporter } from '../transporter';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Send an email using a Nodemailer transporter.
 *
 * Includes minor error handling.
 *
 * @param {string} to          The recipient(s).
 * @param {string} subject     The subject of the email.
 * @param {string} body        The HTML body of the email.
 * @param {array}  attachments An array of attachment data.
 *
 * @returns {Promise|object} The promise if successful, otherwise an empty object.
 */
export async function send_email(to, subject, body, attachments = null) {
	try {
		const { EMAIL_FROM_NAME, EMAIL_FROM } = process.env;
		const from = EMAIL_FROM_NAME ? `${EMAIL_FROM_NAME} <${EMAIL_FROM}>` : EMAIL_FROM;
		const options = {
			from: from,
			replyTo: from,
			to: [to],
			subject: subject,
			html: body
		};

		if (attachments) {
			options.attachments = attachments;
		}

		let info = await transporter.sendMail(options);
		return info || {};
	} catch (err) {
		console.log(err);
	}
}
