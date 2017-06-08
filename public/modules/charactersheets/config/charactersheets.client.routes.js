'use strict';

//Setting up route
angular.module('charactersheets').config(['$stateProvider',
	function($stateProvider) {
		// Charactersheets state routing
		$stateProvider.
		state('listCharactersheets', {
			url: '/charactersheets',
			templateUrl: 'modules/charactersheets/views/list-charactersheets.client.view.html'
		}).
		state('createCharactersheet', {
			url: '/charactersheets/create',
			templateUrl: 'modules/charactersheets/views/create-charactersheet.client.view.html'
		}).
		state('viewCharactersheet', {
			url: '/charactersheets/:charactersheetId',
			templateUrl: 'modules/charactersheets/views/view-charactersheet.client.view.html'
		}).
		state('editCharactersheet', {
			url: '/charactersheets/:charactersheetId/edit',
			templateUrl: 'modules/charactersheets/views/edit-charactersheet.client.view.html'
		});
	}
]);