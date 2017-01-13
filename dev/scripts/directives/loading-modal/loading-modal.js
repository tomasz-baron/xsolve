angular.module('main')
.directive('loadingModal', ['$timeout', function($timeout) {
	return {
		templateUrl: 'scripts/directives/loading-modal/loading-modal.html',
		replace: true,
		link: function($scope, $elem, $attrs) {
			var count = 0,
				showLoader = function(event, eventData) {
					if (count === 0) {
						$elem.removeClass('closed');							
					}
					count++;
				},
				hideLoader = function(event, eventData) {
					if (count === 1) {
						$elem.addClass('closed');
					}
                    if (count > 0) {
                        count--;
                    }
				};


			$scope.$on('start.request', showLoader);
			$scope.$on('stop.request', hideLoader);
			$scope.$on('error.request', hideLoader);
		}
	};
}]);