(function() {
    var bundlePath = 'http://localhost:8000/';
    $('head').append('<link rel="stylesheet" href="' + bundlePath + 'index.css' + '"></link>');
    $('head').append('<script src="' + bundlePath + 'index.js' + '"></script>');
}());
