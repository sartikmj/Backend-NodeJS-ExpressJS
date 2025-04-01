const express = require('express');
const morgan = require('morgan'); //npm i morgan
const app = express()

app.set("view engine", 'ejs') 

//Middlewares in the backend are functions that execute between the request and response cycle in a web application
//it has three parameters req,res,next . It will always run before hitting any route.
app.use((req,res,next)=>{ //Custom Middleware
    console.log("Middleware is running") //this will run for every route we have created
    //right now the website will keep loading bcz it is not getting any response
    //we usually don't send any response from middleware, we use it to check if the user is authenticated or not
    //if the user is authenticated then we will call next() function to move to the next function or route handler
    //if the user is not authenticated then we will send a response to the user and not call to next() function
    // res.send("Middleware is running") //this will send a response to the user and not call to next() function
    //for example
    const a = 2
    const b = 3
    console.log(a+b) //this will be shown at terminal , and our index.ejs will be shown of webpage

    return next() //this will move to the next function or route handler
    //if we do not use next() , the code will not move to the next function or route handler
})

//Middlewares are of 3 types:
//1.Built-in Middlewares: These are the middlewares that are provided by Express.js itself.
//2.Custom Middlewares: These are the middlewares that we create ourselves.
//3.Third-party Middlewares: These are the middlewares that are created by other developers and are available as npm packages.

//morgon(npm i morgan) is a third-party middleware that is used to log the requests made to the server
app.use(morgan('dev'))

//all Middleware run for all routes by default

//if we want to run middleware for specific routes then we can do that too
// app.use('/about',(req,res,next)=>{ //this middleware will run only for /about route
app.get('/',(req,res,next)=>{ 
    const a=5;
    const b=10;
    console.log(a+b) //this will only run on terminal for '/' route
    next() //if we do not use it the website will keep loading and not show anything
},(req,res)=>{
    res.render('index') 
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page")
})

app.listen(3000) 