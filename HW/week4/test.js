const request = require('request')

var URL = 'https://lidemy-book-store.herokuapp.com/books/'

function req(URL){
	request(URL,function(error, response, body){
		var book_num = body.split('"')[2].split(' ')[1].split(',')[0]
		var book_name = body.split(':')[2].split('"')[1]
		console.log(book_num,book_name)
	})		
}
	
for(let i=1; i<=10; i++){
	URL += i
	setTimeout(req,1000)
}

