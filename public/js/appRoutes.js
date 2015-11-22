angular.module('appRoutes', []).config(
    ['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/shop', {
            templateUrl: 'views/home.html',
            controller: 'MainController',
            controllerAs: 'shopCtrl'
        })
        .when('/shop/item/:id', {
            templateUrl: 'views/item.html',
            controller: 'ItemController',
            controllerAs: 'itemCtrl'
        } )
        .otherwise({
          redirectTo: '/shop'
        });

    $locationProvider.html5Mode(true);

}]);