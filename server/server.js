// modules =================================================
const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const fs = require('fs');

// set our port
const port = 3100;

const userlistpath = "./model/users.json";
app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, userlistpath))

    app.post('/users', (req, res) => {
        res.send("POST users Request Called")
      })

      console.log("ramte denne users path");
    
});

const itemspath = "./model/items.json"
app.get('/items', (req, res) => {
    res.sendFile(path.join(__dirname, itemspath))

    app.post('/items', (req, res) => {
        res.send("POST items Request Called")
      })

      console.log("ramte denne items path");

});

const itemtypepath = "./model/itemtype.json"
app.get('/itemtype', (req, res) => {
    res.sendFile(path.join(__dirname, itemtypepath))

    app.post('/itemtype', (req, res) => {
        res.send("POST itemtype Request Called")
      })

      console.log("ramte denne itemtype path");
});

const indexpath = "./index.html"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, indexpath))

    app.post('/', (req, res) => {
        res.send("POST Request Called")
      })

      console.log("ramte denne path");

});
// startup our app at http://localhost:3100
app.listen(port, () => console.log(`Server are listening on ${port}!`));