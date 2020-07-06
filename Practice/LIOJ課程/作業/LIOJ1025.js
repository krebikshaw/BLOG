/*
輸入值: N M 
輸出值: n
*/

var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {    //主架構:印出判斷為水仙花的數字
	var string = lines.join()
	var array = string.split(' ')
	var N = array[0]
	var M = array[1]
	for(var i=Number(N); i<=Number(M); i++){
		if(narcissistic(i)){
			console.log(i)
		}
	}
}

function narcissistic(n){   //函式:判斷是否為水仙花數
	var string = n.toString()
	var array = string.split('')
	let left = 0
	let right = 0
	for(var i=0; i<array.length; i++){
		left += power(Number(array[i]), array.length)
	}
	if(left === n){
		return true
	}
}

function power(n, t){   //函式:可進行n次方的函式
	var ans = n
	for(var i=1; i<t; i++){
		ans = ans*n
	}
	return ans
}

