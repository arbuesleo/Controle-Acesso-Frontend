'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:AddcartaoCtrl
 * @description
 * # AddcartaoCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('AddcartaoCtrl', function ($scope, $http, $location, cartao) {

    $scope.cartaoAdd ={
      "tag": "",
      "status": "A",
      "descricao": ""
    }

    $scope.save = function (){
      cartao.saveCartao($scope.cartaoAdd).then(function(response){
        $('#incluidoSucesso').modal('show').on('hidden.bs.modal', function(event) {
           $location.path("/listCartoes");
           $scope.$apply();
        });
      });
    }
  });
