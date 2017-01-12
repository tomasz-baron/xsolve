angular.module('main', [
    'hj.imagesLoaded'
])

.constant('MAX_MEDIA_FOR_ROW', 3)

.controller('mainCtrl', ['$scope', 'mediaApi', 'mediaData', function ($scope, mediaApi, mediaData) {
    $scope.mediaRows = [];
    $scope.query = '';
    $scope.itemSize;

    $scope.$on('imagesLoaded:loaded', function(event, element){
			console.log('loaded');
		});
        var ctrl = this;

    ctrl.imgLoadedEvents = {

			always: function(instance) {
				// Do stuff
			},

			done: function(instance) {
				angular.element(instance.elements[0]).addClass('loaded');
			},

			fail: function(instance) {
				// Do stuff
			}

		};    

    var init = function() {
        mediaApi.getMedia()
        .then(function (response) {
            mediaData.addAll(response.data);
            addMediaRow(3);
            addMediaRow(3);
        }, function (response) {
            console.log('Error' + response);
        });
    }

    var getMedia = function(max_id) {
        mediaApi.getMedia(max_id)
        .then(function (response) {
            mediaData.addAll(response.data);
        }, function (response) {
            console.log('Error' + response);
        });
    }

    init();

    $scope.addRow = function() {
        addMediaRow(3);
    };

    var addMediaRow = function(count) {
        if (mediaData.getItemsLength() < count && mediaData.getMoreAvaible()) {
            getMedia(mediaData.getMaxId());
        } else {
            $scope.mediaRows.push(mediaData.getMediaItems(3));
        }      
    }
   

    $scope.aa = [
        {url: 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c95.0.890.890/15275675_356881838009527_2268191809773502464_n.jpg?ig_cache_key=MTQwNjkzODU1MjcyNTc4NjEwNw%3D%3D.2.c', text: 'XSolve and Chilid Awards winners!'},
        {url: 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c95.0.890.890/15275675_356881838009527_2268191809773502464_n.jpg?ig_cache_key=MTQwNjkzODU1MjcyNTc4NjEwNw%3D%3D.2.c', text: 'XSolve and Chilid Awards winners!'},
        {url: 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c95.0.890.890/15275675_356881838009527_2268191809773502464_n.jpg?ig_cache_key=MTQwNjkzODU1MjcyNTc4NjEwNw%3D%3D.2.c', text: 'XSolve and Chilid Awards winners!'}
    ];
}]);