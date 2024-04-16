const endpoints = require('./config.js')
const { getData } = require('./api-utils.js')
const { getRandomGame } = require('./api-utils.js')
module.exports = {
    endpoints,
    getData,
    getRandomGame
}