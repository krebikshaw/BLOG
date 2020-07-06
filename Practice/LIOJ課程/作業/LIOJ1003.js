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
	let n = Number(lines[0])
	let str = ''
	for(let i=1; i<=lines[0]; i++){
		str += lines[i]
	}
	let arr = str.split('')
	let m = Number(lines[n+1])
	let result = ''
	for(let i=n+2; i<=n+m+1; i++){
		let index = (lines[i]-1)
		result += str[index]
	}
	console.log(result)
}
