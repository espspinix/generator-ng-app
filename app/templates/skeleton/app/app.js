(function() {
    'use strict';

    /**
     * This is the main app module for <%= _.camelize(appname) %>
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    angular.module('<%= _.camelize(appname) %>', ['<%= routerModuleName %>', 'common', 'shell', 'home', 'help']);

    angular
        .module('<%= _.camelize(appname) %>') <% 
    if (uirouter) { %>
        .config(function($stateProvider, $urlRouterProvider) {

            /* Add New States Above */
            $urlRouterProvider.otherwise('/home');
        }); <% 
    } %> <% if (!uirouter) { %>
        .config(function($routeProvider) {

            /* Add New Routes Above */
            $routeProvider.otherwise({redirectTo:'/home'});
    }); <% 
    } %>

    angular
        .module('<%= _.camelize(appname) %>')
        .run(function($rootScope) {
            $rootScope.safeApply = function(fn) {
                var phase = $rootScope.$$phase;
                if (phase === '$apply' || phase === '$digest') {
                    if (fn && (typeof (fn) === 'function')) {
                        fn();
                    }
                } else {
                    this.$apply(fn);
                }
            };
        });
})();
