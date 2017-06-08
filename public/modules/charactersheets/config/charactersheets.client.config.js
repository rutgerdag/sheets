'use strict';

// Configuring the Articles module
angular.module('charactersheets').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Charactersheets', 'charactersheets', 'dropdown', '/charactersheets(/create)?');
		Menus.addSubMenuItem('topbar', 'charactersheets', 'List Charactersheets', 'charactersheets');
		Menus.addSubMenuItem('topbar', 'charactersheets', 'New Charactersheet', 'charactersheets/create');
	}
]);