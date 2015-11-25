(function () {
    'use strict';

    angular
        .module('home', []);

    angular
        .module('home') <% 
    if (!uirouter) { %>
        .config(function($routeProvider) {
            $routeProvider.when('/home', {
                templateUrl: 'home/templates/home-template.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });
            /* Add New Routes Above */
        });<% 
    } %><% if (uirouter) { %>
        .config(function($stateProvider) {
            $stateProvider.state('shell.home', {
                url: '/home',
                templateUrl: 'home/templates/home-template.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });
            /* Add New States Above */
        });<% 
    } %>
})();
