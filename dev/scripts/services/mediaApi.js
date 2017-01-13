angular.module('main')
.service('mediaApi', ['$rootScope', '$http', 'API_URL', function($rootScope, $http, API_URL) {    
    this.getMedia = function(max_id) {   
        var url = API_URL;
        $rootScope.$broadcast('start.request');
        return $http({
            method: 'GET',
            url: url, 
            params: {
                max_id: max_id
            }
        })
        .then(function (response) {
             $rootScope.$broadcast('stop.request');
             return response.data;
        }, function (response) {
             $rootScope.$broadcast('error.request');
             return {};
        }); 
    };
}]);