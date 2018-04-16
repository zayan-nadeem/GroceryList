(function(){

	angular
	.module('boaml')
	.controller('groceryitemsCtrl', function($scope, groceryitemsFactory) {
	
		// This is where main logic goes.	
		
	groceryitemsFactory.getItems().then(function(res){
		$scope.groceryitems = res.data;
	})	
		

	});

})();