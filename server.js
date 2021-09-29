'use strict';

const express = require('express');
const posts = require('./frits.js');
const html = require('./body.js');
const server = express();

server.get('/', (request, response) => {
  console.log('Hello its working now');
  response.send(html);
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
