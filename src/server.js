const express = require('express');
const bodyParser = require('body-parser'); 
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const apiRouter = require('./config/routes');
const config = require('./config/enviroment');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));


app.use('/api', apiRouter);

app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`);
    require('./db');
});

module.exports = app;