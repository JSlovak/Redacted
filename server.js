/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/message.js');

const app = express();
const port = 3000;

// handle static requests
app.use(express.static('public'));

// handle 404 pages
app.get(`*`, (req,res)=>{
  res.send('404');
});

// pull in body-parse middleware
app.use(bodyParser.urlencoded({extended: false}));

// Attach message router to express
app.use('/message', messageRoutes);


//Create server
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on ${port}`);
});


//