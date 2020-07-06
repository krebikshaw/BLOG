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
	let n = Number(lines[0])
	let arr = lines[1].split('')	
    console.log(shift(arr, n))
}

function shift(arr, n){
	let ans = ''
	for(let i=0; i<arr.length; i++){
		let code = arr[i].charCodeAt()
		ans += String.fromCharCode(filter(code, n))
	}
	return ans
}

//位數處理  0<=n<=100

function filter(code, n){
	let code_final = code + n
	if(code_final > 122){
		do{
			code_final -= 26
		}while(code_final>122)
	}
	return code_final
}