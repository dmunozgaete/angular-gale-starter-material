angular.route('boot/index', function(
    $scope,
    $log,
    $Configuration,
    $location
) {

    // --------------------------------
    var path = $location.search().path;
    //Reset when path are in "boot" or "exception"
    if (path.length <= 2 ||
        path.indexOf("/boot") === 0 ||
        path.indexOf("exception") > 0) {
        var url = $Configuration.get("application");
        path = url.home;
    }

    $location.url(path);
    // --------------------------------

});
