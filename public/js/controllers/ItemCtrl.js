angular.module( 'ItemCtrl', [] ).controller( 'ItemController',
  ['$scope', '$routeParams', 'ShopFactory', '$location',
    function ( $scope, $routeParams, ShopFactory, $location ) {

      this.items = [];
      ShopFactory.getItems()
        .then( angular.bind( this, function then() {
          this.items = ShopFactory.items;
          selectCurrent.bind(this)();
        } ) );

      var selectCurrent = function() {
        for ( var i = 0; i < this.items.length; ++i ) {
          if ( parseInt( this.items[i].id ) === parseInt( $routeParams.id ) ) {
            this.item = this.items[i];
            break;
          }
        }
      };

      $scope.goToHome = function ( ) {
        $location.path('shop/');
      };


    }
  ]
);