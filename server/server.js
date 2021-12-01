// modules =================================================
const express = require('express');
const app = express();
// set our port
const port = 3100;
app.get('/userlist', (req, res) => res.send('Welcome to køogsalg!'));
app.post('/users', (req, res) => res.send('Welcome to køogsalg!'));
app.get('/', (req, res) => res.send('Welcome to køogsalg!'));
app.get('/', (req, res) => res.send('Welcome to køogsalg!'));

// startup our app at http://localhost:3100
app.listen(port, () => console.log(`Server are listening on ${port}!`));