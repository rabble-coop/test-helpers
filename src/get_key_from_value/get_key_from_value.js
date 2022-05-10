/**
 * Return the array key for a value in an object array.
 *
 * @param {array}  haystack The array to search in.
 * @param {mixed}  needle   The value to search for.
 * @param {string} sub_key  The sub-key to search in.
 *
 * @returns {int|false} The key if found, otherwise false.
 */
export function get_key_from_value(haystack, needle, sub_key) {
	if (!haystack || !needle || !sub_key) return false;
	if (!Array.isArray(haystack) || 'string' !== typeof sub_key) return false;

	const result = Object.keys(haystack).find((key) => haystack[key][sub_key] === needle);
	return result ? parseInt(result) : false;
}
