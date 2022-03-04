const routes = require('express').Router();

const uploadController = require('../controllers/upload');
const { authCheck } = require('../helpers/auth');

routes.post('/photo', authCheck, uploadController.photo);

module.exports = routes;