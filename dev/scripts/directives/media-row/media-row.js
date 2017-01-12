angular.module('main')
.directive('mediaRow', function() {
    return {
        restrict: 'E',
        scope: {
            mediaList: '='
        },
        templateUrl: 'scripts/directives/media-row/media-row.html',
        controller: function($scope, mediaData, MAX_MEDIA_FOR_ROW) {
            $scope.viewList = [];
            var init = function() {
                var length = ($scope.mediaList.length >= MAX_MEDIA_FOR_ROW) ? MAX_MEDIA_FOR_ROW : $scope.mediaList.length;
                for (var i = 0 ; i < length ; i++) {
                    $scope.viewList.push($scope.mediaList[i]);
                }
            }
            init();
        }
    }

});