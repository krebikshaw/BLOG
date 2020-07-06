/*
輸入值:20 [20]
輸出值:2  
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
	var number = Number(lines)
	var num = number.toString(2)
	var str = num.split('')
	var ans = 0
	for(var i=0; i<str.length; i++){
		if(str[i]==='1'){
			ans++
		}
	}
	console.log(ans)
}


/*any number n

n = 1 + 2 + 4 + 8 + 16 + .....

==> 1 + 10 + 100 + 1000 + 10000 + .........

把數字轉成2進位

再判斷有幾個1 */