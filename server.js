var http = require("http");

http.createServer( (request, response) => {
    // response.writeHead(200, {'Content-Type': 'text/html'});
    // response.end("<h1>Greetings from Bill Gates!</h1>");
    respons.writeHead(404);
}).listen(80);
console.log("Server running at 'webappia.azurewebsites.net'...");

