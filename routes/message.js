/*jshint esversion: 6 */

const express = require('express');
const router = express.Router();

let message = null;

router.use((req, res, next) => {
  //console.log (req.body.message);
  message = req.body.message;
  newMessage = redact(message);
  //console.log(newMessage);
  req.body = newMessage;
  next();
});

// default message route
router.route('/')
  .post(function(req, res) {
    res.send(message);
  });

module.exports = router;

// Helper function
// Checks the message for blacklisted words
function redact(message){
  let wordArr = message.split(" ");
  let redactedMessage = null;

  for(let i = 0; i<wordArr.length; i++){
    console.log(wordArr[i]);
    console.log(typeof(wordArr[i]));

    if (isBlackListed(wordArr[i]) === true){
      console.log(translation(wordArr[i]));
    }
  }
  //return redactedMessage.join(" ");
}

// Checks to see if the word is on the "black-list"
function isBlackListed(word){
  blackList = ["selfie", "yummers", "outchea", "bruh", "doge", "cilantro", "bae", "swag", "yolo"];
  console.log(blackList.indexOf(word) > -1);
  return blackList.indexOf(word) > -1;

}

// Translates black-listed word
function translation(word){
  let gramsAppropriate = {
    Selfie : "self-portrait",
    yummers : "delicious",
    outchea : "are out here",
    bruh : "wow",
    doge : "pug",
    cilantro : "soap",
    bae : "loved one",
    swag : "style",
    yolo : "carpe diem"
  };

  console.log(gramsAppropriate.word);
  return gramsAppropriate.word;
}
