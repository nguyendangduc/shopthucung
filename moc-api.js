var express = require('express');
var mocker = require('connect-api-mocker');
var cors = require('cors');

const port = 8000;

var app = express();
app.use(cors());

/* http://localhost:8000/api/user/t3h */

app.use('/api', mocker('mock-api'));
app.listen(port, () => console.log('Mocker run on port: ' + port));