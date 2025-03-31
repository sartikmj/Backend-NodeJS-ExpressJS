//package require to create a server -> http
const http = require('http')

//creating a server , IMPORTANT , there is a package , nodemon , which restarts the package automatically on making changes
//command to install nodemon =>  npx nodemon file.js
const server = http.createServer((req,res)=>{
    // console.log(req.url); //.url gives which particular route are you hitting
    // res.end("Hello World") //koi bhi agar humare server p koi req bhejta hai to uske response me bum bolenge Hello World

    //conditionally sending different response for different routes
    if(req.url=="/about"){
        res.end("about page")
    }
    if(req.url=="/profile"){
        res.end("profile page");
    }
    if(req.url=="/"){
        res.end("home page");
    }
}); 
//createServer() is a method that returns the instance of a server
//as parameter it requires a callback , req and res

//Running the server

server.listen(3000) //server will run on the port 3000 , which is a gate for sending and receiving data
