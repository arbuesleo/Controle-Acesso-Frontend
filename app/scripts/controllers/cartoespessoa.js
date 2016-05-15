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
           console.log("Erro srv " + response.status " - " + response.statusText);
      }
    );
  }

  $scope.loadCartoesPessoa();

  $scope.removeCartao = function (idCartao) {

    $http.get("http://localhost:8888/cartao/removePessoaCartao?id="+ idCartao).then(function(response){
      $scope.loadCartoesPessoa();
    }, function(response){
        console.log("Erro srv " + response.status " - " + response.statusText);
    }
  );
}

$scope.getCartoesDisp = function () {

  $http.get("http://localhost:8888/cartao/findDisponiveis").then(function(response){
    $("#modalListCartoes").modal('show');
    $scope.cartoesDisponiveis = response.data;
  }, function(response){
    $('#alertErro').text('Ocorreu um erro ao preocessar sua Requisção: ' + response.status + " - " + response.statusText);
    $('#alertErro').show();
  }
);
}

$scope.cartaoAdd;

$scope.getCartaoById = function (id) {
  $http.get("http://localhost:8888/cartao/findById?id=" +id).then(function(response){
    $("#modalListCartoes").modal('show');
    $scope.cartaoAdd = response.data;
  }, function(response){
    $('#alertErro').text('Ocorreu um erro ao preocessar sua Requisção: ' + response.status + " - " + response.statusText);
    $('#alertErro').show();
  }
);
}

$scope.setCartaoPessoa = function (idCartao) {
  $scope.pessoa
  $http.get("http://localhost:8888/cartao/addPessoaCartao?idCartao="+ idCartao +"&idPessoa="+idPessoa).then(function(response){
    $scope.loadCartoesPessoa();
    $('#modalListCartoes').modal('toggle')
  }, function(response){
    $('#alertErro').text('Ocorreu um erro ao preocessar sua Requisção: ' + response.status + " - " + response.statusText);
    $('#alertErro').show();
  }
);
}

$('#alertErro').hide();

});
