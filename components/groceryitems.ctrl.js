(function(){

	angular
	.module('boaml')
	.controller('groceryitemsCtrl', function($scope, groceryitemsFactory, $http) {
	
		// This is where main logic goes.	
	$scope.categories = new Object();
	$scope.groceryitems = new Array();


	$http.get('data/pic.json').then(function(res){
		//console.log(res.data);
		$scope.categories = res.data;
	})
		
	groceryitemsFactory.getItems().then(function(res){
		$scope.groceryitems = res.data;
		updateCat();
	})	
	
	function updateCat() {
		//console.log(this);
		$scope.groceryitems.forEach(function(item) {
			var x = item["category"];
			console.log(x);
			//console.log(Object.keys($scope.categories));
			var link = $scope.categories[x];
			console.log(link);
			item["category"] = link;
			console.log(item["category"]);
			console.log("----");
		});
	}

	});

})();