// NOTE: remember to npm init -y AND npm i mysql2

const mysql = require('mysql2');
const config = require('./config');

const connection = mysql.createConnection(config);

connection.connect(err => {
    if (err) {
        console.error('Failed to connect to database: ', err);
        return;
    }

    console.log('Successfully connected to database!');
});

module.exports = connection;