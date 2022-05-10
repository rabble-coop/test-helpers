import { format_date } from './format_date';

describe('format_date', () => {
	const datasets = {
		'should return an empty string with a `date` that is not a string or Date object.': {
			date: ['01/01/1970'],
			expected: ''
		},
		'should support a string `date`.': {
			date: '01/01/1970',
			expected: 'Thursday, 1 January 1970'
		},
		'should support a Date `date`.': {
			date: new Date('01/01/1970'),
			expected: 'Thursday, 1 January 1970'
		}
	};

	for (const test in datasets) {
		const { date, expected } = datasets[test];

		it(test, () => {
			expect(format_date(date)).toBe(expected);
		});
	}
});
