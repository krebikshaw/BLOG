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
	let str = lines[0]
	let start = Number(lines[1])
	let end = Number(lines[2])
	console.log(slice(str, start, end))
}

function slice(str, beginIndex, endIndex){
	let result = ''
	for(let i=beginIndex; i<endIndex; i++){
		result += str[i]
	}
	return result
}