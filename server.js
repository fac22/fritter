'use strict';

const express = require('express');
const frits = require('./frits.js');
const html = require('./body.js');
const server = express();

server.get('/', (request, response) => {
  let messages = '';
  // for (const frit of Object.values(frits)) {
  //   messages += `<h1>${frit.message}</h1>`;
  // }

  messages = Object.values(frits)
    .map((frit) => `<h1>${frit.message} - ${frit.user}</h1>`)
    .join('');

  response.send(html(messages));
});

const bodyParser = express.urlencoded({ extended: false });

server.post('/', bodyParser, (request, response) => {
  // Collects new frit message
  const newFritMessage = request.body.message;
  const newFritName = request.body.name;

  const newFrit = {
    user: newFritName,
    message: newFritMessage,
    time: new Date(),
  };

  frits[Object.keys(frits).length] = newFrit;
  console.log(frits);
  response.redirect('/');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
