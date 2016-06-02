'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:CartoespessoaCtrl
 * @description
 * # CartoespessoaCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('CartoespessoaCtrl', function ($scope, $http,  pessoa, cartao) {

    $scope.pessoa;

    $scope.loadCartoesPessoa = function () {
      pessoa.getPessoa(pessoa.idPessoaEdit).then(function(data){
        $scope.pessoa = data;
      });
  }

  $scope.loadCartoesPessoa();

  $scope.removeCartao = function (idCartao) {
    cartao.removePessoaCartao(idCartao).then(function(data){
        $scope.loadCartoesPessoa();
    });
}

  $scope.listCartoesDisp = function () {
       cartao.getCartoesDisp().then(function(data){
         $("#modalListCartoes").modal('show');
         $scope.cartoesDisponiveis = data;
       });
    }

$scope.cartaoAdd;

$scope.getCartaoById = function (id) {

  cartao.getCartao(id).then(function(data){
    $("#modalListCartoes").modal('show');
    $scope.cartaoAdd = response.data;
  });

}

$scope.setCartaoPessoa = function (idCartao) {

cartao.setPessoaCartao(idCartao, pessoa.idPessoaEdit).then(function(data){
  $scope.loadCartoesPessoa();
  $('#modalListCartoes').modal('toggle')
});
}





});
