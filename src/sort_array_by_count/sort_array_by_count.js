/**
 * Sort an array by the number of times each item occurs.
 *
 * Removes duplicate items.
 *
 * @param {array} items  An array of items.
 * @param {string} order The ordering algorithm.
 *
 * @returns {array} An array of unique items.
 */
export function sort_array_by_count(items, order = 'ASC') {
	if (!Array.isArray(items)) return [];
	if ('string' !== typeof order || '' === order.trim()) return [];

	const sorted = items.sort((a, b) => {
		const a_count = items.filter((c) => c === a).length;
		const b_count = items.filter((c) => c === b).length;
		return 'ASC' === order ? a_count - b_count : b_count - a_count;
	});
	return [...new Set(sorted)];
}
