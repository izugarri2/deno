const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

console.log('msg');
app.listen(8080);
