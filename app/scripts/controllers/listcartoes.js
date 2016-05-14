'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:ListcartoesCtrl
 * @description
 * # ListcartoesCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('ListcartoesCtrl', function ($scope, $http) {
    $scope.nomeFiltro = "";
    $scope.getAllCartoes = function (){
        $http.get("http://localhost:8888/cartao/findAll").then(function(response){
             $scope.cartoes = response.data;
        }, function(response){
             $scope.name = "Ocorreu um erro ao se conectar ao servidor";
        }
      );
    }
   $scope.getAllCartoes();
  });
