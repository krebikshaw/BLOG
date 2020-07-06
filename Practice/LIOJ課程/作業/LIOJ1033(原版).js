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
	let arr_org = lines.slice(1)
	let min_dis = Infinity
	let filt = [0, 1]
	for(var i=0; i<arr_org.length; i++){
		for(var j=0; j<arr_org.length;j++){
			if(i != j && Number(dis(arr_org[i],arr_org[j])) < min_dis){
				min_dis = Number(dis(arr_org[i],arr_org[j]))
				filt.splice(0, 2, arr_org[i], arr_org[j])
			}
		}
	}
	console.log(filter(filt)[0])
	console.log(filter(filt)[1])   
}



function dis(str1, str2){
	let arr1 = str1.split(' ')
	let arr2 = str2.split(' ')
	let x1 = Number(arr1[0])
	let y1 = Number(arr1[1])
	let x2 = Number(arr2[0])
	let y2 = Number(arr2[1])
	let dis = 0
	dis = Math.sqrt(((x1-x2)**2)+((y1-y2)**2)).toFixed(2)
	return dis
}

function filter(arr){   
	let str1 = arr[0]
	let str2 = arr[1]
	let array = []
	if(str1[0] < str2[0]){
		array.push(arr[0])
		array.push(arr[1])
	}else if(str1[0] > str2[0]){
		array.push(arr[1])
		array.push(arr[0])
	}else if(str1[0] === str2[0] && str1[2] < str2[2]){
		array.push(arr[0])
		array.push(arr[1])
	}else if(str1[0] === str2[0] && str1[2] > str2[2]){
		array.push(arr[1])
		array.push(arr[0])
	}else if(str1[0] === str2[0] && str1[2] === str2[2]){
		array.push(arr[0])
		array.push(arr[1])
	}
	return array
}





