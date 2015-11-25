(function () {
    'use strict';

    angular
        .module('common', ['ui.bootstrap', 'ui.utils', '<%= routerModuleName %>', 'ngAnimate', 'angular-loading-bar']);

    angular
        .module('common') <% 
    if (!uirouter) { %>
        .config(function($routeProvider) {

            /* Add New Routes Above */
        });<% 
    } %><% if (uirouter) { %>
        .config(function($stateProvider) {

        	/* Add New States Above */
    	});<% 
    } %>
})();
