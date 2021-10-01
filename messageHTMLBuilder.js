'use strict';

const messageHTMLBuilder = function (frits) {
  // Loop through messages Object
  // Apply HTML (with Object.values i.e ${frit.message}) and insert into HTML function
  return Object.values(frits)
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
};

module.exports = messageHTMLBuilder;
