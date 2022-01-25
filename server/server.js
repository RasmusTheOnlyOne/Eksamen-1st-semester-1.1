// modules =================================================
const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser');
const fs = require('fs');

// set our port
const port = 3100;

const userlistpath = "./model/users.json";
const itemspath = "./model/items.json";
const itemtypepath = "./model/itemtype.json";
const indexpath = "./index.html";


app.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, userlistpath))
    console.log("ramte denne GET users path");
});

app.post('/users', (req, res) => {
    console.log("ramte denne POST users path");
    console.log("POST - /login - User logging in");
    var user1 = req.body;
    user1.id = "1";
    console.log('Got body:', req.body);
    console.log('A ', user1);
    console.log("user: ", user1.name);
    console.log('password: ', user1.password);
    res.send(user1);
})

app.delete('/users', (req, res) => {
    console.log("DELETE Request Called for /delete users")
    res.send("DELETE user Request Called")
 })

app.get('/items', (req, res) => {
    res.sendFile(path.join(__dirname, itemspath))
    console.log("ramte denne GET items path");
});

app.post('/items', (req, res) => {
    console.log("ramte denne POST items path");
    console.log("POST - /ny vare - User creating ware");
    var user1 = req.body;
    user1.id = "1";
    console.log('Got body:', req.body);
    console.log('A ', item1);
    console.log("user: ", item1.name);
    console.log('itemtypeid: ', item1.itemtypeid);
    console.log('userid: ', item1.userid);
    console.log('pris: ', item1.pris);
    console.log('billed: ', item1.billed);
    res.send(item1);
})

app.delete('/items', (req, res) => {
    console.log("DELETE Request Called for /delete items")
    res.send("DELETE items Request Called")
 })
 

app.get('/itemtype', (req, res) => {
    res.sendFile(path.join(__dirname, itemtypepath))
    console.log("ramte denne GET itemtype path");
});

app.post('/itemtype', (req, res) => {
    console.log("ramte denne POST itemtype path");
    console.log("POST - /kategorier - kategorier");
    var user1 = req.body;
    user1.id = "1";
    console.log('Got body:', req.body);
    console.log('A ', itemtype1);
    console.log("user: ", itemtype1.name);
    res.send(itemtype1);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, indexpath))
    console.log("ramte denne GET index path");
});

app.post('/', (req, res) => {
    console.log("ramte denne POST index path");

})

app.use(express.json());

// startup our app at http://localhost:3100
app.listen(port, () => console.log(`Server are listening on ${port}!`));