const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

console.log('escuchando 8080');
app.listen(8080);
