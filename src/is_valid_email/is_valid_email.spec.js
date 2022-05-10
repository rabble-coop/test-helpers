import { is_valid_email } from './is_valid_email';

describe('is_valid_email', () => {
	const datasets = {
		'should return `false` with an empty `email`': {
			email: '',
			expected: false
		},
		'should return `false` with `email` as `0`': {
			email: 0,
			expected: false
		},
		'should return `false` with `email` as "0"': {
			email: '0',
			expected: false
		},
		'should return `false` with `email` as `false`': {
			email: false,
			expected: false
		},
		'should return `false` with "abc-@mail.com"': {
			email: 'abc-@mail.com',
			expected: false
		},
		'should return `false` with "abc..def@mail.com"': {
			email: 'abc..def@mail.com',
			expected: false
		},
		'should return `false` with ".abc@mail.com"': {
			email: '.abc@mail.com',
			expected: false
		},
		'should return `false` with "abc#def@mail.com"': {
			email: 'abc#def@mail.com',
			expected: false
		},
		'should return `false` with "abc.def@mail.c"': {
			email: 'abc.def@mail.c',
			expected: false
		},
		'should return `false` with "abc.def@mail#archive.com"': {
			email: 'abc.def@mail#archive.com',
			expected: false
		},
		'should return `false` with "abc.def@mail"': {
			email: 'abc.def@mail',
			expected: false
		},
		'should return `false` with "abc.def@mail..com"': {
			email: 'abc.def@mail..com',
			expected: false
		},
		'should return `true` with "me@example.org"': {
			email: 'me@example.org',
			expected: true
		},
		'should return `true` with "me@example.org.uk"': {
			email: 'me@example.org.uk',
			expected: true
		},
		'should return `true` with "abc-d@mail.com"': {
			email: 'abc-d@mail.com',
			expected: true
		},
		'should return `true` with "abc.def@mail.com"': {
			email: 'abc.def@mail.com',
			expected: true
		},
		'should return `true` with "abc@mail.com"': {
			email: 'abc@mail.com',
			expected: true
		},
		'should return `true` with "abc_def@mail.com"': {
			email: 'abc_def@mail.com',
			expected: true
		},
		'should return `true` with "abc.def@mail.cc"': {
			email: 'abc.def@mail.cc',
			expected: true
		},
		'should return `true` with "abc.def@mail-archive.com"': {
			email: 'abc.def@mail-archive.com',
			expected: true
		},
		'should return `true` with "abc.def@mail.org"': {
			email: 'abc.def@mail.org',
			expected: true
		}
	};

	for (const test in datasets) {
		const { email, expected } = datasets[test];

		it(test, () => {
			expect(is_valid_email(email)).toBe(expected);
		});
	}
});
