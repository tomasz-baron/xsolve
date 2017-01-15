angular.module('main')
.directive('mediaItem', function() {
	return {
		restrict: 'E',
		scope: {
			text: '=',
			url: '=',
			active: '='          
		},
		templateUrl: 'scripts/directives/media-item/media-item.html'
	}
});