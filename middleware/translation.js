/*jshint esversion: 6 */

// Translates black-listed word
module.exports = function translation(word){

  let gramsAppropriate = {
    selfie : "self-portrait",
    yummers : "delicious",
    outchea : "are out here",
    bruh : "wow",
    doge : "pug",
    cilantro : "soap",
    bae : "loved one",
    swag : "style",
    yolo : "carpe diem"
  };

  return gramsAppropriate[word];
};