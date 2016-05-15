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
     $('#alertErro').hide();
    $scope.nomeFiltro = "";

    $scope.getAllPessoas = function (){
        $http.get("http://localhost:8888/pessoa/findAll").then(function(response){
  			     $scope.pessoas = response.data;
  		  }, function(response){
          console.log("Erro srv " + response.status " - " + response.statusText);
  		  }
  		);
    }
   $scope.getAllPessoas();

   $scope.setIdEdit = function (id){
     loadEditPessoa.setId(id);
   }
  });
