/*
    Gale SDK:               GALE CORE MODULES
    app:                    CUSTOM PROJECT LIBRARY
    material-icons:         CUSTOM PROJECT BUNDLES (ADD SVG ICON'S)
*/
angular.module('App', [
        'gale',
        'app',
        'material-icons'
    ])
    .run(function($location) {

        //REDIRECT TO MAIN HOME (ONLY WHEN NO HAVE PATH)
        var currentPath = $location.url();
        var boot = $location.path("boot").search({
            path: currentPath
        });

        $location.url(boot.url());

    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink')
            .warnPalette('red');
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: "/app",
                abstract: true,
                // ---------------------------------------------
                // ONE-PAGE COLUMNS TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/default.html",
                controller: "DefaultLayoutController"
            })
            .state('exception', {
                url: "/exception",
                abstract: true,
                // ---------------------------------------------
                // EXCEPTION TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/exception.html",
                controller: "ExceptionLayoutController"
            });
        $urlRouterProvider.otherwise(function($injector, $location) {
            if ($location.path() !== "/") {
                var $state = $injector.get("$state");
                var $log = $injector.get("$log");

                $log.error("404", $location);
                $state.go("exception.error/404");
            }
        });
    })
    .config(function($logProvider, CONFIGURATION) {
        $logProvider.debugEnabled(CONFIGURATION.debugging || false);
    });
