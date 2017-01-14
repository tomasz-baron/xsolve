describe('Media Api Service', function() {
    var MediaApi, 
        $q, 
        $httpBackend,
        API = 'http://localhost:3000/api/media',
        RESPONSE_SUCCESS = {
            "status":"ok",
            "items":[{
                "id":"1427030967931297044_1604178164",
                "images":{
                    "standard_resolution":{
                        "url":"https://instagram.com/1080/15877376_139094613257916_557033485647216640_n.jpg",
                        "width":640,
                        "height":640
                    }
                },
                "caption":{
                    "created_time":"1484335369",
                    "text":"Stories everywhere!",
                    "id":"17859214900107350"
                }
            }],
            "more_available":true
        };


    beforeEach(angular.mock.module('main'))
    beforeEach(angular.mock.module('main.mediaApi'))
    beforeEach(inject(function(_MediaApi_, _$q_, _$httpBackend_) {
        MediaApi = _MediaApi_;
        $q = _$q_;
        $httpBackend = _$httpBackend_;
        spyOn(MediaApi,"getMedia").and.callThrough();
    }))

    it('should exist', function() {
        expect(MediaApi).toBeDefined();
    });

    describe('getMedia()', function() {
        var result = {};

        it('exists', function() {
            expect(MediaApi.getMedia).toBeDefined();
        });

        it('should return array with 1 object', function() {
            $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS));
            expect(MediaApi.getMedia).not.toHaveBeenCalled();
            expect(result).toEqual({});
            MediaApi.getMedia()
            .then(function(res) {
                result = res;
            });
            $httpBackend.flush();

            expect(result.status).toEqual(RESPONSE_SUCCESS.status);
            expect(result.more_available).toEqual(RESPONSE_SUCCESS.more_available);
            expect(result.items[0].id).toEqual(RESPONSE_SUCCESS.items[0].id);
            expect(result.items[0].images.standard_resolution.resolution).toEqual(RESPONSE_SUCCESS.items[0].images.standard_resolution.resolution);
            expect(result.items[0].caption.text).toEqual(RESPONSE_SUCCESS.items[0].caption.text);
        });
    });

});