import emailValidator from './emailValidator';

describe('email validator tests', function () {
	const testEmails = [
		['', ''],
		['test@example.com', ''],
		['test1945@test.com', ''],
		['test 1945@test.com', 'Wrong email format']
	];
	test.each(testEmails)('For email "%s" value should be "%s"', (email, expected) => {
		const value = emailValidator(email);
		expect(value).toBe(expected);
	});
});
