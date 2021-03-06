// install dependencies
const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/db.js');

const PORT = 3003;

// create middleware
let logRequests = (req, res, next) => {
  console.log(`Request type: ${req.method} from path: ${req.path}`);
  next();
}
// app.use(express.bodyParser());
app.use(logRequests);
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());


// create routes
app.get('/employees', (req, res) => {
  // res.json( {message: 'hello world from the server'})
  db.getEmployees(req.query, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send(results);
    }
  })
})


app.post('/addemployee', (req, res) => {
  console.log(req)
  db.addEmployee(req.body, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('is this being done?')
      res.status(201).end();
    }
  })
})


// start server
app.listen(PORT, (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Server is listening on port:', PORT);
  }
})
