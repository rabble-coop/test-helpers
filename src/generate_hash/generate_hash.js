/**
 * Generates a numeric hash from the provided string.
 *
 * @param {string} string The string.
 *
 * @returns {string} The hash.
 */
export function generate_hash(string) {
	let hash = 0;

	if (!string || 'string' !== typeof string || '' === string.trim()) {
		return '';
	}

	for (let i = 0; i < string.length; i++) {
		const charCode = string.charCodeAt(i);
		hash = (hash << 7) - hash + charCode;
		hash = hash & hash;
	}

	return String(hash).replace('-', '');
}
