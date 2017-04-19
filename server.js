/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
// const example middleWare = require('./middleware/filename');

const app = express();
const port = 3000;

// handle static requests
app.use(express.static('public'));

// handle 404 pages
app.get(`*`, (req,res)=>{
  res.send('404');
});

//Create server
const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on ${port}`);
});


//