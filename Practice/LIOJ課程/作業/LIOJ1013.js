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
	console.log(f(n))
}

function f(n){
	if(n === 2) return 1
	if(n === 3) return 2
	return f(n-1)+f(n-2)
}

/*
第二層 1 種
第三層 2 種
第四層 = 第二層 + 第三層 = 1 + 2 = 3 種
之後每一層 都是前兩層答案的相加

設一個函式來遞迴
*/