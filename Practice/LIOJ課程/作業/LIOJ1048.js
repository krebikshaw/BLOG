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
	let max = Number(lines[0])
	for(let i=0; i<lines.length; i++){
		let sum = 0
		for(let j=i+1; j<lines.length; j++){
			sum += Number(lines[j])
			if(sum > max){
				max = sum
			}
		}
	}
	console.log(max)
}


