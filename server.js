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
        <h3>${frit.user}</h3>
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

const PORT = process.env.PORT || 3333;
server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
