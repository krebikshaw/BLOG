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
	let temp = 0
	let i = 1
	do{
		temp += i*i
		i++
	}while( (i*i)<Number(lines[0]) )
	console.log(temp)
}
