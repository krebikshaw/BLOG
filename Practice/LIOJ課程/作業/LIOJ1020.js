/*
輸入值:n 數字
輸出值:Prime Composite
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

function solve(lines) {
//流程一:將輸入值分類
	let n = lines[0]
	let temp = 0
//流程二:設一個迴圈從第一個數判斷到第n個數
	for(var i=1; i<=n; i++){
		temp = 0
		if(Number(lines[i])===1){
			console.log('Composite')
			temp = 1
		}
//流程三:設一個迴圈從1開始除以該數字
		for(var j=2; j<Number(lines[i]); j++){
//流程四:設判斷條件判斷是不是質數
			if(Number(lines[i])%j===0){
				console.log('Composite')
				temp = 1
				break
			}
		}
		if(temp ===  0){
			console.log('Prime')
		}
	}	
}







