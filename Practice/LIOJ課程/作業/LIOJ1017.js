/*
輸入: C N Pi
輸出: n
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

function solve(lines) {   //['3','5','1','3','5','7','9']
//流程零:將輸入值做分類
	let C = lines[0]
	let N = lines[1]
	let C1 = C
//流程一:先判斷C是否大於N，是的話就讓C=N
	if(Number(C)>Number(N)){
		C1 = N
	}
//流程二:將N個P從小到大排序
	let P = lines.slice(2)
	P.sort(function(a,b){
		return b-a
	})
//流程三:將排序後的P找出前C個數字相加
	let ans = 0
	for(var i=0; i<C1; i++){
		ans += Number(P[i])
	}
	console.log(ans)
}















/*
C代表小偷最多帶走多少
N代表店裡共有多少
P代表分別的價值

規則一:最後的答案是由P當中找出前C大的相加(小偷能拿三個，代表拿錢三值錢的)
規則二:C不可以大於N (偷走的數量不能比店裡有的東西多) <= 這應該可以一開始就判斷
規則三:P的數量會等於N (可設定P迴圈的終止條件)
*/