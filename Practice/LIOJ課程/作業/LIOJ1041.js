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
	console.log(trim(lines[0]))
}

function trim(str){
	let result = ''
	let index = null
	for(let i=0; i<str.length; i++){
		if(str[i] != 0){
			result += str[i]
			index = i
			break
		}
	}
	for(let i=index+1; i<str.length; i++){
		result += str[i]
	}
	return result
}

