var module = require('./DBModule');
var url=require('url');
var querystring=require('querystring');
var fs=require('fs');

exports.display_login=function(url, request, response){
	
			data1= '';

			request.on('data', function(chunk) {      
				console.log(chunk);
				data1 += chunk;                                               
				});


			request.on('end', function() {
				qs=querystring.parse(data1);
				
				name=qs['username'];
				password=qs['password'];					
				module.authenticateUser(name,password,response,function(err,data){
						
							if(data=="success"){ 
								response.writeHead(200, {'Content-Type': 'text/html'});
								fs.readFile('./Tariff_Details.html', function (err, html) {
								
									if (err) {
										throw err;
									}      

									response.writeHeader(200, {"Content-Type": "text/html"}); 
									response.write(html); 
									response.end(); 

									});

							} 
							
							else{
								console.log("error");                                                                                                     
								response.writeHead(200, {'Content-Type': 'text/html'});
								response.write("<body bgcolor='#E2C2F6'><center>Invalid User try login Again!!</center></body>");
								response.write("<center><a href='home'>Back to Login</a></center>");
								response.end();
							}   
					});

			});

}

exports.display_signup=function(url, request, response){ 
         
			fs.readFile('./Signup_Hotel.html', function (err, html) {
				if (err) {
					throw err;
				} 
				
				response.writeHeader(200, {"Content-Type": "text/html"}); 
				response.write(html); 
				response.end(); 
			});
}

exports.display_register= function (url, request, response){   
			
			data1= '';
			
			request.on('data', function(chunk) {      
					console.log(chunk);
					data1 += chunk;                                               
			});  
			
			request.on('end', function() {
					qs=querystring.parse(data1);
					console.log(qs);
					name=qs['username'];
					password=qs['password'];
					confirmpassword=qs['confirmpassword'];         
					address=qs['address'];
					phoneno=qs['phoneno'];
					email=qs['email'];
					
					if(password==confirmpassword){
						
						module.addUser(name, password, address,phoneno,email, response ,function(err,data){
								if(data){                                                                 
								response.writeHeader(200, {"Content-Type": "text/html"}); 
								response.write("<body bgcolor='#E2C2F6'><center>Registered successfully!!</center></body>");
								response.write("<center><a href='home'>Click here to Login</a></center>");
								}                             
						});          

					} 
					
			        else{
						
						response.writeHead(200, {'Content-Type': 'text/html'});
						response.write("<body bgcolor='#E2C2F6'><center>Password doenot match with confirm password!!</center></body>");
						response.write("<center><a href='signup'>Try again</a></center>");
						response.end();              
						}
			});      

}

exports.display_home=function(url, request, response){             
			
			response.writeHead(200, {'Content-Type': 'text/html'});
			fs.readFile('./Home.html', function (err, html) {
					if (err) {
						throw err;
					}      
					response.writeHeader(200, {"Content-Type": "text/html"}); 
					response.write(html); 
					response.end(); 
			});
}

exports.getImageResponse=function(request,response){

	var img;

	switch(request.url) {

	case '/images/hotel.jpg':   img=fs.readFileSync('./images/hotel.jpg');

	break;

	case '/images/hotelroom.jpg':   img=fs.readFileSync('./images/hotelroom.jpg');

	break;


	}  
	response.writeHead(200, {'Content-Type': 'image/jpg' });
	response.end(img, 'binary');

}