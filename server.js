const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

const CsbInspector = require('csb-inspector/express-socket');
const options = {
     app: app,
     route: "_console",
     port: 8888,
     outputs: [(path, prop, args)=>{
           fs.appendFileSync("file.txt", path);
       }]
   }
CsbInspector(options);
app.listen(8080);
