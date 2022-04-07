/**
 * Collapse a multiline CSS string to a single line
 * for use as an inline style.
 *
 * @param {string} str A multiline string of CSS.
 *
 * @returns {string} A single line of CSS.
 */
export function make_inline_style(str) {
	if ('string' !== typeof str) return '';

	return str
		.split('\n')
		.map((s) => s.replace(': ', ':').trim())
		.join('');
}
