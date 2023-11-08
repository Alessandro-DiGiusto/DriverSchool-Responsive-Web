const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000; // this is our port number
const fs = require('fs');
const bookingRoutes = require('./routes/bookings');
const signInRoutes = require('./routes/signIn');
const loginRoutes = require('./routes/login');
const path = require('path');

const app = express(); // this is our app or instance of express
const ejs = require('ejs');

// API Middelwares
app.use(express.json()); // this is to accept data in JSON format
app.use(express.urlencoded({ extended: false })); // this is to decode the data sent through an HTML form
app.use(express.static('public'));
app.use(cors());

/* app.use(bodyParser.urlencoded({ extended: false }); */
/* app.use(bodyParser.json(); */

app.use('/prenota', bookingRoutes);
app.use('/signIn', signInRoutes);
app.use('/login', loginRoutes);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// API ROUTES
app.get('/', (request, response) => {
  const message = req.query.message || '';
  res.sendFile(__dirname + '/public/index.html');
  response.sendFile(path.join(__dirname, "style.css"));
});

// This is Basically to listen on port
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
