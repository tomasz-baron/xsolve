angular.module('main', 
    [
        'main.mediaData',
        'main.mediaApi'        
    ])

.constant('MAX_MEDIA_FOR_ROW', 6)
.constant('MAX_VIEW_MEDIA_FOR_ROW_L', 3)
.constant('MAX_VIEW_MEDIA_FOR_ROW_S', 2)
.constant('API_URL', 'http://localhost:3000/api/media')

.controller('MainCtrl', ['$scope', 'ViewRows', function ($scope, ViewRows) {
    $scope.query = '';
    $scope.mediaRows = ViewRows.getRows();
    var loadedPage = false;

    $scope.$on('stop.request', function() {
        loadedPage = true;
    });
    
    var init = function() {
        ViewRows.initRows();
    }

    init();

    $scope.$watch('mediaRows.length', function() {
        $scope.noMoreAvailable = ViewRows.getNoMoreAvailable();
    });

    $scope.$watchGroup(['query', 'mediaRows.length'], function() {
        if (!loadedPage) return;
        ViewRows.compare($scope.query);
    });

    $scope.addRow = function() {
        ViewRows.addRows();
    };
}]);