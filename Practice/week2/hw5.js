/*
hw5
寫出join, repeat 兩個函式
*/


function join(arr, str){
  var result = ""
  for(let i=0; i<arr.length; i++){
    result += arr[i]
    result += str
  }
  var ans = ""
  for(let i=0; i<result.length-1; i++){ 
    ans += result[i]
  }
  console.log(ans)
}

join(["a","b","c"],"!")

function repeat(str, n){
  var result = ""
  for(let i=0; i<n; i++){
    result += str
  }
  console.log(result)
}

repeat('yoyoyo',2)

