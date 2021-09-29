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
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
<h1>Fritter</h1>
<h2>Fritter your life away</h2>
<form method="POST">
<label id="name">Name</label>

<input id="name" type="text" name="name" >
<label id="message1">My Frit</label>

<input id="message" type="text" name="message" placeholder="Enter your frit" required
                            title="Please enter your name 🙂"   oninvalid="this.setCustomValidity('Enter User Name Here 🧱')"
  oninput="this.setCustomValidity('')">

<button>Send Message</button>
</form>
${input}

</body>

</html>
`;

  return html;
};

module.exports = htmlImport;
