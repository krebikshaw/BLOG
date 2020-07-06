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
	console.log(endsWith(lines[0], lines[1]))
}

function endsWith(str, searchString){
	for(let i=searchString.length-1; i>=0; i--){
		if(searchString[i] != str[i]){
			return false
		}
	}return true
}