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
        if ($scope.pessoaAdd.dataNascimento != null) {
          $scope.pessoaAdd.dataNascimento = new Date($scope.pessoaAdd.dataNascimento).plus();

        }

    });


  $scope.savePessoa = function (){
      $http.post("http://localhost:8888/pessoa/add", $scope.pessoaAdd).then(function(response){
          $('#alterardoSucesso').modal('show');
          $scope.pessoaAdd = loadEditPessoa.getPessoa().then(function(data){
              $scope.pessoaAdd = data;
          });
      }, function(response){
           $scope.name = "Ocorreu um erro ao se conectar ao servidor";
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
         $scope.name = "Ocorreu um erro ao se conectar ao servidor";
    }
  );
  }
  });
