'use strict';

const express = require('express');
const frits = require('./frits.js');
const html = require('./body.js');
const server = express();

server.use(express.static('./public'));

server.get('/', (request, response) => {
  let messages = '';
  // for (const frit of Object.values(frits)) {
  //   messages += `<h1>${frit.message}</h1>`;
  // }

  messages = Object.values(frits)
    .map(
      (frit) => `<h3>${frit.message} - ${frit.user}</h3>
    <form action="/deletefrit" method="POST">
    <button name="deleteButton" value="${frit.time}">X</button>
    </form>`
    )
    .join('');

  response.send(html(messages));
});

const bodyParser = express.urlencoded({ extended: false });

server.post('/', bodyParser, (request, response) => {
  // Collects new frit message
  const newFritMessage = request.body.message;
  const newFritName = request.body.name;

  const newFrit = {
    user: newFritName || 'annonymouse 🐭',
    message: newFritMessage,
    time: new Date(),
  };

  frits[new Date()] = newFrit;
  console.log(frits);
  response.redirect('/');
});

server.post('/deletefrit', bodyParser, (request, response) => {
  const fritToDelete = request.body.deleteButton;
  delete frits[fritToDelete];
  console.log(frits);
  response.redirect('/');
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
