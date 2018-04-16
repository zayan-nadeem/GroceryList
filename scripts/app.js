angular
.module('boaml', ['ngMaterial'])
.config(function ($mdThemingProvider) {
	//AngularMaterial gives alot of directives/elements just
	//makes the app building faster

	//Themeing Provider - allows to define theme for application
	$mdThemingProvider.theme('default')
		.primaryPalette('teal')
		.accentPalette('red');
});