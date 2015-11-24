(function() {
    'use strict';

    /**
     * This is the <%= _.classify(name) %> filter
     *
     * @author: <%= author %>
     * @copyright: <%= copyright %>
     */
    describe('<%= _.camelize(name) %>', function() {
        var filter;

        beforeEach(function() {
            module('<%= appname %>');

            inject(function($filter) {
                filter = $filter('<%= _.camelize(name) %>');
            });
        });

        it('should ...', function() {
            //TODO: Implement your filter spec logic here
            //expect(filter('input')).toEqual('output');
        });
    });
})();
