const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const homeRouter = require(path.join(__dirname, 'routers/home.js'));

server.set('view engine', 'ejs');
server.use(express.json()); 
server.use(bodyParser.json()); 
server.use(cors());
server.use(express.urlencoded({extended: false}));
server.use(express.static('public'));
server.use('/dicar', homeRouter);
server.listen(3500, () => { 
    console.log('Server is ready...');
  })