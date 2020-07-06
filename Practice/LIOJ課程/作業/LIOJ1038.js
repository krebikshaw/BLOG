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
	let target = lines[0]
	let arr = lines.slice(2)
	console.log(indexOf(arr, target))
}


function indexOf(arr, target){
	for(var i=0; i<arr.length; i++){
		if(arr[i] === target){
			return i
		}
	}	
	return -1
}