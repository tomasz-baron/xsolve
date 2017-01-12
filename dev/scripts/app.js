angular.module('main', [])
// .config(function($sceDelegateProvider) {
//  $sceDelegateProvider.resourceUrlWhitelist([
//    'self',
//    'https://www.instagram.com/xsolvesoftware/**']);
//  })
.controller('mainCtrl', ['$scope', 'mediaApi', function ($scope, mediaApi) {
    mediaApi.getMedia()
    .then(function (response) {
        var s = response;
    }, function (response) {
        console.log('Error' + response);
    });

    $scope.aa = [
        {url: 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c95.0.890.890/15275675_356881838009527_2268191809773502464_n.jpg?ig_cache_key=MTQwNjkzODU1MjcyNTc4NjEwNw%3D%3D.2.c', text: 'XSolve and Chilid Awards winners!'},
        {url: 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c95.0.890.890/15275675_356881838009527_2268191809773502464_n.jpg?ig_cache_key=MTQwNjkzODU1MjcyNTc4NjEwNw%3D%3D.2.c', text: 'XSolve and Chilid Awards winners!'},
        {url: 'https://scontent-waw1-1.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/c95.0.890.890/15275675_356881838009527_2268191809773502464_n.jpg?ig_cache_key=MTQwNjkzODU1MjcyNTc4NjEwNw%3D%3D.2.c', text: 'XSolve and Chilid Awards winners!'}
    ];

    $scope.query = 'Test';
    $scope.itemSize = 2;
}]);