const qs = require('querystring');
const url = require('url');


const credentials = {
    userName: 'user',
    password: 'password'
}

authenticateUser = (request) => {
    const query = qs.parse(url.parse(request.url).query);
    
    return (query.userName === credentials.userName && 
            query.password === credentials.password);
}

module.exports.authenticateUser = authenticateUser 