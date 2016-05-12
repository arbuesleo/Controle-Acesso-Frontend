'use strict';

/**
 * @ngdoc overview
 * @name controleAcessoAppApp
 * @description
 * # controleAcessoAppApp
 *
 * Main module of the application.
 */
angular
  .module('controleAcessoAppApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('/pessoa', {
        templateUrl: 'views/pessoa.html',
        controller: 'PessoaCtrl',
        controllerAs: 'pessoa'
      })
      .when('/pessoaEditAdd', {
        templateUrl: 'views/pessoaeditadd.html',
        controller: 'PessoaeditaddCtrl',
        controllerAs: 'pessoaEditAdd'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
