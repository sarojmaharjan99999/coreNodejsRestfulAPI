/*
 * Primary file for the API
*/

// Dependencies
const http = require('http');
const url = require('url');

// The server should respond to all the requests with a string
const server = http.createServer(function(req, res) {

    // Get the URL and parse it
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;
    const trimedPath = path.replace(/^\/+|\/+$/g,'');

    //Get the query string
    const queryStringObject = parsedUrl.query;
    console.log(queryStringObject, "parse");

    //Get  the http method
    const method = req.method.toLowerCase();

    //Get the headers as an object
    const headers = req.headers;

    // send the response
    res.end("hello world");

    //log the request path
    console.log("Request received with these header: " , headers);
})

server.listen(3000, function() {
    console.log("server is running at port 3000.")
})