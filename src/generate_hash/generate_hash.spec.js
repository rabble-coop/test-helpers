import { generate_hash } from './generate_hash';

describe('generate_hash', () => {
	const datasets = {
		'should return an empty string with a non-string `string`.': {
			string: ['filename.jpg'],
			expected: ''
		},
		'should return an empty string with an empty `string`.': {
			string: '',
			expected: ''
		},
		'should return an empty string with a `string` of only spaces.': {
			string: '        ',
			expected: ''
		},
		'should return 1388588442 for "filename.jpg".': {
			string: 'filename.jpg',
			expected: '1388588442'
		}
	};

	for (const test in datasets) {
		const { string, expected } = datasets[test];

		it(test, () => {
			expect(generate_hash(string)).toBe(expected);
		});
	}
});
