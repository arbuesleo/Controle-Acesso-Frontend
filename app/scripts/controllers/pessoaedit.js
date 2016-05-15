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


  $scope.savePessoa = function (){
      $http.post("http://localhost:8888/pessoa/add", $scope.pessoaAdd).then(function(response){
          $('#alterardoSucesso').modal('show');
          $scope.pessoaAdd = loadEditPessoa.getPessoa().then(function(data){
              $scope.pessoaAdd = data;
          });
      }, function(response){
      console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
  }

 $scope.confirmExclusao = function() {
   $('#confirmExclusao').modal('show');
 }
  $scope.excluirPessoa = function(){
    $http.get("http://localhost:8888/pessoa/deleteById?id="+ $scope.pessoaAdd.idPEssoa).then(function(response){
         $('#excluidoSucesso').modal('show').on('hidden.bs.modal', function(event) {
            $location.path("/pessoa");
            $scope.$apply();
         });
    }, function(response){
    console.log("Erro srv " + response.status + " - " + response.statusText);
    }
  );
  }
  });
