describe('Main Controller', function() {
    var scope, MainCtrl;
    beforeEach(angular.mock.module('main'))

    var mockViewRows = {};
    beforeEach(inject(function($q) {
        mockViewRows.fetch = function() {

        }

    }));
    
    
    

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            '$scope': scope
        });
    }))

    it('should exist', function() {
        expect(MainCtrl).toBeDefined();
    });

    it('should have scope variable', function() {
        expect(scope.query).toEqual('');    
    });

    it('should run $watch', function() {
        scope.query = 'a';
    });

});