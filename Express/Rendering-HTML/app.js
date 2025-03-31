//To render HTML in our frontend using express, for that first we have set a view engine
//first we need to install it using command , npm i ejs
//we also need to make a folder named 'views' and in it we have to make an ejs file -> index.ejs
//the code inside it is almost exactly like HTML

const express = require('express');
const app = express()

app.set("view engine", 'ejs') //decalring to express that the view engine we are going to use is ejs

app.get('/',(req,res)=>{ //rendering the index.ejs file on this route
    res.render('index') //write name of file without extension , use render instead of send
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page")
})

app.listen(3000) 