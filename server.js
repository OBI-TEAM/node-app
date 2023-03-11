'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

app.get('/', (req, res) => {
  res.send('<h1 style="color:green ;">ERPl LMS OBI Deployment Working 11th March 2023` </h1> \n');
});
