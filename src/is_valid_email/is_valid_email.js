/**
 * Checks if an email address is valid.
 * 
 * @param {string} email The email address to check.
 * 
 * @returns {bool} Whether or not the email address is valid.
 */
export function is_valid_email(email) {
	if (!email) return false;
	const re =
		/^(([^#<>()[\]\\.,;:\s@"]+(\.[^#<>()[\]\\.,;:\s@"]+)*)|(".+"))([^-])@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
