/**
 * Return the key for a value in a map.
 *
 * Supports arrays, objects and array objects.
 *
 * @param {array|object} haystack The object to search in.
 * @param {mixed}        needle   The value to search for.
 *
 * @returns {int|string|false} The key if found, otherwise false.
 */
export function get_map_key(haystack, needle) {
	if (null === needle) return false;

	// Array.
	if (Array.isArray(haystack)) {
		const index = haystack.indexOf(needle);
		return -1 < index ? index : false;
	}

	// Array object.
	if (Array.isArray(Object.values(haystack)[0])) {
		return Object.keys(haystack).find((key) => haystack[key].includes(needle)) || false;
	}

	// Object.
	return Object.keys(haystack).find((key) => haystack[key] === needle) || false;
}
