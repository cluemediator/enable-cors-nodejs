var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 4000;

/****
// METHOD #1 - enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 
****/

// METHOD #2 - enable CORS using npm package
var cors = require('cors');
app.use(cors());

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// request handlers
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Enable CORS in Node.js - Clue Mediator' });
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});