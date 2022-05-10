import nodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const { EMAIL_HOST, EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

export const transporter = nodeMailer.createTransport({
	host: EMAIL_HOST,
	port: 587,
	secure: false,
	auth: {
		user: EMAIL_USERNAME,
		pass: EMAIL_PASSWORD
	}
});
