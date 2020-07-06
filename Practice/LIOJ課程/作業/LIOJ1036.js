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
	let array = lines.slice(1)
	let ans = array.reverse()	
	for(let i=0; i<ans.length; i++){
		console.log(ans[i])
	}
}


function reverse(arr){
	let result = []
	for(let i=arr.length; i>0; i--){
		result.push(arr[i])
	}
	return result
}