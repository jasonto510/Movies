const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
 
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.listen(port, () => console.log('you are listening on port ' + port));