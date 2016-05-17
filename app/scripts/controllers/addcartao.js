'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:AddcartaoCtrl
 * @description
 * # AddcartaoCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('AddcartaoCtrl', function ($scope, $http, $location) {

    $scope.cartaoAdd ={
      "tag": "",
      "status": "A",
      "descricao": ""
    }

    $scope.saveCartao = function (){
        $scope.cartaoAdd.tag.toUpperCase();
        $http.post("http://localhost:8888/cartao/add", $scope.cartaoAdd).then(function(response){
            $('#incluidoSucesso').modal('show').on('hidden.bs.modal', function(event) {
               $location.path("/listCartoes");
               $scope.$apply();
            });
        }, function(response){
              console.log("Erro srv " + response.status + " - " + response.statusText);
        }
      );
    }

  });
