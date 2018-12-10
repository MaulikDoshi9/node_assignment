exports.authenticateUser = function(username,password,response,callback) {

    if(username==="admin" && password==="admin"){
        return callback(null,"success");
           }
    else
    return callback(null,"invalid");
        
    }

    exports.addUser = function(username, password, address,phoneno,email, response) {           
        response.writeHeader(200, {"Content-Type": "text/html"}); 
                                    response.write("<body ><center><h2>User Added Successfully</h2> <br> <a href='./home.html'> Click here to login</a></center></body>");
                                    response.end();
   }
