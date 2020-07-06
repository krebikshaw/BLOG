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
	let result = fill(arr, target)
	for(let i=0; i<result.length; i++){
		console.log(result[i])
	}
}


function fill(arr, value){
	let result = []
	for(let i=0; i<arr.length; i++){
		result.push(value)
	}
	return result
}