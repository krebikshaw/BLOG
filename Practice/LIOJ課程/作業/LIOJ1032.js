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
	let arrX = []
	let i = 0
	do{
		arrX.push(arr_org.slice(i, i+4))
		i+=4
	}while(i<4*Number(lines[0]))
	let ans = 0
	for(var j=0; j<arrX.length; j++){
		ans = dis(arrX[j][0],arrX[j][1],arrX[j][2],arrX[j][3])
		console.log(ans)
	}
}	


function dis(a,b,c,d){
	let x1 = Number(a)
	let y1 = Number(b)
	let x2 = Number(c)
	let y2 = Number(d)	
	let dis = 0
	dis = Math.sqrt(((x1-x2)**2)+((y1-y2)**2)).toFixed(2)
	return dis
}








/*
let a = 5
let ans = Math.sqrt(a)
let ans1 = Math.sqrt(a).toFixed(2)
console.log(ans)
console.log(ans1)
*/