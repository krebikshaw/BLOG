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
	let arr = []
	for(let i=1; i<=lines[0]; i++){
		arr.push(lines[i].split(' '))
	}
// arr = [ [ 'Nick', '8' ], [ 'Peter', '5' ], [ 'Nic', '100' ] ]
	let max = Number(arr[0][1])
	let index = []
	for(let i=0; i<arr.length; i++){
		if(Number(arr[i][1]) > max){
			max = Number(arr[i][1])
			index.splice(0,1,i)
		}else if(Number(arr[i][1]) == max){
			index.push(i)
		}
	}
	for(let i=0; i<index.length; i++){
		console.log(arr[index[i]][0])
	}
}