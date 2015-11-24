(function() {
    'use strict';

    /**
     * This is the <%= _.classify(name) %> directive
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    function <%= _.classify(name) %>() {
        /**
         * Directives link function
         */
        function link(scope, element, attr, controllers) {
            // add logic here
        }

        var directive = {
            restrict: 'EA',
            link: link
        };

        return directive;
    }

    angular
        .module('<%= appname %>')
        .directive('<%= _.camelize(name) %>', <%= _.classify(name) %>);
})();
