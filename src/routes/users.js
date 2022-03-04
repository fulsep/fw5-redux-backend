const users = require('express').Router();

const userController = require('../controllers/users');

users.get('/:id', userController.detailUsers);

module.exports = users;