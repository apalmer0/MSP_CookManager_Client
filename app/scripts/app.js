'use strict';

/**
 * @ngdoc overview
 * @name mspCookManagerClientApp
 * @description
 * # mspCookManagerClientApp
 *
 * Main module of the application.
 */
angular
  .module('mspCookManagerClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/store', {
        templateUrl: 'views/store.html',
        controller: 'StoreCtrl',
        controllerAs: 'store'
      })
      .when('/pantry', {
        templateUrl: 'views/pantry.html',
        controller: 'PantryCtrl',
        controllerAs: 'pantry'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
      .when('/orders', {
        templateUrl: 'views/orders.html',
        controller: 'OrdersCtrl',
        controllerAs: 'orders'
      })
      .when('/analysis', {
        templateUrl: 'views/analysis.html',
        controller: 'AnalysisCtrl',
        controllerAs: 'analysis'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
