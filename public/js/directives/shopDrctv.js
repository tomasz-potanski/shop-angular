angular.module('shopApp')
  .directive('shop',
    function shopDrctv () {
      'use strict';

      return {
        restrict: 'A',
        replace: true,
        scope: true,
        templateUrl: "js/directives/shop.tmpl.html",
        controllerAs: 'shop',

        controller: function ( ShopFactory ) {
          this.items = [];

          this.goToItem = function (id) {
            ShopFactory.goToItem(id);
          };

          //this.deleteMessage = function (id, index) {
          //  InboxFactory.deleteMessage(id, index);
          //};
          //
          ShopFactory.getItems()
            .then( angular.bind( this, function then() {
              this.items = ShopFactory.items;
            }) );

        },

        link: function (scope, element, attrs, ctrl) {
          /*
           by convention we do not $ prefix arguments to the link function
           this is to be explicit that they have a fixed order
           */
        }
      }
    });
