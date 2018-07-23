const { Pool, Client } = require('pg');
const auth = require('./auth.js')
const headlines = require('./headlines.js')

module.exports = (request, response) => {

    if (auth.authenticateUser(request)) {
        headlines.getHeadlines(results => {
            response.setHeader('Content-Type', 'application/json')
            response.end(results)
        })
    } else {
        response.end('invalid log in')
    }
}
