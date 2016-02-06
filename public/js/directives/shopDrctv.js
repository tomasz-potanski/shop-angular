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

          ShopFactory.getItems()
            .then( angular.bind( this, function then() {
              this.items = ShopFactory.items;
            }) );

          this.isFade = false;

          this.categories = [
            {
              name: '',
              displayName: 'All'
            },
            {
              name: 'electronics',
              displayName: 'electronics'
            },
            {
              name: 'jewellery',
              displayName: 'jewellery'
            },
            {
              name: 'grocery',
              displayName: 'grocery'
            },
            {
              name: 'fashion',
              displayName: 'fashion'
            },
            {
              name: 'motorization',
              displayName: 'motorization'
            }
          ];

          this.searchByFields = [
            {
              name: 'name',
              displayName: 'Name'
            },
            {
              name: 'producer',
              displayName: 'Producer'
            },
            {
              name: 'category',
              displayName: 'Category'
            },
            {
              name: 'ship_from',
              displayName: 'Country of shipment'
            }
          ];

          this.currentCategory = {
              name: '',
              displayName: 'All'
          };
          this.currentSearchBy = {
            name: 'name',
            displayName: 'Name'
          };

        },

        link: function (scope, element, attrs, ctrl) {

        }
      }
    });
