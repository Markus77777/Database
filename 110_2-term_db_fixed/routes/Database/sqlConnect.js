const mysql = require('mysql2/promise');

const myConnection =mysql.createPool({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'onlineshop',
    port: 3306,
    charset: 'utf8'
});

module.exports = myConnection;
global.myConnection=myConnection;