'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:EditcartaoCtrl
 * @description
 * # EditcartaoCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('EditcartaoCtrl', function ($scope, $location, $http, loadEditCartao) {

$scope.loadPesoaInService = function(){
      $scope.cartaoEdit = loadEditCartao.getCartao().then(function(data){
        $scope.cartaoEdit = data;
      });
    }

$scope.loadPesoaInService();

      $scope.saveCartao = function (){
          $http.post("http://localhost:8888/cartao/add", $scope.cartaoEdit).then(function(response){
              $('#alterardoSucesso').modal('show');
                $scope.loadPesoaInService();
          }, function(response){
          console.log("Erro srv " + response.status + " - " + response.statusText);
          }
        );
      }

      $scope.confirmExclusao = function() {
        $('#confirmExclusao').modal('show');
      }

      $scope.excluirCartao = function(){
        $http.get("http://localhost:8888/cartao/deleteById?id="+ $scope.cartaoEdit.idCartao).then(function(response){
             $('#excluidoSucesso').modal('show').on('hidden.bs.modal', function(event) {
                $location.path("/listCartoes");
                $scope.$apply();
             });
        }, function(response){
            console.log("Erro srv " + response.status + " - " + response.statusText);
        }
      );
      }
  });
