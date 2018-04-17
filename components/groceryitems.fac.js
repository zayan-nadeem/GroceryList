(function() {
	"use strict";

	angular
		.module('boaml')
		.factory('groceryitemsFactory', function($http){
			
			//Factories use Singleton pattern
			//Here you create obj, add properties and return
			var returnobj = new Object();

			
			
			returnobj.getItems = function() {
				return $http.get('data/data.json');
			}


			return returnobj;

		});

})()