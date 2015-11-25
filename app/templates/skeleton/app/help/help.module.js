(function () {
    'use strict';

    angular
        .module('help', []);

    angular
        .module('help') <% 
    if (!uirouter) { %>
        .config(function($routeProvider) {
            $routeProvider.when('/help', {
                templateUrl: 'help/templates/help-template.html',
                controller: 'helpController',
                controllerAs: 'vm'
            });
            /* Add New Routes Above */
        });<% 
    } %><% if (uirouter) { %>
        .config(function($stateProvider) {
            $stateProvider.state('shell.help', {
                url: '/help',
                views: {
                    'contentView': {
                        templateUrl: 'help/templates/help-template.html',
                        controller: 'helpController',
                        controllerAs: 'vm'
                    }
                }
            });
            /* Add New States Above */
        });<% 
    } %>
})();
