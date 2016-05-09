app.factory('courseData', ['$http', function ($http) {
	return $http.get('http://cors.io/', {
    params: {
        u: 'https://api.coursera.org/api/courses.v1'
    }
	}).success(function (main_data) {
			return main_data;
		})
		.error(function (err) {
			return err;
		});
}]);