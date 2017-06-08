'use strict';

module.exports = function(app) {
	var quizzes = require('../controllers/quizzes.server.controller');
	var users = require('../controllers/users.server.controller');
	var apiAuth = require('../controllers/api.authorization.server.controller');

	app.route('/quizzes')
		.get(apiAuth, users.requiresLogin, quizzes.list)
		.post(apiAuth, users.requiresLogin, quizzes.create);

	app.route('/quizzes/:quizId')
		.get(apiAuth, users.requiresLogin, quizzes.read)
		.put(apiAuth, users.requiresLogin, quizzes.update)
		.delete(apiAuth, users.requiresLogin, quizzes.delete);

	// Finish by binding the article middleware
	app.param('quizId', quizzes.getByID);
};    