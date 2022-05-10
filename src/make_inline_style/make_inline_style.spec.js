import { make_inline_style } from './make_inline_style';

describe('make_inline_style', () => {
	const datasets = {
		'should return an empty string with an empty `str`': {
			str: '',
			expected: ''
		},
		'should return an empty string with a non-string `str`': {
			str: ['.selector {\n\tcolor: #000;\n\tfont-weight: bold;\n}'],
			expected: ''
		},
		'should return inline CSS with semi-colons on each line': {
			str: '.selector {\n\tcolor: #000;\n\tfont-weight: bold;\n}',
			expected: '.selector {color:#000;font-weight:bold;}'
		},
		'should return inline CSS with no semi-colon on the last line': {
			str: '.selector {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector {color:#000;font-weight:bold}'
		},
		'should return inline CSS with multiple selectors': {
			str: '.selector-1, .selector-2 {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector-1, .selector-2 {color:#000;font-weight:bold}'
		},
		'should return inline CSS with multiple nested selectors': {
			str: '.selector-1 p, .selector-2 a {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector-1 p, .selector-2 a {color:#000;font-weight:bold}'
		},
		'should return inline CSS with a direct child selector': {
			str: '.selector > p {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector > p {color:#000;font-weight:bold}'
		},
		'should return inline CSS with a next sibling selector': {
			str: '.selector + p {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector + p {color:#000;font-weight:bold}'
		},
		'should return inline CSS with a general sibling selector': {
			str: '.selector ~ p {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector ~ p {color:#000;font-weight:bold}'
		},
		'should return inline CSS with a state selector': {
			str: '.selector:hover {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector:hover {color:#000;font-weight:bold}'
		},
		'should return inline CSS with a pseudo selector': {
			str: '.selector::after {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector::after {color:#000;font-weight:bold}'
		},
		'should return inline CSS with a container query': {
			str: '.selector:has(p) {\n\tcolor: #000;\n\tfont-weight: bold\n}',
			expected: '.selector:has(p) {color:#000;font-weight:bold}'
		},
		'should return inline CSS with a media query': {
			str: '@media (min-width: 40em) {\n\t.selector:has(p) {\n\t\tcolor: #000;\n\t\tfont-weight: bold\n\t}\n}',
			expected: '@media (min-width:40em) {.selector:has(p) {color:#000;font-weight:bold}}'
		}
	};

	for (const test in datasets) {
		const { str, expected } = datasets[test];

		it(test, () => {
			expect(make_inline_style(str)).toBe(expected);
		});
	}
});
