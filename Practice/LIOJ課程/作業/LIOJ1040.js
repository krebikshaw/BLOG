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
	let separator = lines[0]
	let arr = lines.slice(2)
	console.log(join(arr, separator))
}

function join(arr, separator){
	let result = ''
	for(let i=0; i<arr.length-1; i++){
		result += arr[i]
		result += separator
	}
	result += arr[arr.length-1]
	return result
}