'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PessoaCtrl
 * @description
 * # PessoaCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PessoaCtrl', function ($scope, $http, loadEditPessoa, loadEditCartoesPessoa) {
    $scope.nomeFiltro = "";

    $scope.getAllPessoas = function (){
        $http.get("http://localhost:8888/pessoa/findAll").then(function(response){
  			     $scope.pessoas = response.data;
  		  }, function(response){
  			     $scope.name = "Ocorreu um erro ao se conectar ao servidor";
  		  }
  		);
    }
   $scope.getAllPessoas();

   $scope.setIdEdit = function (id){
     loadEditPessoa.setId(id);
   }
  });
