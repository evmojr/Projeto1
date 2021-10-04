var http = require('http');
var fs = require('fs');


function  RequestResponse(req, res) {
  	fs.readFile('index.html',  function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		return res.end();
	});
}

http.createServer(RequestResponse).listen(8080);

