const express = require('express');

const hostname = '0.0.0.0';
const port = 3000;

const server = express();

server.use(express.urlencoded());
server.use(express.json());

const birthdayRoute = require("./api/routes/birthdayRoute.js");
birthdayRoute(server);


server.listen(port, hostname, () => {
    console.log(`Serveur qui tourne sur le port ${port}`);
})