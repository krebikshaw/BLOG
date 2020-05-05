const request = require('request')
const process = require('process')
var URL = 'https://lidemy-book-store.herokuapp.com/books'

if(process.argv[3]){
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
}else{
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
}

/*
request('https://lidemy-book-store.herokuapp.com/books',function(error, response, body){
	for(let i=0; i<10; i++){
		var book_num = body.split('}')[i].split('"')[2].split(' ')[1].split(',')[0]
		var book_name = body.split('}')[i].split(':')[2].split('"')[1]
		console.log(book_num, book_name)
	}
})
*/