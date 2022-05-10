import { get_map_key } from './get_map_key';

describe('get_map_key', () => {
	const datasets = {
		'should return `false` with an empty `haystack` array': {
			haystack: [],
			needle: 'hello',
			expected: false
		},
		'should return `false` with an empty `haystack` array object': {
			haystack: { first: [] },
			needle: 'hello',
			expected: false
		},
		'should return `false` with an empty `haystack` object': {
			haystack: {},
			needle: 'hello',
			expected: false
		},
		'should return `false` with no `needle`': {
			haystack: ['hello'],
			needle: null,
			expected: false
		},
		'should return `false` with a non-string `needle`': {
			haystack: ['hello'],
			needle: ['hello'],
			expected: false
		},
		'should return "1" with `needle` in the second index of a `haystack` array': {
			haystack: ['hello', 'world', 'goodbye'],
			needle: 'world',
			expected: 1
		},
		'should return "second" with `needle` in the second index of a `haystack` array object': {
			haystack: { first: ['hello', 'world'], second: ['hi', 'globe'], third: ['goodbye', 'globe'] },
			needle: 'hi',
			expected: 'second'
		},
		'should return "second" with `needle` in the second index of a `haystack` object': {
			haystack: { first: 'hello', second: 'world', third: 'hi' },
			needle: 'world',
			expected: 'second'
		},
		'should return the correct index despite a partial match in a `haystack` array': {
			haystack: ['good', 'goodbye', 'world'],
			needle: 'goodbye',
			expected: 1
		},
		'should return the correct index despite a partial match in a `haystack` array object': {
			haystack: { first: ['good'], second: ['goodbye'], third: ['world'] },
			needle: 'goodbye',
			expected: 'second'
		},
		'should return the correct index despite a partial match in a `haystack` object': {
			haystack: { first: 'good', second: 'goodbye', third: 'world' },
			needle: 'goodbye',
			expected: 'second'
		}
	};

	for (const test in datasets) {
		const { haystack, needle, expected } = datasets[test];

		it(test, () => {
			expect(get_map_key(haystack, needle)).toBe(expected);
		});
	}
});
