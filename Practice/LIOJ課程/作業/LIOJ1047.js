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
	let firstLine = lines[0].split(' ')
	let N = Number(firstLine[0])
	let M = Number(firstLine[1])
	let N_element = lines.slice(1,N+1)
	let M_element = lines.slice(N+1)
	let result = []
	for(let i=0; i<M_element.length; i++){
		let temp = 0
		for(let j=0; j<N_element.length; j++){
			if(M_element[i] === N_element[j]){
				result.push(j)
				temp++
				break
			}
		}
		if(temp === 0){
			result.push(-1)
		}
	}
	for(let i=0; i<result.length; i++){
		console.log(result[i])
	}	
}
