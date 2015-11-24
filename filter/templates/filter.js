(function() {
    'use strict';

    /**
     * This is the <%= _.classify(name) %> filter
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    function <%= _.classify(name) %>() {
        return function (input, arg) {
            return input;
        };
    }

    angular
        .module('<%= appname %>')
        .filter('<%= _.camelize(name) %>', <%= _.classify(name) %>);
})();
