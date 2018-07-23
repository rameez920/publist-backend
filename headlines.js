const { Client } = require('pg');

const credentials = {
    user: 'postgres',
    host: 'localhost',
    database: 'publist',
    password: 'password',
    port: 5433,
};

getHeadlines = (cb) => {
    const client = new Client(credentials)
    client.connect()

    const query = 'SELECT * FROM headlines';

    client.query(query, (err, res) => {
        cb(JSON.stringify(res.rows));
    })
}

module.exports.getHeadlines = getHeadlines 