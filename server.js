'use strict';

// Variable Declarations
const express = require('express');
const frits = require('./frits.js');
const html = require('./body.js');
const server = express();
const messageHTMLBuilder = require('./messageHTMLBuilder');

// Static file location
server.use(express.static('./public'));

// Home root GET request (when client visits site)
server.get('/', (request, response) => {
  // Call html function with full message string
  response.send(html(messageHTMLBuilder(frits)));
});

// Middleware - collect post in entirety
const bodyParser = express.urlencoded({ extended: false });

// Post New Frit
server.post('/', bodyParser, (request, response) => {
  // Collects new frit message
  const newFritMessage = request.body.message;
  const newFritName = request.body.name;

  const newFrit = {
    user: newFritName || 'annonymouse 🐭',
    message: newFritMessage,
    time: new Date(),
  };
  // Use Date/Time as unique ID for each Frit
  // Potential bug if two or more users post at the exact same time
  frits[new Date()] = newFrit;
  response.redirect('/');
});

// Delete Frit
server.post('/deletefrit', bodyParser, (request, response) => {
  const fritToDelete = request.body.deleteButton;
  delete frits[fritToDelete];
  response.redirect('/');
});

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
