// Here will be making a Schema

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    // age: Number,
    
    // gender:{
    //     type:String,
    //     enum: ['male','femaile'] // enum is used to limit the values of a field,there will be only two values of gender male or female
    // }
})

//to implement the schema we need use a function , to create a model
// the model will be used to create a collection in the database

const userModel = mongoose.model('user',userSchema) //'name of the collection', Schema

// we need to export this model 

module.exports = userModel // this will be used in the app.js file to create a collection in the database

//bcz of userModel ,we can create user collection delete user update user in the database , i.e. basic CRUD operations

//we also need to connect to the database in the app.js file , for it we will make a new folder config