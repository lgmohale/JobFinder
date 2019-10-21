
const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const path = require('path');
const db = require('./config')
const router = require('./routes')

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/jobs', router)


app.listen( process.env.PORT || 8080, () => {
    console.log('Server is running.. on Port 8080');
})
