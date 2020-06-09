/*
hw4: 判斷迴文
*/

function Palindrome(str){
	let str2 = ""
	for(let i=str.length-1; i>=0; i--){
		str2 += str[i]
	}
	if(str === str2) return true
	if(str !== str2) return false
}

module.exports = Palindrome

