angular.module('main')
.factory('viewRows', ['mediaData', 'MAX_MEDIA_FOR_ROW', function(mediaData, MAX_MEDIA_FOR_ROW) {
    var viewRows = [];

    var addRows = function() {
        if (mediaData.getItemsLength() < MAX_MEDIA_FOR_ROW && mediaData.getMoreAvaible()) {
            mediaData.getDataFromApi()
            .then(function(data) {
                viewRows.push(mediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
            });
        } else {
            viewRows.push(mediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
        }
        
    }; 
    
    var get = function() {
        return viewRows;
    };

	return {
        get: get,
        addRows: addRows
	};
}]);
