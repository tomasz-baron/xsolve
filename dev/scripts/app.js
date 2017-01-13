angular.module('main', [])

.constant('MAX_MEDIA_FOR_ROW', 6)
.constant('MAX_VIEW_MEDIA_FOR_ROW', 3)
.constant('API_URL', 'http://localhost:3000/api/media')

.controller('mainCtrl', ['$scope', 'mediaApi', 'mediaData', 'viewRows', 'MAX_MEDIA_FOR_ROW', function ($scope, mediaApi, mediaData, viewRows, MAX_MEDIA_FOR_ROW) {
    //$scope.mediaRows = [];
    $scope.query = '';
    $scope.itemSize;  
    $scope.mediaRows = viewRows.getRows();
    var loadedPage = false;
    $scope.$on('stop.request', function() {
        loadedPage = true;
    });
    
    var init = function() {
        viewRows.initRows();
    }

    init();

    $scope.$watchGroup(['query', 'mediaRows.length'], function() {
        if (!loadedPage) return;
        viewRows.compare($scope.query);
    });

    $scope.addRow = function() {
        viewRows.addRows();
    };
}]);