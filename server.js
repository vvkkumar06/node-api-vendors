// IMPORTING EXTERNAL MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// CONFIG FILES
const config = require('./config/dev');
const vendors = require('./dummy/vendors');

// GLOBAL VARIABLES
global.vendors = vendors.data;

// VENDOR CONTROLLER
const vendorsController = require('./controllers/vendor');

// MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTES
app.use('/api/vendors', vendorsController);

// SERVER
app.listen(config.PORT, (err) => {
    if (err) {
        console.error(`Something went wrong: ${err}`);        
    }
    else {
        console.info(`Server running on port ${config.PORT}`);
    }
})
