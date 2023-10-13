const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000; // this is our port number
const fs = require('fs');
const bookingRoutes = require('./routes/bookings');
const signInRoutes = require('./routes/signIn');

//NEW
const bodyParser = require('body-parser');
//NEW

const app = express(); // this is our app or instance of express


// API Middelwares
app.use(express.json()); //this is to accept data in json format
app.use(express.urlencoded()); // this is basically to decode the data send through html form
app.use(express.static('public'));
app.use(cors());

//NEW
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/prenota', bookingRoutes);
app.use('/signIn', signInRoutes);

//NEW

// API ROUTES
app.get('/', (request, responseC) => {
  const message = req.query.message || '';
  res.sendFile(__dirname + '/public/index.html');
  responseC.sendFile(path.join(__dirname, "style.css"))
});

// This is Basically to listen on port 
app.listen(port, () => {
  console.log('Server started at http://localhost:${port}')
});


