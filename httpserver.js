var http=require("http");
 var routing = require('./HotelRouting');
url = require("url");
http.createServer(function(request, response) {
    console.log(request.url)

			if(request.url==="/favicon.ico")
			{
				response.writeHead(200,{"Content-Type":"image/x-icon"})
				response.end();
				return;
            }   
			else
			{
			var url_parts = url.parse(request.url);
			routing.enableRoute(url_parts,request,response);
			}

}).listen(3000);

console.log("Server started");