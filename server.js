const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

console.log(`someVariable: ${ someVariable }`);
app.listen(8080);
