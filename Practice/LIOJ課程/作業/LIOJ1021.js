/*
輸入值: n
輸出值:*
*/


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

function solve(lines) {   //['5']
	for(var i=1; i<=Number(lines[0]); i++){
		let print = ''
		for(var j=1; j<=i; j++){
			print += '*'
		}
		console.log(print)
	}
}