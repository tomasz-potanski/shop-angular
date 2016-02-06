angular.module('shopApp')
  .factory('ShopFactory',
    ['$q', '$http', '$location',
      function ShopFactory ( $q, $http, $location ) {
        'use strict';
        var exports = {};

        exports.items = [];

        exports.goToItem = function(id) {
          if ( angular.isNumber(id) ) {
            $location.path('shop/item/' + id)
          }
        };

        exports.getItems = function () {
          var deferred = $q.defer();
          return $http.get('json/items.json')
            .success(function (data) {
              exports.items = data;
              deferred.resolve(data);
            })
            .error(function (data) {
              deferred.reject(data);
            });
          return deferred.promise;
        };

        return exports;
      }]);
