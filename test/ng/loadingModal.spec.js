describe('Loading Modal Directive', function() {
    var scope,
        element,
        expected = '\n    <div class="message">Loading...</div>\n    <div class="background-modal"></div>\n';
        
    beforeEach(module('main'));
    beforeEach(module('scripts/directives/loading-modal/loading-modal.html'));
        
    beforeEach(inject(function($compile, $rootScope){
        scope = $rootScope;
        element = angular.element('<loading-modal></loading-modal>');
        $compile(element)(scope);
        scope.$digest();
    }));
        
    it('Replaces the element with the appropriate content', function() {
        expect(element.html()).toContain(expected);
    });
});