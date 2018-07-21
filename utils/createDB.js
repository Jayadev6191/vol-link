var express = require("express");
var router = express.Router();
var db = require("../config");

// Create DB
router.get("/", (req, res) => {
    const dbname = req.query.dbname;
    console.log(`dbname is ${dbname}`);

    const sql = `CREATE DATABASE ${dbname}`;
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.send(`Database ${dbname} created`);
    });
})

module.exports = router;