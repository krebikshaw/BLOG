var readline = require('readline');

var lines = []
var r1 = readline.createInterface({
	input: process.stdin
});

r1.on('line', function(line){
	lines.push(line)
});

r1.on('close', function(){
	solve(lines)
})

function solve(lines){
	var t = lines.join()
	console.log(340*t)
}