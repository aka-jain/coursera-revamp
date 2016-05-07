var app = angular.module('Learnit', ['ngRoute']);

//configurations================



app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	otherwise({
		templateUrl: '../views/home.html'
	})

	
}])
