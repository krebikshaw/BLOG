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

function solve(lines){
	let quantity = Number(lines[0].split(' ')[0])
	let maxWeight = Number(lines[0].split(' ')[1])
	let arr = []
	for(let i=1; i<lines.length; i++){
		arr.push({
			weight:Number(lines[i].split(' ')[0]),
			price:Number(lines[i].split(' ')[1]),
			value:(Number(lines[i].split(' ')[1])/Number(lines[i].split(' ')[0])).toFixed(2)
		})
	}
//arr=[{ weight: 9, price: 100 },{ weight: 5, price: 60 },{ weight: 2, price: 70 }]
	arr.sort(function(a, b){
		return b.value - a.value
	})
	let sumWeight = 0
	let sumPrice = 0
	let maxPrice = 0
	let tempIndex = null
	for(let i=0; i<arr.length; i++){
		if(sumWeight + arr[i].weight <= maxWeight){
			sumWeight += arr[i].weight
			sumPrice += arr[i].price
		}else{
			sumWeight -= arr[i-1].weight
			sumPrice -= arr[i-1].price
			i--
		}
		if(maxPrice < sumPrice){
			maxPrice = sumPrice
		}
	}
	console.log(maxPrice)
}






/*
1.將每樣物品的價值除以重量找出單位價值
2.將單位價值做排序
3.取單位價值前幾高，若遇到重量會超出限制，
  則跳過當下價值最低者，並繼續找。值到最後跳完全部物品
*/



/*
測資
5 20
9 100
5 60
3 70
8 70
12 500
直接挑價值最大的前幾組，把爆掉的去掉
1.將價值從小到大排序
2.全部都加價值一定最大，記下重量
3.將價值最小的拿掉，記下重量
4.一一照做值到剩下價值最小的那一件，記下重量，
5.完成總價值最大到最小的排序
6.開始篩選重量，找出符合重量的最大價值
	let quantity = Number(lines[0].split(' ')[0])
	let maxWeight = Number(lines[0].split(' ')[1])
	let arr = []
	for(let i=1; i<lines.length; i++){
		arr.push({
			weight:Number(lines[i].split(' ')[0]),
			price:Number(lines[i].split(' ')[1])
		})
	}
arr=[{ weight: 9, price: 100 },{ weight: 5, price: 60 },{ weight: 2, price: 70 }]
	arr.sort(function(a, b){
		if(a.price != b.price){
			return a.price - b.price		
		}else if(a.price == b.price && a.weight > b.weight){
			return b.weight - a.weight
		}
	})
	console.log(arr)
	let sum = []
	for(let i=0; i<arr.length; i++){
		let sumWeight = arr[i].weight
		let sumPrice = arr[i].price
		for(let j=i+1; j<arr.length; j++){
			sumPrice += arr[j].price
			sumWeight += arr[j].weight
			sum.push({
				price:sumPrice,
				weight:sumWeight
			})
		}
	}	
	sum.sort(function(a, b){
		return b.price - a.price
	})
	console.log(sum)
	for(let i=0; i<sum.length; i++){
		if(sum[i].weight <= maxWeight){
			console.log(sum[i].price)
			break
		}
	}
*/


/*
爆掉要回頭把價值最小的扣掉，以下為沒有扣掉的。
	let maxPrice = 0
	for(let i=0; i<arr.length; i++){
		let sumWeight = arr[i].weight
		let sumPrice = arr[i].price
		for(let j=i+1; j<arr.length; j++){
			if(sumWeight + arr[j].weight <= maxWeight){
				sumWeight += arr[j].weight
				sumPrice += arr[j].price
			}
			if(sumPrice > maxPrice){
				maxPrice = sumPrice	
			}	
		}
	}
	console.log(maxPrice)
*/