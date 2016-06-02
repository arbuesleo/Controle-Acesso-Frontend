'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PessoaeditCtrl
 * @description
 * # PessoaeditCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PessoaeditCtrl', function ($scope, $http, $location, pessoa) {

    $scope.pessoaAdd = pessoa.getPessoaEdit().then(function(data){
        $scope.pessoaAdd = data;
      });


  $scope.salvar = function (){
      pessoa.savePessoa($scope.pessoaAdd).then(function(data){
        $('#alterardoSucesso').modal('show');
          $scope.pessoaAdd = pessoa.getPessoa($scope.pessoaAdd.idPEssoa).then(function(data){
            $scope.pessoaAdd = data;
        });
      });
  }

 $scope.confirmExclusao = function() {
   $('#confirmExclusao').modal('show');
 }

  $scope.excluir = function(){
    pessoa.excluirPessoa($scope.pessoaAdd.idPEssoa).then(function(data){
      $('#excluidoSucesso').modal('show').on('hidden.bs.modal', function(event) {
         $location.path("/pessoa");
         $scope.$apply();
      });
    });
  }


  });
