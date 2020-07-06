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
	console.log(toLowerCase(lines[0]))
}

function toLowerCase(str){
	let result = ''
	for(let i=0; i<str.length; i++){
		if(str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90){
			result += String.fromCharCode(str[i].charCodeAt() + 32)
		}else{
			result += str[i]
		}
	}
	return result
}