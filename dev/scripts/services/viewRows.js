angular.module('main.viewRows', [])
.factory('ViewRows', ['MediaData', 'MAX_MEDIA_FOR_ROW', function(MediaData, MAX_MEDIA_FOR_ROW) {
    var viewRows = [],
        query = '',
        noMoreAvailable,
        count;

    var pushNewRows = function() {
        viewRows.push(MediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
        noMoreAvailable = (!MediaData.getMoreAvailable() && MediaData.getItemsLength() === 0);
    };        
    
    var addRows = function() {
        if (MediaData.getItemsLength() < MAX_MEDIA_FOR_ROW && MediaData.getMoreAvailable()) {
            MediaData.getDataFromApi()
            .then(function(data) {
                pushNewRows();
            });
        } else if (MediaData.getItemsLength()){
            pushNewRows();
        }        
    };

    var initRows = function() {
         MediaData.getDataFromApi()
        .then(function(data) {
            viewRows.push(MediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
            viewRows.push(MediaData.getMediaItems(MAX_MEDIA_FOR_ROW));
        });
    };
    
    var getRows = function() {
        return viewRows;
    };

    var getNoMoreAvailable = function() {
        return noMoreAvailable;
    };

    var compareWithQuery = function() {
        var items = [];
        count = 0;
        for (row in viewRows) {
            items = viewRows[row]
            for (var i = 0; i < items.length; i++) {
                if (items[i].text.indexOf(query) != -1 && items[i].visible) {
                    items[i].active = true;
                    count++;
                } else {
                    items[i].active = false;
                }       
            }
        }
    };

    var compare = function(searchQuery) {
        query = searchQuery;
        compareWithQuery();
        return count;
    };    

	return {
        getRows: getRows,
        addRows: addRows,
        initRows: initRows,
        compare: compare,
        getNoMoreAvailable: getNoMoreAvailable
	};
}]);