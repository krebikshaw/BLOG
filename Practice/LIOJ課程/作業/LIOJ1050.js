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
	let target = lines[0].split(' ').map(Number)[1]
	let arr = lines.slice(1).join().split(' ').map(Number)
	let index1 = null
	let index2 = null
	for(let i=0; i<arr.length; i++){
		for(let j=i+1; j<arr.length; j++){
			if(arr[i] + arr[j] === target){
				index1 = i
				index2 = j
			}
		}
	}
	console.log(index1, index2)
}