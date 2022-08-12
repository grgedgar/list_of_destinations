const http = require('http');
const hotelsList = require('./hotels-list');
const filterHotelsList = require('./filter-hotels-list');

http.createServer((request, response) => {  
    if (request.method === 'GET' && request.url.startsWith('/hotels')) {
      const params = new URLSearchParams(request.url.split('?')[1]);
      const starsInQuery = params.get('stars');
      if (starsInQuery > 0){
        response.end(filterHotelsList.filterByStars(hotelsList, starsInQuery)); 
      } else {
        const responseStringified = JSON.stringify(hotelsList);
        response.end(responseStringified);
      }
    } else {
      response.statusCode = 404;
      response.end();
    }
}).listen(3000);