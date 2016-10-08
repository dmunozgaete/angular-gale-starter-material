angular.module('app.layouts').controller('DefaultLayoutController', function(
    $scope,
    $mdSidenav,
    $state,
    $log,
    $Configuration,
    $timeout,
    $Api,
    $location,
    $Identity
) {

    //------------------------------------------------------------------------------------
    // Model
    $scope.config = {
        application: $Configuration.get("application")
    };

    //------------------------------------------------------------------------------------
    // Bootstrapping : Get the Menu 
    $scope.config.menu = [{
        "name": "General",
        "token": "7414aa4e-c330-49b5-85dd-d065b57dd08d",
        "open": true,
        "items": [{
            "name": "Item 1",
            "icon": "action:trending_up",
            "url": "app/home/index"
        }]
    }, {
        "name": "Adminisraci\u00f3n",
        "token": "e76cb09e-2f32-4e3b-8201-89794d1ea1cf",
        "open": true,
        "items": [{
            "name": "Item 2",
            "icon": "action:supervisor_account",
            "url": "app/home/index"
        }, {
            "name": "Item 3",
            "icon": "maps:layers",
            "url": "app/home/index"
        }]
    }];

    //------------------------------------------------------------------------------------
    // Layout Actions
    $scope.link = function(url) {
        $timeout(function() {
            $location.url(url);
        }, 300);
        $mdSidenav('layout-nav-left').close();
    };

    $scope.toogleMenu = function(side) {
        $mdSidenav(side).toggle();
    };

    $scope.toggleSection = function(section) {
        section.open = !section.open;
    };

    $scope.navigateTo = function(item) {
        $scope.link(item.url);
    };

    $scope.logout = function() {
        $Identity.logOut();
    };
});
