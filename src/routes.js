(function() {
    'use strict'

    angular.module("cihaisunApp")
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
    	$urlRouterProvider.otherwise('/');

    	 $stateProvider

    	 .state('home', {
    	 	url:'/',
    	 	templateUrl: 'src/templates/home.html'
    	 })

    	 // experience part
    	 .state('experience', {
    	 	url: '/experience',
    	 	templateUrl: 'src/templates/experience.html'
    	 })

    	 // projects part
    	 .state('projects',{
    	 	url: '/projects',
    	 	templateUrl: 'src/templates/projects.html'
    	 })
        
         // contact part
         .state('contact',{
            url: '/contact',
            templateUrl: 'src/templates/contact.html'
         });
    }
})();
