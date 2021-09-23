const express = require('express')
var cors = require('cors') 
const routes = require('./routes/routes.js');
const views = require('./views/views.js');

const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json());
require('dotenv').config()

routes(app);
views(app);

module.exports = app

