angular.module('main')
.directive('mediaItem', function() {
    return {
        restrict: 'E',
        scope: {
            text: '=',
            url: '='            
        },
        templateUrl: 'scripts/directives/media-item/media-item.html'
    }

});