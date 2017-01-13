angular.module('main')
.factory('viewRows', ['mediaData', 'MAX_MEDIA_FOR_ROW', function(mediaData, MAX_MEDIA_FOR_ROW) {
    var viewRows = [],
        query = '';

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

    var initRows = function() {
         mediaData.getDataFromApi()
        .then(function(data) {
            viewRows.push(mediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
            viewRows.push(mediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
        });
    };
    
    var getRows = function() {
        return viewRows;
    };

    var compare = function(searchQuery) {
        query = searchQuery;
        compareWithQuery();
    };

    var compareWithQuery = function() {
        var items = [];
        for (row in viewRows) {
            items = viewRows[row]
            for (var i = 0; i < items.length; i++) {
                if (items[i].text.indexOf(query) != -1) {
                    items[i].active = true;
                } else {
                    items[i].active = false;
                }       
            }
        }
    };    

	return {
        getRows: getRows,
        addRows: addRows,
        initRows: initRows,
        compare: compare
	};
}]);