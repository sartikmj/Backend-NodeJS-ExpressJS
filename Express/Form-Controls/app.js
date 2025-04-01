// we use form controls to get data from the user(frontend) and send it to the server.
const express = require('express')
const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

// Express by default can't read data that is coming through POST inside req.body 
// we have to use 2 middlewares for accessing the data inside req.body

//1st
app.use(express.json())
//2nd
app.use(express.urlencoded({extended:true}))
//now the data will be shown on terminal , us just have to write them that's it

// app.get('/get-form-data',(req,res)=>{ //using GET method , our data specially password is visible in the URL
//     console.log(req.query) //this will give us the data in the form of an object , data  req.query ki form m aata hai
//     res.send('Data received')
// })

// GET -> to send data from server to front end
// POST -> to send data from front end to server(backend)

// to keep data safe and not shown in the URL we will use POST method

//used to send data secretly without showing it in the url 
app.post('/get-form-data',(req,res)=>{ //if u r using post data does not come into req.query , it comes into req.body
    console.log(req.body)
    res.send('Data received');
})  

app.listen(3000)