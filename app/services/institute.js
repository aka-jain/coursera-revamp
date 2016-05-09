app.factory('instData', ['$http', function ($http) {
	return $http.get("/assets/data/institute.json").success(function (inst_data) {
			return inst_data;
		})
		.error(function (err) {
			return err;
		});
}]);
app.factory('content', ['$http', function ($http) {
	return $http.get("/assets/data/data.json").success(function (cont_data) {
			return cont_data;
		})
		.error(function (err) {
			return err;
		});
}]);