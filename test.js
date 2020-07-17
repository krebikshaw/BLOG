const request=require('request')

request(
  'https://lidemy-http-challenge.herokuapp.com/lv9?token={NeuN}&version=1A4938Jl7',
  function (error, response, body) {
    console.log(body)
  }
)

// 獲取系統資訊
const options = {
  url: 'https://lidemy-http-challenge.herokuapp.com/api/v2/sys_info',
  headers: {
    "Authorization": "Basic YWRtaW46YWRtaW4xMjM=",
    "X-Library-Number": 20,
    "User-Agent": "Mozilla/4.0 (compatible; U; MSIE 6.0; Windows NT 5.1)"
  }
};

function callback(error, response, body) {
  console.log(error, body)
}

request(options, callback);


request(
  'https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}',
  function (error, response, body) {
    console.log(body)
  }
)

request(
  'https://lidemy-http-challenge.herokuapp.com/lv10?token={duZDsG3tvoA}&num=9613',
  function (error, response, body) {
    console.log(body)
  }
)