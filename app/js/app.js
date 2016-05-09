var app = angular.module('Learnit', ['ngRoute']);

//configurations================



app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
	when('/search',{

		templateUrl:'../views/search.html'
	}).
	otherwise({
		templateUrl: '../views/home.html'
	})

	
}])
