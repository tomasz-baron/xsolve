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
        "s",
        "d"
    ]
}]);