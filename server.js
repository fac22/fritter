'use strict';

const express = require('express');
const frits = require('./frits.js');
const html = require('./body.js');
const server = express();

server.get('/', (request, response) => {
  let messages = '';
  for (const frit of Object.values(frits)) {
    messages += `<h1>${frit.message}</h1>`;
  }

  response.send(html(messages));
});

const bodyParser = express.urlencoded({ extended: false });

server.post('/', bodyParser, (request, response) => {
  // Collects new frit message
  const newFritMessage = request.body.message;

  const newFrit = {
    user: 'example',
    message: newFritMessage,
    time: new Date(),
  };

  frits[Object.keys(frits).length] = newFrit;
  console.log(frits);
  response.redirect('/');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
