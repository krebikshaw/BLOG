const request = require('request')

request.delete(
	{
		url:'https://lidemy-http-challenge.herokuapp.com/api/books/23',
		form:
		{

		}	
	}
	,
	function(err, response, body){
		console.log(JSON.parse(body))
	}
)


/*
request.delete('https://lidemy-http-challenge.herokuapp.com/api/books/23', sfunction (error, response, body) {
  console.log(JSON.parse(body));
});
*/