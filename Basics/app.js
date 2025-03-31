// the cat-me package is inside the folder but to use it in the file, we do

// require('cat-me') //imports all the code of cat-me package into this file 
//we can not use it like this , we have to store it in a variable

const catMe = require('cat-me')

console.log(catMe());