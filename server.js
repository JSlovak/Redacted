/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/message.js');

const app = express();
const port = 3000;

// Handles static requests
app.use(express.static('public'));

// Body-parse middleware
app.use(bodyParser.urlencoded({extended: false}));

// Attach message router to express
app.use('/message', messageRoutes);

// Handles wild card pages with 404
app.get(`*`, (req,res)=>{
  res.send('404');
});


//Creates server
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on ${port}`);
});


//