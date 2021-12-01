// modules =================================================
const express = require('express');
const app = express();
const path = require("path");
// set our port
const port = 3100;
const userlistpath = "./model/users.json";
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, "./model/users.json"))
    
    //res.send('Welcome to købogsalg!')
});

const itemspath = "./model/items.json"
app.get('/items', (req, res) => {
    res.sendFile(path.join(__dirname, "./model/items.json"))

});

const itemtypepath = "./model/itemtype.json"
app.get('/items', (req, res) => {
    res.sendFile(path.join(__dirname, "./model/itemtype.json"))

});

const indexpath = "./index.html"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))

});
// startup our app at http://localhost:3100
app.listen(port, () => console.log(`Server are listening on ${port}!`));