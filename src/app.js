const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const index = require(__dirname + '/routes/index.js')
//const script = require('./routes/index.js')

app.use(index);
//app.use(script)

app.use(express.static('utils'))

app.listen(port);