'use strict';

module.exports = function(app) {
	var charactersheets = require('../controllers/charactersheets.server.controller');
	var users = require('../controllers/users.server.controller');
	var apiAuth = require('../controllers/api.authorization.server.controller');

	app.route('/charactersheets')
		.get(apiAuth, users.requiresLogin, charactersheets.list)
		.post(apiAuth, users.requiresLogin, charactersheets.create);

	app.route('/charactersheets/:charactersheetId')
		.get(apiAuth, users.requiresLogin, charactersheets.read)
		.put(apiAuth, users.requiresLogin, charactersheets.update)
		.delete(apiAuth, users.requiresLogin, charactersheets.delete);

	// Finish by binding the article middleware
	app.param('charactersheetId', charactersheets.getByID);
};    