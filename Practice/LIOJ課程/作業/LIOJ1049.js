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
	let x_member = lines[1].split(' ').map(Number)
	let y_member = lines[2].split(' ').map(Number)
	let min = Infinity
	let distant = null
	for(let i=0; i<x_member.length; i++){
		for(let j=0; j<y_member.length; j++){
			distant = Math.abs( 
				x_member[i]-y_member[j]
			)
			if(distant < min){
				min = distant
			}
		}
	}
	console.log(min)
}