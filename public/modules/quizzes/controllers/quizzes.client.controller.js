'use strict';

// Categories controller
angular.module('quizzes').controller('QuizzesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Quizzes', '$filter', 
	function($scope, $stateParams, $location, Authentication, Quizzes, Effects, $filter) {
		$scope.authentication = Authentication;
	  	$scope.currentPage = 1;
	  	$scope.pageSize = 10;
	  	$scope.offset = 0;
	  	$scope.statsArray=[{stat: 'Bozo'},{stat: "Cleo"},{stat: "Debumpo"},{stat: "Harry"}];

	  	// Page changed handler
	  	$scope.pageChanged = function() {
	   	$scope.offset = ($scope.currentPage - 1) * $scope.pageSize;
	  	};


console.log($scope.statsArray[0]);

		// Create new Quiz
		$scope.create = function() {
			// Create new Quiz object
			var quiz = new Quizzes ({
				name: this.name,
				question: this.question,
				effects:[{answer: this.answer, stat: this.stat, increment: this.increment}]
				
			});

				console.log(quiz);

			// Redirect after save
			quiz.$save(function(response) {
				$location.path('quizzes/' + response._id);
				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Category
		$scope.remove = function(quiz) {
			if ( quiz ) { 
				quiz.$remove();

				for (var i in $scope.quizzes) {
					if ($scope.quizzes [i] === quiz) {
						$scope.quizzes.splice(i, 1);
					}
				}
			} else {
				$scope.quiz.$remove(function() {
					$location.path('quizzes');
				});
			}
		};

		// Update existing Quiz
		$scope.update = function() {
			var quiz = $scope.quiz;

				console.log(quiz);
			quiz.$update(function() {
				$location.path('quizzes/' + quiz._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};





		// Find a list of Quizzes
		$scope.find = function() {
			Quizzes.query(function loadedQuizzes(quizzes) {
				$scope.quizzes = quizzes;
			});
		};

		// Find existing Quiz
		$scope.findOne = function() {
			$scope.quiz = Quizzes.get({
				quizId: $stateParams.quizId
			});
		};

		// Search for a quiz
		$scope.quizSearch = function(quiz) {
			$location.path('quizzes/' + quiz._id);
		};
		
		
	}
]);