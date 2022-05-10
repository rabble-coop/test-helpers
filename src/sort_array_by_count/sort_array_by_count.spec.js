import { sort_array_by_count } from './sort_array_by_count';

describe('sort_array_by_count', () => {
	const datasets = {
		'should return an empty array with an empty `items` array': {
			items: [],
			order: 'ASC',
			expected: []
		},
		'should return an empty array with a non-array `items`': {
			items: {},
			order: 'ASC',
			expected: []
		},
		'should return an empty array with a non-string `order`': {
			items: ['hello', 'world', 'hello'],
			order: ['ASC'],
			expected: []
		},
		'should return an empty array with an empty `order`': {
			items: ['hello', 'world', 'hello'],
			order: '',
			expected: []
		},
		'should return an empty array with an `order` only of spaces': {
			items: ['hello', 'world', 'hello'],
			order: '    ',
			expected: []
		},
		'should return the correct ascending order for an array': {
			items: ['world', 'hello', 'hello'],
			order: 'ASC',
			expected: ['world', 'hello']
		},
		'should return the correct descending order for an array': {
			items: ['world', 'hello', 'hello'],
			order: 'DESC',
			expected: ['hello', 'world']
		},
		'should return items that appear the same number of times in the order they appear (ASC)': {
			items: ['world', 'hello', 'hello', 'hi', 'hi'],
			order: 'ASC',
			expected: ['world', 'hello', 'hi']
		},
		'should return items that appear the same number of times in the order they appear (DESC)': {
			items: ['world', 'hello', 'hello', 'hi', 'hi'],
			order: 'DESC',
			expected: ['hello', 'hi', 'world']
		}
	};

	for (const test in datasets) {
		const { items, order, expected } = datasets[test];

		it(test, () => {
			expect(sort_array_by_count(items, order)).toStrictEqual(expected);
		});
	}
});
