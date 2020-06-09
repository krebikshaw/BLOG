var PrimeNumber = require('./hw3')

describe('Whether is prime number or not?', () => {
	it('n=2 is true', () => {
		expect(PrimeNumber(2)).toBe(true)
	})
	it('n=3 is true', () => {
		expect(PrimeNumber(3)).toBe(true)
	})
	it('n=10 is false', () => {
		expect(PrimeNumber(10)).toBe(false)
	})
	it('n=37 is true', () => {
		expect(PrimeNumber(37)).toBe(true)
	})
	it('n=38 is false', () => {
		expect(PrimeNumber(38)).toBe(false)
	})
})