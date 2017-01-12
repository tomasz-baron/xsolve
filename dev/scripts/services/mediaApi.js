angular.module('main')
.service('mediaApi', ['$http', function($http) {    
    this.getMedia = function(max_id) {   
        var url = 'http://localhost:3000/api/media';
        return $http({
            method: 'GET',
            url: url, 
            params: {
                max_id: max_id
            }
        });  
    };
}]);