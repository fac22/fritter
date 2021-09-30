'use strict';

// const html = `
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>

// <body>
// <form method="POST">
// <label id="message">My Frits</label>
// <input id="message" type="text" name="message">

// <button>Send Message</button>
// </form>

// </body>

// </html>
// `;

const htmlImport = function (input) {
  const html = `

  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FRITTER</title>
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <link rel="manifest" href="/site.webmanifest" />
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
  <meta name="msapplication-TileColor" content="#da532c" />
  <meta name="theme-color" content="#ffffff" />
  <link rel="stylesheet" href="styles.css" />
</head>

<body class="flex flex--column">
  <header class="flex flex--row flex--justify-center margin-top-2rem">
    <img width="80px" height="40px" src="fritter-logo.png" alt="Fritter logo of a yellow pixel art waffle" class="waffle">
    <h1>Fritter</h1>
    <!-- <h2>Fritter your life away</h2> -->
  </header>
  <main>
    <section class="write-frits">
      <form method="POST">
        <div class="flex flex--row ">
          <label id="name" class="hidden" for="name">Name</label>
          <input id="name" type="text" name="name" class="border text-size " placeholder="Name" />
        </div>

        <div class="flex flex--row ">
          <label id="message1" class="hidden " for="message">My Frit</label>

          <textarea id="message" class="border " type="text" maxlength="100" name="message"
            placeholder="Enter your frit" required title="Please enter a Frit"
            oninvalid="this.setCustomValidity('Please enter a Frit')"
            oninput="this.setCustomValidity('')"></textarea>
        </div>

        <button class="box__button">Send Message</button>
      </form>
    </section>

    <section>
    ${input}
    </section>
  </main>
</body>

</html>
  
`;

  return html;
};

module.exports = htmlImport;
