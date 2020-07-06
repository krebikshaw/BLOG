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
	let countOfEachState = []
	for(let i=0; i<=1000; i++){
		countOfEachState[i] = 0
	}
	let arr = lines[1].split(' ').map(Number)
	for(let i=0; i<arr.length; i++){
		let n = arr[i]
		countOfEachState[n]++
	}
	let max = 0
	for(let i=0; i<=1000; i++){
		if(countOfEachState[i] > max){
			max = countOfEachState[i]
		}
	}
	console.log(max)
}