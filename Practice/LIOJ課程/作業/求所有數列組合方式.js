/*
1               push arr[i]
12 				push arr[i] arr[i+1]
123 124 125 	push arr[i] arr[i+1] for(i=i+2; i<length){push arr[j]}
1234 1235 1245  push arr[i] arr[i+1] arr[i+2] for(){}
12345			push arr[i] arr[i+1] arr[i+2] arr[i+3] ... arr[length]

13			    push arr[i] arr[i+2]
134 135			push arr[i] arr[i+2] for(){}
1345			push arr[i] arr[i+2] ... arr[length]

14				push arr[i] arr[i+3]
145				push arr[i] arr[i+3] arr[length]

15				push arr[i] arr[i+4]
*/
arr = [1,2,3,4,5]
function allOption(arr){
	let result = []
	for(let i=0; i<arr.length; i++){
		result.push([arr[i]])
		for(let j=1; j<arr.length; j++){	
			let temp = j
			result.push([arr[i],arr[i+temp]])
			for(let k=temp+1; k<arr.length; k++){
				result.push([arr[i],arr[temp],arr[k]])
			}
		}
	}
	return result
}
console.log(allOption(arr))
/*
2
23 
234 235 245
2345

24
245

25

3
34
345

35

4
45

5
*/