var Palindrome = require('./hw4')

describe('Palindrome test', () => {
	it('abcba is true', () => {
		expect(Palindrome('abcba')).toBe(true)
	})
	it('apple is false', () => {
		expect(Palindrome('apple')).toBe(false)
	})
	it('aaaaa is true', () => {
		expect(Palindrome('aaaaa')).toBe(true)
	})
	it('applppa is true', () => {
		expect(Palindrome('applppa')).toBe(true)
	})
})