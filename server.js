//server.js
'use strict'

//first we import our dependencies...
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./config');
const createDB = require('./utils/createDB');
const createTable = require('./utils/createTable');

//and create our instances
const app = express();
const router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
const port = process.env.API_PORT || 3001;

//now we should configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

/* Use it to create a database accepts param called `dbname` */
app.use('/createDB', createDB);

/* Use it to create a table accepts param called `tablename` */
app.use('/createtable', createTable);

app.post('/auth', (req,res)=>{
  const sql = `SELECT * from users WHERE email = '${req.body.email}' AND password = '${req.body.password}';`;
  db.query(sql, (err, result) => {
    if(err) throw err;
      res.send(result);
  });
});

app.post('/register', (req,res)=>{
  const sql = `SELECT * from users WHERE email = '${req.body.email}';`;
  console.log(sql);
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    if(result.length !== 0) {
      console.log("User already exists");
    } else {
      console.log("proceed with registration");
      res.send("proceed with registration");
    }
  });
});

// SELECT postings.jobTitle FROM postings, organization WHERE postings.postedBy = organization.id AND organization.zipcode = 95051
// //now  we can set the route path & initialize the API
// router.get('/', function(req, res) {
//   res.json({ message: 'API Initialized!'});
// });

// //Use our router configuration when we call /api
// app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api server running on port ${port}`);
});