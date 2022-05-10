/**
 * Formats a date as "Monday, 1 January 2022".
 *
 * @param {string|Date} date The date to format.
 *
 * @returns {Date|false} The date formatted as "Monday, 1 January 2022".
 */
export function format_date(date) {
	if ('string' === typeof date) {
		date = new Date(date);
	}

	if (Object.prototype.toString.call(date) !== '[object Date]') {
		return '';
	}

	return date.toLocaleDateString('en-GB', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}
