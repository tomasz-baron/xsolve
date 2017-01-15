angular.module('main.limitText', [])
.filter('limitText', function () {
    return function (value, length) {
        if (!value) return '';
        length = parseInt(length);
        
        if (!length) return value;   
        if (value.length <= length) return value;
        
        value = value.substr(0, length);
        return value + '\u2026';
    };
});