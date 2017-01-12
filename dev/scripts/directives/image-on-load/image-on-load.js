angular.module('main')
.directive('imageOnLoad', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                console.log('image is loaded');
            });
        }
    };
});