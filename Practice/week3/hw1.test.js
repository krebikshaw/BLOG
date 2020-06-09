var manyStars = require('./hw1')

describe('好多星星測試',() => {
	it('n=1印出["*"]',() => {
		expect(manyStars(1)).toStrictEqual(["*"]);
	});
	it('n=3印出["*", "**", "***"]',() => {
		expect(manyStars(3)).toStrictEqual(["*", "**", "***"]);
	});
})