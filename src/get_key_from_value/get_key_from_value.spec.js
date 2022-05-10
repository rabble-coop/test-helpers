import { get_key_from_value } from './get_key_from_value';

describe('get_key_from_value', () => {
	const datasets = {
		'should return `false` with an empty `haystack` array': {
			haystack: [],
			needle: 'hello',
			sub_key: 'world',
			expected: false
		},
		'should return `false` with a non-array `haystack`': {
			haystack: { test: 'data' },
			needle: 'hello',
			sub_key: 'world',
			expected: false
		},
		'should return `false` with no `haystack`': {
			haystack: null,
			needle: 'hello',
			sub_key: 'world',
			expected: false
		},
		'should return `false` with no `needle`': {
			haystack: [{ test: 'data' }],
			needle: null,
			sub_key: 'world',
			expected: false
		},
		'should return `false` with no `sub_key`': {
			haystack: [{ test: 'data' }],
			needle: 'hello',
			sub_key: null,
			expected: false
		},
		'should return `false` with a non-string `sub_key`': {
			haystack: [{ test: 'data' }],
			needle: 'hello',
			sub_key: [],
			expected: false
		},
		'should return `0` with a needle in the first key': {
			haystack: [{ message: 'Hello, world!' }, { message: 'Hi there!' }, { message: 'Howdy!' }],
			needle: 'Hello, world!',
			sub_key: 'message',
			expected: 0
		},
		'should return `1` with a needle in the second key': {
			haystack: [{ message: 'Hello, world!' }, { message: 'Hi there!' }, { message: 'Howdy!' }],
			needle: 'Hi there!',
			sub_key: 'message',
			expected: 1
		},
		'should return the first occurrence of the needle': {
			haystack: [
				{ message: 'Hello, world!' },
				{ message: 'Hi there!' },
				{ message: 'Howdy!' },
				{ message: 'Tally ho!' },
				{ message: 'Tally ho!' }
			],
			needle: 'Tally ho!',
			sub_key: 'message',
			expected: 3
		}
	};

	for (const test in datasets) {
		const { haystack, needle, sub_key, expected } = datasets[test];

		it(test, () => {
			expect(get_key_from_value(haystack, needle, sub_key)).toBe(expected);
		});
	}
});
