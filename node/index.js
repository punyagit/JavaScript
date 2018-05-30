const _ = require('lodash') // to install npm install
const {students, teachers,fruits} = require('./app/index')// use colon to rename
var express = require('express')
var app = express()


app.use((req,resp,next) => {
    console.log(req.headers)
    next()
})

//const fruits = require('./app/index')

// students.forEach(function(student){
//     console.log(student)
// })

// teachers.forEach(teacher =>{
//     console.log(teacher)
// })

// fruits.forEach(teacher =>{
//     console.log(teacher)
// })

// Express
app.get('/', function (req, res) {
    
    res.send('Hello World')  // you can do resp.json(flie)
    
  })
   
  app.listen(4000, (err) => {
    console.log("Server Started")
  })



