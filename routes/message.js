/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

let message = null;



// default message route
router.route('/')
  .post(function(req, res) {
    message = req.body;
    res.send(message);
  });

module.exports = router;