'use strict';

const express = require('express');
const frits = require('./frits.js');
const html = require('./body.js');
const server = express();

server.get('/', (request, response) => {
  console.log(frits);
  let messages = '';
  for (const frit of Object.values(frits)) {
    messages += `<h1>${frit.message}</h1>`;
  }
  response.send(messages);
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
