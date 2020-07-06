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

function solve(lines) {
	let target = lines[0]
	let arr = lines.slice(2)
	let result = filter(arr, target)
	for(let i=0; i<result.length; i++){
		console.log(result[i])
	}
}

/*
callback此函式為一個斷言，
用於測試陣列中的每個元素。
回傳值為 true 時將當前的元素保留至新陣列中，若為 false 則不保留。
*/
function filter(arr, target){
	let result = []
	for(let i=0; i<arr.length; i++){
		if(arr[i] != target){
			result.push(arr[i])
		}
	}
	return result
}


