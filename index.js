#!/usr/bin/node

let http = require("http");
let fs = require("fs");

const data = require('./images.json');

let http_server = http.createServer(function(request, response){

	for (let i = 0; i < data.images.length; i++){
		if (request.url == "/" + data.images[i]){
			fs.readFile(data.images[i], function(err, data){
				if (err) {
					console.log("error");
					return;
				}
				response.writeHead(200);
				response.end(data);
			}); return;
		}	
	}

	fs.readFile("index.html", function(err, data){
		if (err){
				console.log("ERROR");
				return;
		}		
		response.writeHead(200);
		response.end(data);
	}); return;
}).listen(1905);
