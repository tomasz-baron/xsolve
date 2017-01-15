describe('Limit Text Filter', function() {
    beforeEach(angular.mock.module('main.limitText'))
    var limitTextFilter;

    beforeEach(inject(function($filter) {
        limitTextFilter = $filter('limitText');
    }));

    it('should return empty text', function() {
        expect(limitTextFilter('')).toEqual('');
    });

    it('should return whole text', function() {
        expect(limitTextFilter('short text')).toEqual('short text');
    });

    var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing sed.';
    var textFromFilter = 'Lorem ipsum dolor sit amet, consectetur \u2026';

    it('should return short text', function() {
        expect(limitTextFilter(text, 40)).toEqual(textFromFilter);
    });

    it('should return the same text', function() {
        expect(limitTextFilter(text)).toEqual(text);
    });
});