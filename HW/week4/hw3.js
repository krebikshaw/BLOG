/*
node hw3.js list // 印出前二十本書的 id 與書名
node hw3.js read 1 // 輸出 id 為 1 的書籍
node hw3.js delete 1 // 刪除 id 為 1 的書籍
node hw3.js create "I love coding" // 新增一本名為 I love coding 的書
node hw3.js update 1 "new name" // 更新 id 為 1 的書名為 new name
*/

const request = require('request')
const process = require('process')
var URL = 'https://lidemy-book-store.herokuapp.com/books'

if(process.argv[2] == 'list'){
	request(
		URL,
		function(error, response, body){
			for(let i=0; i<20; i++){
			var book_num = body.split('}')[i].split('"')[2].split(' ')[1].split(',')[0]
			var book_name = body.split('}')[i].split(':')[2].split('"')[1]
			console.log(book_num, book_name)
			}
		}
	)
}else if(process.argv[2] == 'read'){
	URL += '/'
	URL += process.argv[3]
	request(
		URL,
		function(error, response, body){
			var book_num = body.split('"')[2].split(' ')[1].split(',')[0]
			var book_name = body.split(':')[2].split('"')[1]
			console.log(book_num, book_name)
		}
	)
}else if(process.argv[2] == 'delete'){
	URL += '/'
	URL += process.argv[3]
	request.delete(
		URL, 
		function(err,httpResponse,body){
		 
		}
	)
}else if(process.argv[2] == 'creat'){
	request.post(
		{
			url:URL, 
			form:{	
				name:process.argv[3]
			}
		}, 
		function(err,httpResponse,body){
		 
		}
	)
}else if(process.argv[2] == 'update'){
	URL += '/'
	URL += process.argv[3]
	request.patch(
		{
			url:URL, 
			form:{	
				name:process.argv[4]
			}
		}, 
		function(err,httpResponse,body){
		 
		}
	)
}


/*
request.post(
	{
		url:'http://service.com/upload', 
		form:{	
			key:'value'
		}
	}, 
	function(err,httpResponse,body){
	 
	}
)
*/
