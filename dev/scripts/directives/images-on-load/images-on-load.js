angular.module('main')
.directive('imagesOnLoad', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function (scope, ele) {
            $timeout(function () {
                var images = ele.find('img');
                console.log(images);
                images[0].onload = function () {
                    console.log('first img is loaded');
                };
                images[1].onload = function () {
                    console.log('second img is loaded');
                };
            });
        }
    };
}]);