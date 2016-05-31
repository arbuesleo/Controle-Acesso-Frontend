'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:ListcartoesCtrl
 * @description
 * # ListcartoesCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('ListcartoesCtrl', function ($scope, $http, cartao) {

    $scope.nomeFiltro = "";

    $scope.listaCartoes = function(){
      cartao.getAllCartoes().then(function(data){
        $scope.cartoes = data;
      });
    }

   $scope.setIdEdit = function (id){
     cartao.setIdEdit(id);
   }

   $scope.listaCartoes();

  });
