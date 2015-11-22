angular.module('MainCtrl', []).controller('MainController',
    ['$scope',
        function($scope) {

      this.goToItem = function( nr ) {
        console.log('AAAAAAAAAAA');
      };

      $scope.scrollToStore = function() {
        jQuery( document ).ready(function () {
          var value = $('#searchPhrase').offset().top - 79;
          $('html, body').animate(
            {'scrollTop': value },
            '500');
        });
      }

}]);