'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:ListcartoesCtrl
 * @description
 * # ListcartoesCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('ListcartoesCtrl', function ($scope, $http, loadEditCartao) {
    $('#alertErro').hide();
    $scope.nomeFiltro = "";
    $scope.getAllCartoes = function (){
        $http.get("http://localhost:8888/cartao/findAll").then(function(response){
             $scope.cartoes = response.data;
        }, function(response){
          console.log("Erro srv " + response.status " - " + response.statusText);
        }
      );
    }
   $scope.getAllCartoes();

   $scope.setIdEdit = function (id){
     loadEditCartao.setId(id);
   }
  });
