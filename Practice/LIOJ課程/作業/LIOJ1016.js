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
	let count_A = 0
	let count_B = 0
	let temp_A = []
	let temp_B = []
	for(let i=1; i<lines.length; i++){
		if(lines[i] === 'A'){ 
			count_A++
			temp_A.push(i)
		}else if(lines[i] === 'B'){
			count_B++
			temp_B.push(i)
		}	
	}
	if(count_A === 0 || count_B === 0){
		console.log('PEACE')
	}else if(count_A < count_B){
		for(let i=0; i<temp_A.length; i++){
			console.log(temp_A[i])
		}
	}else if(count_A > count_B){
		for(let i=0; i<temp_B.length; i++){
			console.log(temp_B[i])
		}	
	}else console.log('PEACE')
}