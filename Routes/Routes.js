const express = require('express');
const Router = express.Router();

Router.get('/'  , require('../Controller/homeController').display);


module.exports = Router;