(function() {
    'use strict';

    /**
     * This is the <%= _.classify(name) %> service
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    function <%= _.classify(name) %>() {

        //always bind to an object.property
        var model = {
            data: null
        };

        /**
         * doSomething() - Private function
         */
        function doSomething() {
            // add logic here...
        }

        var service = {
            doSomething: doSomething,
            get data() {
                return model.data;
            },
            set data(val) {
                model.data = val;
            }
        };

        return service;
    }

    angular
        .module('<%= appname %>')
        .factory('<%= _.camelize(name) %>', <%= _.classify(name) %>);
})();
