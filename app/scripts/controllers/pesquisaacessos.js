'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PesquisaacessosCtrl
 * @description
 * # PesquisaacessosCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PesquisaacessosCtrl', function ($scope, $http) {
    $scope.tabelaVisible = false;
    $scope.getAcessos = function(){
      $scope.tabelaVisible = true;
      var teste = $scope.dataInicial.toLocaleString();
      var url = "http://localhost:8888/acesso/findByDate?dtIn=" + $scope.dataInicial.toLocaleString() + "&dtFim=" + $scope.dataFinal.toLocaleString();
      $http.get(url).then(function(response){
        var i;
        $scope.listAcessos = response.data;

      }, function(response){
        console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
  }

  });
