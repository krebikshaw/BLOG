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
	for(let i=0; i<lines.length; i++){
		if(lines[i] == 0){
			break
		}else{
			arr.push(Number(lines[i]))
		}
	}
	for(let i=0; i<arr.length; i++){
		console.log(AmicableNumber(arr[i]))
	}	
}

function AmicableNumber(n){
	let m = factorSum(n)
	if( n == factorSum(m)){
		return m
	}else return 'QQ'
}

function factorSum(n){
	temp = []
	for(let i=1; i<n-1; i++){
		if( n%i == 0 ){
			temp.push(Number(i))
		}
	}
	let sum = 0
	for(let i=0; i<temp.length; i++){
		sum += temp[i]
	}
	return sum
}