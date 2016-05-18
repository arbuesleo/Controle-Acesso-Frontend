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
    "idPEssoa": 0,
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

  $scope.msgModal = "";

  $('.modal').on('hidden.bs.modal', function(event) {
     $location.path("/pessoa");
     $scope.$apply();
  })

  $scope.savePessoa = function (valido){
      if(valido){
        console.log("enviado");
      }else{
        console.log("invalido");
        return;
      }
      $http.post("http://localhost:8888/pessoa/add", $scope.pessoaAdd).then(function(response){
        $scope.msgModal = "Registro Alterado com Sucesso!";
          $('#incluidoSucesso').modal('show');
      }, function(response){
        console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
  }



  });
