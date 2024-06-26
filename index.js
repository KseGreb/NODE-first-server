const http = require('http'); //import http

const server = http.createServer(function(req, res) {  

    if(req.url === '/recipes') {
        res.write('Recipes');
        res.end();
    }
    else if(req.url === '/cakes') {
        res.write('Cakes');
        res.end();
    }
    else res.end("Page not found");
})

//req = request;  
//res = response;

server.listen(3000);
console.log("my first server is running at port 3000");