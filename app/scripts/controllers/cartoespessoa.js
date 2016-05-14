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
    $scope.pessoa;
    $scope.loadCartoesPessoa = function () {
      $http.get("http://localhost:8888/pessoa/finbById?id="+ idPessoa).then(function(response){
          $scope.pessoa = response.data;
      }, function(response){
           $scope.name = "Ocorreu um erro ao se conectar ao servidor";
      }
    );
  }

  $scope.loadCartoesPessoa();

  $scope.removeCartao = function (idCartao) {

    $http.get("http://localhost:8888/cartao/removePessoaCartao?id="+ idCartao).then(function(response){
      $scope.loadCartoesPessoa();
    }, function(response){
         $scope.name = "Ocorreu um erro ao se conectar ao servidor";
    }
  );
}

$scope.getCartoesDisp = function () {

  $http.get("http://localhost:8888/cartao/findDisponiveis").then(function(response){

    $("#modalListCartoes").modal('show');
    $scope.cartoesDisponiveis = response.data;
  }, function(response){
       $scope.name = "Ocorreu um erro ao se conectar ao servidor";
  }
);
}
  });
