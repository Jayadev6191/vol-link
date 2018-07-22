const mysql = require("mysql");
const env = require("dotenv").config();

//Create Connection

const db = mysql.createConnection({
    host       : process.env.HOST,
    user       : process.env.DB_USER,
    password   : process.env.DB_PASSWORD,
    database   : process.env.DATA_BASE,
    socketPath : process.env.SOCKET_PATH
});

//Connect
db.connect((err) => {
    if(err) throw err;
    console.log("MySQL db connected");
});

module.exports = db;