angular.module('main')
.directive('searchField', function() {
    return {
        restrict: 'E',
        scope: {
            query: '='
        },
        templateUrl: 'scripts/directives/search-field/search-field.html'
    }

});