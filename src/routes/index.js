const routes = require('express').Router();

routes.use('/upload', require('./upload'));
routes.use('/auth', require('./auth'));

module.exports = routes;