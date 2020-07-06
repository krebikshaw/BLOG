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
	let drink1 = Number(lines[0])
	let drink2 = Number(lines[1])
	let maxPrice = 0
	let lostPrice = 0
	if(drink1 >= drink2){
		maxPrice = drink1*2
		lostPrice = maxPrice - ( drink1 + drink2 )
	}else if(drink1 < drink2){
		maxPrice = drink2*2
		lostPrice = maxPrice - ( drink1 + drink2 )
	}
	console.log(maxPrice)
	console.log(lostPrice)
}	

/*
最大飲料價值為：35 *2 = 70
損失值為：70 - (35 + 25) = 10
*/