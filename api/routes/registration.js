const express = require("express");
const router = express.Router();
const db = require("../../config");

router.post("/", (req, res, next) => {
    const sql = `SELECT * from users WHERE email = "${req.body.email}";`;
    db.query(sql, (err, result) => {
      if(err) throw err;
      if(result.length !== 0) {
        res.status(409).send(`User with ${req.body.email} already exists`);
      } else {
        const addUser = `INSERT * from users WHERE email = "${req.body.email}";`;
        const newUser = req.body;
        db.query("INSERT INTO users SET ?", newUser, function (error, results, fields) {
          if(error) {
            console.log(error);
          } else {
            console.log(results);
          }
        });
        console.log("proceed with registration");
        res.send("proceed with registration");
      }
    });
});

module.exports = router;

