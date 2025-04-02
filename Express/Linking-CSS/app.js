const express = require('express')
const app = express();

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//for linkind static files like css, js, images , we use a built-in middleware called express.static
app.use(express.static('public')) //inside the function is the name of the folder(in form of string) where the static files are stored
 

app.post('/get-form-data',(req,res)=>{ 
    console.log(req.body)
    res.send('Data received');
})  

app.listen(3000)