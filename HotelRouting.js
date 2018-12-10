var routeHandler = require('./RouteHandler');

exports.enableRoute=function(url,request,response){
	
	var pathname=url.pathname;
	console.log("url_parts.pathname"+url.pathname);
	
	switch(pathname) {

		case '/home': routeHandler.display_home(pathname, request, response);

		break;

		case '/login':routeHandler.display_login(pathname, request, response);

		break;

		case '/signup':routeHandler.display_signup(pathname, request, response);

		break;

		case '/register':routeHandler.display_register(pathname, request, response);

		break;

		case '/books': routeHandler.view_books(request, response);

		break;
		case '/view_books': routeHandler.view_books(request, response);

		break;

	
	   case	'/images/hotel.jpg':routeHandler.getImageResponse(request,response);
	   break;

	   case	'/images/hotelroom.jpg':routeHandler.getImageResponse(request,response);
	   break;

		default:

		routeHandler.display_home(pathname, request,response);

	}


	
}