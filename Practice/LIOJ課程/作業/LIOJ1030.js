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
	let arr = []
	for(var i=(str.length - 1); i>=0; i--){
		arr.push(str[i])
	}
	let str_ret = ''
	for(var j=0; j<arr.length; j++){
		str_ret += arr[j]
	}
	if(str === str_ret){
		console.log('True')
	}else{
		console.log('False')
	}
}