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
                          
function solve(lines) {     //['1991 11 7']
	let str = lines.join()
	let arr_Number = deleteSpace(str)
	let sum1 = 0
	let result = 0
	for(var i=0; i<arr_Number.length; i++){
		sum1 += Number(arr_Number[i])
	}	
	console.log(compression(sum1))
}



function deleteSpace(string){
	let arr = string.split('')
	for(var i=1; i<arr.length; i++){
		if(arr[i] === ' '){
			arr.splice(i, 1)
		}
	}
	return arr
}


function compression(n){
	let str = n.toString()
	let arr = str.split('')
	let sum = 0
	let result = 0
	for(var i=0; i<arr.length; i++){
		sum += Number(arr[i])
	}
	if(sum/10 < 1){
		return sum
	}
	if(sum/10 > 1){
		result = compression(sum)
	}
	return result
}


