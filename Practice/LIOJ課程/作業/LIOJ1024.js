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
	for(var i=1; i<=Number(lines[0]); i++){
		for(var j=1; j<=Number(lines[1]); j++){
			console.log(i+'*'+j+'='+i*j)
		}
	}
}