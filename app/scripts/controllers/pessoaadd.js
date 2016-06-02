'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PessoaeditaddCtrl
 * @description
 * # PessoaeditaddCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PessoaeditaddCtrl', function ($scope, $location, pessoa) {


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

  $scope.save = function (valido){
      if(valido){
        console.log("enviado");
      }else{
        console.log("invalido");
        return;
      }

      pessoa.savePessoa($scope.pessoaAdd).then(function(data){
        $scope.msgModal = "Registro Alterado com Sucesso!";
          $('#incluidoSucesso').modal('show');
      });
  }



  });
