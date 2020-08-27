'use strict';

const port = process.env.PORT || 5000;

let express = require('express');

let app = express();

app.use(express.static([__dirname, 'src'].join('\\')));
app.listen(port);