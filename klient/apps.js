// modules =================================================
const express = require('express');
const path = require('path');

const app = express();
// set our port
const port = 3000;
app.get('/', (req, res) => res.send('Welcome to Tutorialspoint!'));
//res.sendFile(path.join(__dirname, '/index.html'));

// startup our app at http://localhost:3000
app.listen(port, () => console.log(`Example app listening on port ${port}!`));