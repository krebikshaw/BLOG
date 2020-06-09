var transform = require('./hw2')

describe('transform 測試', () => {
	it('nick => NICK', () => {
		expect(transform('nick')).toStrictEqual('NICK')
	})
	it('NICK => nick', () => {
		expect(transform('NICK')).toStrictEqual('nick')
	})
	it('hEllO123 => HeLLo123', () => {
		expect(transform('hEllO123')).toStrictEqual('HeLLo123')
	})
})