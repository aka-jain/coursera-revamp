app.controller('home', ['$scope','courseData', function ($scope,courseData) {



	courseData.success(function(data){
		$scope.val=data;
			console.log($scope.val.elements[1].id);
	})
		


	angular.element(window).scroll(function(){
		if(angular.element(window).scrollTop()>5){
			angular.element(".home-back").css({
				'top':'-100vh'
			});
		}
		else{
			angular.element(".home-back").css({
				'top':'0'
			});
		}
	});

}])
