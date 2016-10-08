angular.route('app.home/index', function(
    $scope,
    $state,
    $log,
    $timeout
) {

    var delay = $timeout(function() {
        $timeout.cancel(delay);

        $scope.model = {};
    }, 700);


});
