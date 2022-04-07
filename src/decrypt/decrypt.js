import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

/**
 * Decrypt an encrypted string.
 *
 * @param {object} hash The initialization vector and encrypted string.
 * 
 * @returns {string} The unencrypted string.
 */
export function decrypt(hash) {
	const decipher = crypto.createDecipheriv(
		process.env['ENC_ALGORITHM'],
		process.env['ENC_SECRET_KEY'],
		Buffer.from(hash.iv, 'hex')
	);
	const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);
	return decrypted.toString();
}
