'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Shop tests', function() {

  var history = element.all(by.repeater('result in memory'));

  var fs = require('fs');

  function writeScreenShot(data, filename) {
    var stream = fs.createWriteStream(filename);

    stream.write(new Buffer(data, 'base64'));
    stream.end();
  }

  beforeEach(function() {
    browser.get( '/' );
    var query = $( '#searchPhrase' );
    query.clear();
  });


  it( 'should redirect index.html to index.html#/phones', function () {
    browser.get( '/' );
    browser.getLocationAbsUrl().then( function ( url ) {
      expect( url ).toEqual( '/shop' );
    } );
  } );

  it( 'has "Shop" in title', function(){
    var centralLogo = element( by.css('.central-logo') );
    expect(centralLogo.getText() ).toEqual('AngularJS Shop');
  });

  it( 'should have more than 10 products', function(){
    var items = element.all(by.css('.name') );
    expect( items.count() ).toBeGreaterThan(10);
  });

  it( 'items are loaded from json', function(){
    $( '#searchPhrase' ).sendKeys( 'adsfadsfadsfadsf' );
    var noResultSection = element(by.cssContainingText('.lack-of-items', 'Search returns no results'));
    expect( noResultSection ).toBeDefined();
  });

  it( 'should contain macBook item', function(){
    $( '#searchPhrase' ).sendKeys( 'Apple' );

    var macbook = element(by.cssContainingText('.name', 'MacBook Pro'));
    expect( macbook ).toBeDefined();
  });

  it('should filter the list as a user types into the search box', function() {

    var elementsInAList = element.all( by.css( '.shop-item' ) );
    var query = $( '#searchPhrase' );

    expect( elementsInAList.count() ).toBe(24);

    query.sendKeys( 'nexus' );
    expect( elementsInAList.count() ).toBe(0);

    query.clear();
    query.sendKeys( 'kawas' );
    expect( elementsInAList.count() ).toBe(1);
  });

  it('should render specific links', function() {
    var query = $( '#searchPhrase' );
    query.sendKeys( 'Apple' );

    element.all( by.css( '.zimage' ) ).first().click();
    browser.getLocationAbsUrl().then( function ( url ) {
      expect( url ).toEqual( '/shop/item/2' );
    } );
  });

  it( 'should filter by product category', function(){
    $( '.hamburger' ).click();
    element(by.cssContainingText('option', 'grocery')).click();

    var items = $$( '.shop-item' );
    expect( items.count() ).toEqual( 2 );
  });

  it( 'should have appropriate title', function() {
    expect( browser.getTitle() ).toEqual( 'Shop in AngularJS' );
  });

});