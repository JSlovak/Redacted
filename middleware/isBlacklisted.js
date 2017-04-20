/*jshint esversion: 6 */

// Checks to see if the word is on the "black-list"
module.exports = function isBlackListed(word){
  blackList = ["selfie", "yummers", "outchea", "bruh", "doge", "cilantro", "bae", "swag", "yolo"];
  return blackList.indexOf(word) > -1;

};