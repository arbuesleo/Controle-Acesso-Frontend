'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PessoaCtrl
 * @description
 * # PessoaCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PessoaCtrl', function ($scope, $http, pessoa) {

    $scope.nomeFiltro = "";
    $scope.pessoas = "";

    $scope.getPessoas = function (){
       pessoa.getAllPessoas().then(function (data){
          $scope.pessoas = data;
       });
    }
    
   $scope.getPessoas();

   $scope.editarPessoa = function (id){
     pessoa.setId(id);
   }

  });
