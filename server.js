'use strict';

// Variable Declarations
const express = require('express');
const frits = require('./frits.js');
const html = require('./body.js');
const server = express();

// Static file location
server.use(express.static('./public'));

// Home root GET request (when client visits site)
server.get('/', (request, response) => {
  let messages = '';
  // Loop through messages Object
  // Apply HTML (with Object.values i.e ${frit.message}) and insert into HTML function
  messages = Object.values(frits)
    .map(
      (frit) => `
    <article class="flex flex--column border padding-2rem background--grey margin-top-2rem">
    <div class="
          flex
          flex--row
          flex--justify-space-between
          flex--align-items-center
        ">
      <div class="flex flex--row flex--align-items-center">
        <img src="https://thispersondoesnotexist.com/image" alt="profile picture of ${
          frit.user
        }"/>
        <h2>${frit.user}</h2>
      </div>
      <time>${frit.time.toISOString().slice(0, 10)}</time>
    </div>
    <div class="flex flex--row flex--justify-space-between">
      <p class="padding-top-bottom-1rem ">
      ${frit.message}
      </p>
      <form action="/deletefrit" method="POST" class="flex--align-self-end">
        <button name="deleteButton" value="${
          frit.time
        }" aria-label="Delete Frit"
          class="dustbin box__button">🗑</button>
      </form>
    </div>
  </article>

    `
    )
    .reverse()
    .join('');

  // Call html function with full message string
  response.send(html(messages));
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
