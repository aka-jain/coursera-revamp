app.controller('home', ['$scope','partData','instData','courseData','content', function ($scope,partData,instData,courseData,content) {




// console.log($scope.topic)
	$scope.search_topic=function(){
		// console.log($scope.topic)
	}

	partData.success(function(data){
		$scope.partners=data;
		$scope.univ_name=$scope.partners.elements[0].name;
		$scope.top_univ_name=$scope.partners.elements[0].name;

	});
	instData.success(function(data){
		$scope.img_data=data;
		
	});
	courseData.success(function(course_data){

		$scope.val=course_data;
			// console.log($scope.val.elements[1].id);
			$scope.course_name=$scope.val.elements[0].name;
			$scope.top_course_name=$scope.val.elements[0].name;
		
		// funcitons for top specifications
			$scope.spec_detail=function(index){

		$scope.course_name=$scope.val.elements[index].name;
		$scope.univ_name=$scope.partners.elements[index].name;
		$scope.cont_para=$scope.cont[index].content;
		$scope.cont_course=$scope.cont[index].courses_no;


	}
	// function for top details
	$scope.top_detail=function(index){

		$scope.top_course_name=$scope.val.elements[index].name;
		$scope.top_univ_name=$scope.partners.elements[index].name;
		$scope.top_cont_para=$scope.cont[index].content;
		$scope.top_cont_course=$scope.cont[index].courses_no;
		

	}


	

	// for(i in $scope.val.elements){
	// 	var name=$scope.val.elements[i].name;
	// 	console.log(name);
	// 	if(angular.lowercase($scope.topic).indexOf(angular.lowercase(name))>=0){
	// 		alert("");
	// 		break;
	// 	}
	// 	// console.log($scope.val.elements[i].name)
	// }


	});
	content.success(function(data){
		$scope.cont=data;
		$scope.cont_para=$scope.cont[0].content;
		$scope.cont_course=$scope.cont[0].courses_no;

		$scope.top_cont_para=$scope.cont[0].content;
		$scope.top_cont_course=$scope.cont[0].courses_no;

	});
	


	angular.element(window).scroll(function(){

		var win_height=angular.element(window).outerHeight();

		if(angular.element(window).scrollTop()>5){
			angular.element("header ul li ").css({
				'margin-right':'-150px'
			});
		}
		else{
			angular.element("header ul li ").css({
				'margin-right':'0'
			});
		}

	

		if(angular.element(window).scrollTop()>win_height/4){
			angular.element(".header-sec").addClass("move-sec-header");
			angular.element(".header-sec-mob .search-hor").addClass("header-sec-mob-top");

		}
		else{
			angular.element(".header-sec").removeClass("move-sec-header");
				angular.element(".header-sec-mob .search-hor").removeClass("header-sec-mob-top");
		}
			
	});


	// mobile-menu 

	angular.element(".cross ").hide();

	angular.element(".bars i").click(function(){
		// alert("")
		angular.element(".mob-menu").css({
			'height':'240px'
		})
		angular.element(".mob-menu ul li").css({
			'height':'30px'
		})
		angular.element(".bars ").hide();
		angular.element(".cross ").fadeIn();
	})


	angular.element(".cross i,.mob-menu ul li a").click(function(){
		// alert("")
		angular.element(".mob-menu,.mob-menu ul li").css({
			'height':'0px'
		})
		
		angular.element(".bars ").fadeIn();
		angular.element(".cross ").hide();
	})

	var num_child = angular.element(".institute-inner ul").children();
	var count=num_child.length;
	var inner_width=0;

	


	angular.element(".left").click(function(){

		angular.element(".institute-outer").animate({
			scrollLeft: "-=210"
		},300)
	});
	angular.element(".right").click(function(){
		angular.element(".institute-outer").animate({
			scrollLeft: "+=210"
		},300)
	});


	angular.element(".left-spec").click(function(){
		angular.element(".spec-outer").animate({
			scrollLeft: "-=180"
		},300)
	});
	angular.element(".right-spec").click(function(){
		angular.element(".spec-outer").animate({
			scrollLeft: "+=180"
		},300)
	});

	angular.element(".left-spec-related").click(function(){
		angular.element(".spec-outer-related").animate({
			scrollLeft: "-=180"
		},300)
	});
	angular.element(".right-spec-related").click(function(){
		angular.element(".spec-outer-related").animate({
			scrollLeft: "+=180"
		},300)
	});



	angular.element(".specialization-inner ul li").click(function(){
		angular.element(this).siblings().removeClass("active-list");
		angular.element(this).addClass("active-list")
	})

		angular.element(".cross-slide").hide();

	angular.element(".slider i").click(function(){
		angular.element(".filter-search").css({
			'height':'600px',
			'width':'100%',
			'top':'70px',
			'left':'0px',
			'padding':'20px 40px' ,
			'border-radius':'0px'

		})

		angular.element(".slider ").hide();
		angular.element(".cross-slide").fadeIn();
	})

	angular.element(".cross-slide i").click(function(){
		angular.element(".filter-search").css({
			'height':'0px',
			
			'padding':'0px'

		})

		angular.element(".slider ").fadeIn();
		angular.element(".cross-slide").hide();
	})

}])
