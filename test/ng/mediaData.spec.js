describe('Media Data Factory', function() {
    beforeEach(angular.mock.module('main'))
    beforeEach(angular.mock.module('main.mediaApi'))
    beforeEach(angular.mock.module('main.mediaData'))
    var MediaData;

    beforeEach(inject(function(_MediaData_) {
        MediaData = _MediaData_
    }))

    it('should exist', function() {
        expect(MediaData).toBeDefined();
    });

    describe('getDataFromApi()', function() {
        it('exists', function() {
            expect(MediaData.getDataFromApi).toBeDefined();
        })
    })

});