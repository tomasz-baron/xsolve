angular.module('main')
.directive('mediaRow', function() {
    return {
        restrict: 'E',
        scope: {
            mediaList: '='
        },
        templateUrl: 'scripts/directives/media-row/media-row.html'
    }

});