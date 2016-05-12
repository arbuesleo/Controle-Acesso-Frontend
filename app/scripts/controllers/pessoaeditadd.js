'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PessoaeditaddCtrl
 * @description
 * # PessoaeditaddCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PessoaeditaddCtrl', function ($scope, $http, $location) {
    $scope.pessoaAdd ={
    "cod": 0,
    "nome": "",
    "cpf": "",
    "rg": "",
    "telefoneFixo": "",
    "telefoneCelular": "",
    "email": "",
    "loguin": "",
    "senha": "",
    "dataNascimento": "",
    "ativo": 1
  }

  $('.modal').on('hidden.bs.modal', function(event) {
     $location.path("/pessoa");
     $scope.$apply();
  })
  $scope.savePessoa = function (){
      $http.post("http://localhost:8888/pessoa/add", $scope.pessoaAdd).then(function(response){
          $('#incluidoSucesso').modal('show');
      }, function(response){
           $scope.name = "Ocorreu um erro ao se conectar ao servidor";
      }
    );
  }

  });
