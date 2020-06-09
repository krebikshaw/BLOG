var add = require('./hw5')

describe('add test', () => {
	it('123+456=579', () => {
		expect(add(123,456)).toBe(579)
	})
})