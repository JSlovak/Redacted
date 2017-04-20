/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();
const redact = require('../middleware/redact');

let message = null;

// Redacting middleware
router.use((req, res, next) => {
  message = req.body.message;
  // Uses redact method in ../middleware
  redacted = redact(message);
  req.body = redacted;
  next();
});

// '/message' Route
router.route('/')
  .post(function(req, res) {
    res.send(redacted);
  });

module.exports = router;

