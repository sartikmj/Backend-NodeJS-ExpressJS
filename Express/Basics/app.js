const express = require('express');
const app = express()

//get -> create route at which u can send req
app.get('/',(req,res)=>{
    res.send("Hello World") //sending response
})

app.get('/about',(req,res)=>{
    res.send("About Page")
})

app.get('/profile',(req,res)=>{
    res.send("Profile Page")
})

app.listen(3000) //app is listening on port 3000 , we do not need to create server , express manage it internally