var express = require('express');
var router = express.Router();

// Create DB
router.get('/', (req, res) => {
    const tablename = req.query.tablename;
        let sql = `CREATE TABLE ${tablename}(id int AUTO_INCREMENT,
            jobTitle VARCHAR(255),
            jobDescription VARCHAR(255),
            postedBy VARCHAR(255),
            PRIMARY KEY(id))`;
        
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            res.send(`Database table postings created...`);
        });
})

module.exports = router;