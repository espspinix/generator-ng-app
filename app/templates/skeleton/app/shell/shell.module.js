(function () {
    'use strict';

    angular
        .module('shell', []);

    angular
        .module('shell') <% 
    if (!uirouter) { %>
        .config(function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'shell/templates/shell.html',
                controller: 'shellController',
                controllerAs: 'vm'
            });
            /* Add New Routes Above */
        });<%
    } %><% if (uirouter) { %>
        .config(function($stateProvider) {
            $stateProvider.state('shell', {
                url: '',
                templateUrl: 'shell/templates/shell.html',
                controller: 'shellController',
                controllerAs: 'vm'
            });
            /* Add New States Above */
        });<%
    } %>
})();
