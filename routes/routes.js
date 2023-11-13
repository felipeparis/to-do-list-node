const routes = require('express').Router();
const TaskController = require('../controller/TaskController');

routes.get('/ge', TaskController.getAll);

module.exports = routes;