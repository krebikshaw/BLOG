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
	let dots = []
	for(let i=1; i<lines.length; i++){
		let temp = lines[i].split(' ')
		dots.push({
			x: Number(temp[0]),
			y: Number(temp[1])
		})
	}
	let min = Infinity
	let ans = null
	for(let i=0; i<dots.length; i++){
		for(let j=i+1; j<dots.length; j++){
			let dis = distance(
				dots[i].x, dots[i].y, dots[j].x, dots[j].y
			)
			if(dis < min){
				min = dis
				ans = {
					x1: dots[i].x,
					y1: dots[i].y,
					x2: dots[j].x,
					y2: dots[j].y
				}
			}
		}
	}
	if(ans.x1 > ans.x2){
		console.log(ans.x2+' '+ans.y2)
		console.log(ans.x1+' '+ans.y1)
	}else if(ans.x1 < ans.x2){
		console.log(ans.x1+' '+ans.y1)
		console.log(ans.x2+' '+ans.y2)
	}else if(ans.x1 === ans.x2 && ans.y1 < ans.y2){
		console.log(ans.x1+' '+ans.y1)
		console.log(ans.x2+' '+ans.y2)		
	}else if(ans.x1 === ans.x2 && ans.y1 > ans.y2){
		console.log(ans.x2+' '+ans.y2)
		console.log(ans.x1+' '+ans.y1)	
	}else if(ans.x1 === ans.x2 && ans.y1 === ans.y2){
		console.log(ans.x2+' '+ans.y2)
		console.log(ans.x1+' '+ans.y1)
	}
}



function distance(x1, y1, x2, y2){
	dis = Math.sqrt(
		abs(x1 - x2) * abs(x1 - x2) +
		abs(y1 - y2) * abs(y1 - y2)
	)
	return dis
}

function abs(n){
	if(n<0){
		return -n
	}return n
}