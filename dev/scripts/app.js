angular.module('main', [])

.constant('MAX_MEDIA_FOR_ROW', 6)
.constant('MAX_VIEW_MEDIA_FOR_ROW', 3)
.constant('API_URL', 'http://localhost:3000/api/media')

.controller('mainCtrl', ['$scope', 'mediaApi', 'mediaData', 'viewRows', 'MAX_MEDIA_FOR_ROW', function ($scope, mediaApi, mediaData, viewRows, MAX_MEDIA_FOR_ROW) {
    //$scope.mediaRows = [];
    $scope.query = '';
    $scope.itemSize;  
    $scope.mediaRows = viewRows.get();
    
    var init = function() {
        mediaApi.getMedia().then(function(data) {
            mediaData.addAll(data);
            viewRows.addRows();
            viewRows.addRows();
		});
    }

    init();

    $scope.$watch('query', function() {
        console.log($scope.query);
    });

    $scope.addRow = function() {
        viewRows.addRows();
    };
}]);