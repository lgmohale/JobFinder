
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

const app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('index', { layout: 'landing' }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/jobs', router)


app.listen( process.env.PORT || 8080, () => {
    console.log('Server is running.. on Port 8080');
})
