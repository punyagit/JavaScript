const express = require('express')
const bodyParser = require('body-parser')
const studentsRouter = require('./students/router')
const app = express()
const port = 4000
const sequelize = require('./db')

sequelize.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json())

app.get('/students', (req, resp) => {

})

app.listen(port,(err) => {
    console.log ("server started")
})