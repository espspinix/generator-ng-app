(function(){
    'use strict';

    /**
     * This is a sample service spec
     * Generated by ng-appgen Yeomen/Angular generator.
     *
     * @author: Tapas Jena
     * @copyright: Anitech Consulting Services Pvt Ltd.
     */
    describe('homeService', function() {

        var service;

        beforeEach(module('home'));

        beforeEach(inject(function(homeService){
            service = homeService;
        }));

        it('should return welcome message', function() {

            expect(service.getMessage()).toEqual('Congratulations! Your app is fully up and running.');

        });

    });

})();
