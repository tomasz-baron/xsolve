angular.module('main')
.factory('mediaData', function() {
    var mediaItems = {},
        mediaItemsLength,
        moreAvailable,
        maxId;

    var add = function(item) {
        mediaItems[item.id] = item;
    }; 

    var addAll = function(data) {
        moreAvailable = data.more_available;
        maxId = data.items[data.items.length - 1].id;
        for (item in data.items) {
            add(data.items[item]);
        }
        mediaItemsLength = Object.keys(mediaItems).length;
    };
    
    var remove = function(item) {
        delete mediaItems[item.id];
    };
    
    var getMediaItems = function(count) {
        var length = (mediaItemsLength >= count) ? count : mediaItemsLength;
        var itemList = [];
        var item;
        for (var i = 0 ; i < length ; i++) {
            item = Object.values(mediaItems)[0];
            remove(item);
            itemList.push(item);
        }
        mediaItemsLength = Object.keys(mediaItems).length;
        return itemList;
    };

    var getMaxId = function() {
        return maxId;
    };

    var getMoreAvaible = function() {
        return moreAvailable;
    }

    var getItemsLength = function() {
        return mediaItemsLength;
    }

	return {
        getMediaItems: getMediaItems,
        getMaxId: getMaxId,
        getMoreAvaible: getMoreAvaible,
        getItemsLength: getItemsLength,
        addAll: addAll,
        remove: remove
	};
});
