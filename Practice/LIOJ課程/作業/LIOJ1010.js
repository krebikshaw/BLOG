//這題的題目，預設的數字太大了，高達2的21次方。導致不能使用一般的數字變數去解


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
	//console.log(lines)
	var str = lines.join()
	var arr = str.split(' ')
	//console.log(arr)
	var str1 = arr[0]
	var str2 = arr[1]
	var arr1 = str1.split('')
	var arr2 = str2.split('')
	//console.log(arr1)
	//console.log(arr2)
	if(arr1.length === arr2.length){                         //判斷位數相等
		var temp = 0
		for(var i=0; i<arr1.length; i++){ 				     //一個一個比較
			if(arr1[i] != arr2[i]){
				console.log('No')
				temp = 1
				break
			}
		}
		if(temp === 0){
			console.log('Yes')
		}
	}else{                        //判斷位數不同
		console.log('No')
	}

}