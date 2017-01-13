angular.module('main')
.directive('mediaRow', function() {
    return {
        restrict: 'E',
        scope: {
            mediaList: '='
        },
        templateUrl: 'scripts/directives/media-row/media-row.html',
        controller: function($scope, $window, mediaData, MAX_VIEW_MEDIA_FOR_ROW_L, MAX_VIEW_MEDIA_FOR_ROW_S) {
            $scope.viewList = [];
            $scope.length = MAX_VIEW_MEDIA_FOR_ROW_L;
            $scope.hideLeftArrow = true;
            $scope.hideRightArrow = false;
            var indexStart = 0;

            var checkWidth = function(width) {
                $scope.length = width > 1024 ? MAX_VIEW_MEDIA_FOR_ROW_L : MAX_VIEW_MEDIA_FOR_ROW_S;
                $scope.length = ($scope.mediaList.length >= $scope.length) ? $scope.length : $scope.mediaList.length;
                getElements();
            };

            angular.element($window).bind('resize', function(){
                var width = $window.innerWidth;
                if ((width > 1024 && $scope.length === MAX_VIEW_MEDIA_FOR_ROW_L) || (width <= 1024 && $scope.length === MAX_VIEW_MEDIA_FOR_ROW_S)) {
                    return;
                }
                $scope.$apply(function () {
                    checkWidth(width);
                });   
            });


            var init = function() {
                checkWidth($window.innerWidth);
            };
            
            var getElements = function() {
                $scope.viewList = [];
                for (var i = indexStart ; i < $scope.length + indexStart ; i++) {
                    $scope.viewList.push($scope.mediaList[i]);
                }
            };

            init();

            $scope.next = function() {
                indexStart += 3;
                getElements();
            };

            $scope.previous = function() {
                indexStart -= 3;
                getElements();
            };
        }
    }

});