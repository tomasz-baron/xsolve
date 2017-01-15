angular.module('main.mediaData', [])
.factory('MediaData', ['MediaApi', function(MediaApi) {
	var mediaItems = {},
		mediaItemsLength,
		moreAvailable,
		maxId;

	var add = function(item) {
		mediaItems[item.id] = {
			id: item.id, 
			url: item.images.standard_resolution.url, 
			text: item.caption.text,
			active: true
		};
	}; 

	var addAll = function(data) {
		moreAvailable = data.more_available;
		maxId = data.items[data.items.length - 1].id;
		for (item in data.items) {
			add(data.items[item]);
		}
		mediaItemsLength = Object.keys(mediaItems).length;
	};

	var getDataFromApi = function() {
		return MediaApi.getMedia(maxId).then(function(data) {
			addAll(data);
		});
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

	var getMoreAvailable = function() {
		return moreAvailable;
	};

	var getItemsLength = function() {
		return mediaItemsLength;
	};

	return {
		getMediaItems: getMediaItems,
		getMoreAvailable: getMoreAvailable,
		getItemsLength: getItemsLength,
		getDataFromApi: getDataFromApi,
		addAll: addAll
	};
}]);
