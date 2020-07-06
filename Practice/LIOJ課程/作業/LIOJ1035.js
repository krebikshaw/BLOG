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
	let arr = lines.slice(1)
	arr.sort(function(a, b){
		return a - b
	})
	for(let i=0; i<arr.length; i++){
		console.log(arr[i])
	}
}






