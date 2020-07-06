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
	let result = ''
	let length = str.length
	for(let i=length-1; i>=0; i--){
		result += str[i]
	}
	console.log(result)
}
