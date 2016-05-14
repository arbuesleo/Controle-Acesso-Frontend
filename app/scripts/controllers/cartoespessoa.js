'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:CartoespessoaCtrl
 * @description
 * # CartoespessoaCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('CartoespessoaCtrl', function ($scope, $http, loadEditPessoa) {
    var idPessoa = loadEditPessoa.getId();
    $scope.cartoesPessoa;
    $scope.loadCartoesPessoa = function () {
      $http.get("http://localhost:8888/pessoa/finbById?id="+ idPessoa).then(function(response){
          $scope.cartoesPessoa = response.data.cartoes;
      }, function(response){
           $scope.name = "Ocorreu um erro ao se conectar ao servidor";
      }
    );
  }

  $scope.loadCartoesPessoa();

  });
