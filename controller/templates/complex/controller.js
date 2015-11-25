(function() {
    'use strict';

    /**
     * This is the <%= _.classify(className) %> controller
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    function <%= _.classify(className) %>() {
        var vm = this;

        vm.model = {};
    }

    angular
        .module('<%= appname %>')
        .controller('<%= _.camelize(className) %>', <%= _.classify(className) %>);
})();
