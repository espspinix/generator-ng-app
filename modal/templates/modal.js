(function() {
    'use strict';

    /**
     * This is the <%= _.classify(name) %> modal
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    function <%= _.classify(name) %>() {
        var vm = this;
    }

    angular
        .module('<%= appname %>')
        .controller('<%= _.camelize(name) %>', <%= _.classify(name) %>);
})();
