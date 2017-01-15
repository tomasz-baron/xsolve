angular.module('main', 
	[
		'main.mediaData',
		'main.mediaApi',
		'main.viewRows',
		'main.limitText'   
	])

.constant('MAX_MEDIA_FOR_ROW', 6)
.constant('MAX_VIEW_MEDIA_FOR_ROW_L', 3)
.constant('MAX_VIEW_MEDIA_FOR_ROW_S', 2)
.constant('API_URL', 'http://localhost:3000/api/media')

.controller('MainCtrl', ['$scope', 'ViewRows', function ($scope, ViewRows) {
	$scope.query = '';
	$scope.mediaRows = ViewRows.getRows();
	$scope.selectedItems = 0;
	$scope.loadedPage = false;

	$scope.$on('stop.request', function() {
		$scope.loadedPage = true;
	});
    
	var init = function() {
		ViewRows.initRows();
	};

	init();

	$scope.$watch('mediaRows.length', function() {
		$scope.noMoreAvailable = ViewRows.getNoMoreAvailable();
	});

	$scope.$watch('mediaRows', function() {
		if (!$scope.loadedPage) {return;}
		$scope.selectedItems = ViewRows.compare($scope.query);
	}, true);

	$scope.$watch('query', function() {
		if (!$scope.loadedPage) {return;}
		$scope.selectedItems = ViewRows.compare($scope.query);
	});

	$scope.addRow = function() {
		ViewRows.addRows();
	};
}]);