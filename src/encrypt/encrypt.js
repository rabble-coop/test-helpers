import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const iv = crypto.randomBytes(16);

/**
 * Encrypt a string.
 *
 * @param {string} text The string to encrypt.
 * 
 * @returns {object} The initialization vector and the encrypted string.
 */
export function encrypt(text) {
	const cipher = crypto.createCipheriv(process.env['ENC_ALGORITHM'], process.env['ENC_SECRET_KEY'], iv);
	const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

	return {
		iv: iv.toString('hex'),
		content: encrypted.toString('hex')
	};
}
