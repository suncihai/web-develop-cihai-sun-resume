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

         // projects part
         .state('apps',{
            url: '/apps',
            templateUrl: 'src/templates/apps.html'
         })

         // test part
         .state('test',{
            url: '/apps/test',
            templateUrl: 'src/templates/test.html'
         })
        
         // contact part
         .state('contact',{
            url: '/contact',
            templateUrl: 'src/templates/contact.html'
         });
    }
})();
