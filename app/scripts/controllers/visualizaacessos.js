'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:VisualizaacessosCtrl
 * @description
 * # VisualizaacessosCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('VisualizaacessosCtrl', function ($scope, $http, $timeout) {
    var contador = 3;
    var promise;
    function ativarRefresh() {
     contador--;
     if (contador === 0) {
       $scope.getAcessos();
       contador = 3;
     }
     promise = $timeout(ativarRefresh, 1000);
   }

    $scope.getAcessos = function(){
      $http.get("http://localhost:8888/acesso/findUltimosDez").then(function(response){
        var i;
        $scope.listAcessos = response.data;
        $scope.ultimoAcesso = $scope.listAcessos[0];
        if($scope.ultimoAcesso.liberado){
          $scope.alterarAlertSuccess($scope.ultimoAcesso.mensagem);
        }else {
          $scope.alterarAlertDanger($scope.ultimoAcesso.mensagem);
        }
      }, function(response){
      console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
    }

    ativarRefresh();

    $scope.alterarAlertDanger = function (msg){
       $('#statusAcesso').addClass('alert-danger').text(msg);
    }

    $scope.alterarAlertSuccess = function (msg){
      if($('#statusAcesso').hasClass('alert-danger')){
       $('#statusAcesso').removeClass('alert-danger');
     }
       $('#statusAcesso').addClass('alert-success').text(msg);
    }
  });
