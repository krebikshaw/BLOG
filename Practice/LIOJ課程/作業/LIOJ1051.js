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
	let arr = lines[1].split(' ').map(Number)
	let count = 0
	for(let i=0; i<arr.length; i++){
		for(let j=i+1; j<arr.length; j++){
			if(arr[i]>arr[j]){
				count++
			}
		}
	}
	console.log(count)
}