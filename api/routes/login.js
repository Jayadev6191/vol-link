const express = require("express");
const router = express.Router();
const db = require("../../config");

router.post("/", (req, res, next) => {
    const sql = `SELECT * from users WHERE email = "${req.body.email}" AND password = "${req.body.password}";`;
    console.log(sql);
    db.query(sql, (err, result) => {
        if(err) throw err;
        res.status(200).json({
            message: "Successfully logged in"
        });
    });
});

module.exports = router;