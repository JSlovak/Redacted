/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
// const example middleWare = require('./middleware/filename');


//Create server
const app = express();
const port = 3000;

const server = app.listen(port, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`Server listening on ${port}`);
});


//