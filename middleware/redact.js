/*jshint esversion: 6 */

// Require in other middleware modules needed to complete the function
const translation = require('./translation');
const isBlackListed = require('./isBlackListed');


// Takes in message
// Checks against the Black Listed words
// Substitutes/ "translates" the words on the list
// Sends back translated/ "redacted" message
module.exports = function redact(message){
  let wordArr = message.split(" ");
  let redactedMessage = [];

  for(let i = 0; i<wordArr.length; i++){
    // Uses isBlackListed method
    if (isBlackListed(wordArr[i]) === true){
      // Uses translation method
      redactedMessage.push(translation(wordArr[i]));
    } else {
      redactedMessage.push(wordArr[i]);
    }
  }
  console.log(redactedMessage.join(" "));
  return redactedMessage.join(" ");
};