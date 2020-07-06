/*
輸入:3
     1 2 1
     1 2 -1
     2 2 1
輸出:A or B or DRAW
*/


//  lines = [ '3', '1 2 1', '1 2 -1', '2 2 1'] 
//  line = lines.split(',')    // ['3'], ['1 2 1'], ['1 2 -1'] 
//  line[0] 是我要玩幾次
//  line[i] 是目前玩到第幾次

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

function solve(lines) {     // [ '3', '1 2 1', '1 2 -1', '2 2 1'] 
    var ntimes = lines[0]  //3
    for(var j=1; j<=ntimes; j++){
		var arr = lines[j].split(' ') //['1', '2', '1']
		var str1 = arr[0]     //'1'
		var str2 = arr[1]	  //'2'	
		var str3 = arr[2]     //'1'
		var arr1 = str1.split('')
		var arr2 = str2.split('')

		if(str3 === '1'){		                  //比大
	    	if(arr1.length > arr2.length){
	    		console.log('A')
	    	}else if(arr1.length < arr2.length){
	    		console.log('B')
	    	}else if(arr1.length == arr2.length){
	    		for(var i=0; i<arr1.length; i++){
	    			var temp = ''
	    			if(arr1[i] > arr2[i]){
	    				console.log('A')
	    				temp = 1
	    				break
					}else if(arr1[i] < arr2[i]){
						console.log('B')
						temp = 1
	    				break
					}
	    		}
				if(temp != 1){
					console.log('DRAW')
				}
	    	}
		}else if(str3 === '-1'){                   //比小
			    	if(arr1.length < arr2.length){
	    		console.log('A')
	    	}else if(arr1.length > arr2.length){
	    		console.log('B')
	    	}else if(arr1.length == arr2.length){
	    		for(var i=0; i<arr1.length; i++){
	    			var temp = ''
	    			if(arr1[i] < arr2[i]){
	    				console.log('A')
	    				temp = 1
	    				break
					}else if(arr1[i] > arr2[i]){
						console.log('B')
						temp = 1
	    				break
					}
					
	    		}
	    		if(temp != 1){
						console.log('DRAW')
				}
	    	}
		}
	}
}


/*
先判斷題目要比大還是比小

把數字先轉成陣列   [1,5,4,8,6,6,4,4,5,6,3,1,3,5,][4,5,2,5,4,5,5,2,3,5]

陣列長度較長的一定比較大(題目設定必為正數)

若陣列長度相同則依照第一位比下來 arr[0] arr[1]......
*/