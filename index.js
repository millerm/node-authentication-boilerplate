// Main starting point of Curago
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect('mongodb://localhost:curago/auth');
// App Setup
  // Define middleware (incoming requests go through these)
app.use(morgan('combined'));
// Parse all requests as JSON (maybe get rid of later)
app.use(bodyParser.json({ type: '*/*'}));
router(app);

// Server Setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log("Curago server is listening on:", port);
