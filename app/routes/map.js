'use strict';

var App = require('application');

App.Router.map(function () {
  this.resource('products', function () {
    this.route('category', {path: '/:category'});
    this.route('product', {path: '/:id'});
  });
  this.resource('wishlists', function () {
    this.route('index', {path: '/:customerId'});
  });
});