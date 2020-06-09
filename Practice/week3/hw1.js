/*
hw1 好多星星
*/

function manyStars(n){
	var arr = []
	for(let i=0; i<n; i++){
		let temp = "*"
		for(let j=0; j<i; j++){
			temp += "*"
		}
		arr.push(temp)
	}
	return arr
}

module.exports = manyStars
