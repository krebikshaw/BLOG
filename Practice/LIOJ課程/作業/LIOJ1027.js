
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
                           //['0123456789012345678']
function solve(lines) {    //['5412-3456-7890-1232']
	let sum_odd = 0
	let sum_even = 0
	let temp = 0
	let result = ''
    let str = lines.join()
    let arr = str.split('')
    arr.splice(4, 1)
	arr.splice(8, 1)
    arr.splice(12, 1)      //['5','4','1','2','3','4','5','6','7','8','9','0','1','2','3','2']
    //處理基數
    for(var i=0; i<15; i+=2){
    	let dobble = Number(arr[i])*2
    	if(dobble>=10){
    		dobble = dobble-9
    	}
    	sum_odd += dobble
    }
    //處理偶數
    for(var j=1; j<14; j+=2){
    	sum_even += Number(arr[j])
    }
    //處理檢查碼
    let sum = sum_even + sum_odd
    let check = 10-(sum%10)
    if(check === 10){
    	check = 0
    }
    if(check === Number(arr[15]) && Number(arr[0]) === 5){	
		console.log('MASTER_CARD')
    }else if(check === Number(arr[15]) && Number(arr[0]) === 4){	
		console.log('VISA')
    }else{
    	console.log('INVALID')
    }
}







/*
  基數分別先*2
  判斷是否有大於等於10，有就-9
  接著就把他們相加起來
*/

/*
  偶數直接做相加
*/

/*
  將基數合加上偶數合，10-(結果除%10)判斷是否等於最後一個數字
*/

//結果判斷:若合格 輸出 VISA(4) 與MASTER_CARD(5) 若不合格 輸出INVALID	