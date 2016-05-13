'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PessoaeditCtrl
 * @description
 * # PessoaeditCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PessoaeditCtrl', function ($scope, $http, $location, loadEditPessoa) {

    $scope.pessoaAdd = loadEditPessoa.getPessoa().then(function(data){
        $scope.pessoaAdd = data;
    });
    
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
