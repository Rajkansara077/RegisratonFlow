const mysql = require('mysql2/promise');

const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'registration_db'
    });

db.getConnection()
.then(()=>{
    console.log('Connected to the database');

}).catch((err)=>{
    console.log('Error connecting to the database:', err);
    process.exit(1)
})

module.exports = db;