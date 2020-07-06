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
	let str = lines.join()
	let arr = str.split(' ')
	if(arr[1] === '+'){
		console.log(Number(arr[0])+Number(arr[2]))
	}else if(arr[1] === '-'){
		console.log(Number(arr[0])-Number(arr[2]))
	}else if(arr[1] === '*'){
		console.log(Number(arr[0])*Number(arr[2]))
	}else if(arr[1] === '/'){
		console.log(Number(arr[0])/Number(arr[2]))
	}
}