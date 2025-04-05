const mongoose = require('mongoose')

//method to connect to database, after URL we can also write the name of the database
// mongoose.connect('mongodb://localhost:27017/Backend') //this will create a database named Backend in the local machine
const connection = mongoose.connect('mongodb://0.0.0.0/Backend').then(()=>{
    console.log("Connected to database") //after we run the server and db is connected , we will get this msg on terminal
})
//mongoose also return the connection it made between database and application ,here we stored it in variable const

module.exports = connection // we will use this connection in the app.js file to connect to the database