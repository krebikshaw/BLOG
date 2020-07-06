/*
輸入值:['5','2 4 8 16 32']
輸出值:yes no
*/

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

function solve(lines) {     //['5','2 4 8 16 32']
	let str = lines[1]
	let arr = str.split(' ')   //['2','4','8','16','32']
	let temp = 0
	let temp1 = arr[1] / arr[0]
	let temp3 = 0
	for(var i=1; i<arr.length; i++){
		temp = arr[i] / arr[(i-1)] 
		if(temp != temp1){
			console.log('No')
			temp3++
			break
		}
	}
	if(temp3 === 0){
		console.log('Yes')
	}
}