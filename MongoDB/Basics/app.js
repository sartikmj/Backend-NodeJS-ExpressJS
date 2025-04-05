const express = require('express')
const app = express();

const userModel = require('./models/user') // importing out Model
const dbConnection = require('./config/db') // importing our connection to the database

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('public')) 
 

app.post('/get-form-data',(req,res)=>{ 
    console.log(req.body)
    res.send('Data received');
})  

app.listen(3000)