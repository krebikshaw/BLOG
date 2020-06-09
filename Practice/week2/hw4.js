/*
hw4
印出因數
*/


function printFactor(n){
  var arr = [1]
  for(let i=2; i<=n; i++){
    if(n%i==0){
      arr.push(i)
    }
  }
  for(let i=0; i<arr.length; i++){
    console.log(arr[i])
  }
}


printFactor(10)


