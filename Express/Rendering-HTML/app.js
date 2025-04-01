//To render HTML in our frontend using express, for that first we have set a view engine
//first we need to install it using command , npm i ejs
//we also need to make a folder named 'views' and in it we have to make an ejs file -> index.ejs
//the code inside it is almost exactly like HTML

const express = require('express');
const app = express()

app.set("view engine", 'ejs') //decalring to express that the view engine we are going to use is ejs

//Middlewares in the backend are functions that execute between the request and response cycle in a web application
//it has three parameters req,res,next . It will always run before hitting any route.
app.use((req,res,next)=>{
    console.log("Middleware is running") //this will run for every route we have created
    //right now the website will keep loading bcz it is not getting any response
    //we usually don't send any response from middleware, we use it to check if the user is authenticated or not
    //if the user is authenticated then we will call next() function to move to the next function or route handler
    return next() //this will move to the next function or route handler
    //if we do not use next() , the code will not move to the next function or route handler
})

app.get('/',(req,res)=>{ //rendering the index.ejs file on this route , render(dikhana)
    res.render('index') //write name of file without extension , use render instead of send
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page")
})

app.listen(3000) 