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

function solve(lines){
	let n = lines[0]
	console.log(parseInt(n, 9))
}



/*
function solve(lines) {
	let n = lines[0]
	let num = []
	for(let i=1; i<=n; i++){
		num.push(i+'')
	}
	let length = num.length
	let temp = 0
	for(let i=0; i<length; i++){
		let element = num[i].split('')
		for(let j=0; j<element.length; j++){
			if(Number(element[j]) === 9){
				temp ++
				break
			}
		}
	}
	console.log(n-temp)
}

把題目的n從1~n列成陣列
再把每一個元素單獨拉出來變成陣列檢查當中的每一個數字，只要任何一個含有9都扣除
*/
