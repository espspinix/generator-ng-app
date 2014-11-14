(function(){
    'use strict';

    /**
     * This is a sample service spec
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    describe('helpService', function() {

        var service;

        beforeEach(module('help'));

        beforeEach(inject(function(helpService){
            service = helpService;
        }));

        it('should return the content', inject(function(helpService) {

            expect(service.getHelpContent()).toBeDefined();

        }));

    });

})();
