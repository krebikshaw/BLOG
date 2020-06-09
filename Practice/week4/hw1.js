const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books',function(error, response, body){
	for(let i=0; i<10; i++){
		var book_num = body.split('}')[i].split('"')[2].split(' ')[1].split(',')[0]
		var book_name = body.split('}')[i].split(':')[2].split('"')[1]
		console.log(book_num, book_name)
	}
})


/*
for(let i=1; i<=10; i++){
	var URL = 'https://lidemy-book-store.herokuapp.com/books/'
	URL += i 

	request(URL,function(error, response, body){
		var book_num = body.split('"')[2].split(' ')[1].split(',')[0]
		var book_name = body.split(':')[2].split('"')[1]
		console.log(book_num,book_name)
	})	

}
*/