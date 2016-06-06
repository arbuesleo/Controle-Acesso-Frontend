'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:PesquisaacessosCtrl
 * @description
 * # PesquisaacessosCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('PesquisaacessosCtrl', function ($scope, $http, acesso) {
    $scope.tabelaVisible = false;
    $scope.getAcessos = function(){
      acesso.getAcessosByData($scope.dataInicial, $scope.dataFinal).then(function(data){
          $scope.tabelaVisible = true;
          $scope.listAcessos = data;
      });
    }

  });
