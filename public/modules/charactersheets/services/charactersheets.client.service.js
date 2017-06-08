
'use strict';

//Charactersheets service used to communicate Charactersheets REST endpoints
angular.module('charactersheets').factory('Charactersheets', ['$resource',
	function($resource) {
		return $resource('charactersheets/:charactersheetId', { charactersheetId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
