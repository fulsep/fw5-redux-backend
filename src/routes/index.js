const routes = require('express').Router();

routes.use('/upload', require('./upload'));
routes.use('/auth', require('./auth'));
routes.use('/users', require('./users'));
routes.use('/profile', require('./profile'));

module.exports = routes;