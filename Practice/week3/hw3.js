/*
hw3:判斷質數
*/

function PrimeNumber(n){
	if(n === 2){
		return true
	}
	let temp = 0
	for(let i=2; i<n; i++){
		if(n%i===0){
			temp++
			return false
		}
	}
	if(temp === 0){
		return true
	}
}

module.exports = PrimeNumber