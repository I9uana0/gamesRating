const makeRatingFile = require("./rating-file");
const config = require('./config')
const { createRating, updateRaiting } = require('./calculations')
module.exports = {
    makeRatingFile,
    config,
    createRating,
    updateRaiting,

}