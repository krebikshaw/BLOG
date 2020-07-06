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
	for(let i=1; i<=100; i++){
		arr[i]=0
	}
	for(let i=1; i<lines.length; i++){
		let n = Number(lines[i])
		arr[n]++
	}
	for(let i=0; i<arr.length; i++){
		for(let j=0; j<arr[i].length; j++){
			console.log(i)
		}
	}	
}






