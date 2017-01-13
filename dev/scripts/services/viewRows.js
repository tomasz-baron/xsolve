angular.module('main')
.factory('viewRows', ['mediaData', 'MAX_MEDIA_FOR_ROW', function(mediaData, MAX_MEDIA_FOR_ROW) {
    var viewRows = [],
        query = '',
        noMoreAvailable;

    var addRows = function() {
        if (mediaData.getItemsLength() < MAX_MEDIA_FOR_ROW && mediaData.getMoreAvailable()) {
            mediaData.getDataFromApi()
            .then(function(data) {
                pushNewRows();
            });
        } else if (mediaData.getItemsLength()){
            pushNewRows();
        }        
    };
    var pushNewRows = function() {
        viewRows.push(mediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
        noMoreAvailable = (!mediaData.getMoreAvailable() && mediaData.getItemsLength() === 0);
    } ;

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

    var getNoMoreAvailable = function() {
        return noMoreAvailable;
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
        compare: compare,
        getNoMoreAvailable: getNoMoreAvailable
	};
}]);