(function() {
    'use strict';
    
    /**
     * This is the <%= _.camelize(name) %> module
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    angular
        .module('<%= _.camelize(name) %>', []);

    <%
    if (!uirouter) { %>
        angular
            .module('<%= _.camelize(name) %>')
            .config(function($routeProvider) {

                /* Add New Routes Above */

            }); <%
    } %> <%
    if (uirouter) { %>
        angular
            .module('<%= _.camelize(name) %>')
            .config(function($stateProvider) {

                /* Add New States Above */

            }); <%
    } %>
})();
