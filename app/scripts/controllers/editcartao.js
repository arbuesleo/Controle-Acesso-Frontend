'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:EditcartaoCtrl
 * @description
 * # EditcartaoCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('EditcartaoCtrl', function ($scope, $location, $http, cartao) {
    $scope.cartaoEdit = "";

    $scope.loadCartaoEdit = function(){
          cartao.getCartaoEdit().then(function(data){
            $scope.cartaoEdit = data;
          });
    }

    $scope.loadCartaoEdit();

      $scope.save = function (){
      cartao.saveCartao($scope.cartaoEdit).then(function(data){
            $('#alterardoSucesso').modal('show');
            $scope.loadCartaoEdit();
        });
      }

      $scope.confirmExclusao = function() {
        $('#confirmExclusao').modal('show');
      }

      $scope.excluir = function(id ){
        cartao.excluirCartao($scope.cartaoEdit.idCartao).then(function(data){
          $('#excluidoSucesso').modal('show').on('hidden.bs.modal', function(event) {
             $location.path("/listCartoes");
             $scope.$apply();
          });
        });
      }




  });
