const profile = require('express').Router();

const profileController = require('../controllers/profile');
const { authCheck } = require('../helpers/auth');

profile.get('/', authCheck, profileController.currentUser);

module.exports = profile;