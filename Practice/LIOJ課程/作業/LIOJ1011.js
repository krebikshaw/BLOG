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
	let arr = lines[1].split(' ').map(Number)
	let sum = 0
	for(let i=0; i<arr.length; i++){
		sum += arr[i]
	}
	let avg = sum/Number(lines[0])
	if(avg >= 183){
		console.log('real')
	}else console.log('fake')
}	