'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:VisualizaacessosCtrl
 * @description
 * # VisualizaacessosCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('VisualizaacessosCtrl', function ($scope, $http, $timeout, acesso) {
    var contador = 3;
    var promise;

    $scope.acessoMan = {
    "idAcesso":0,
    "manual": true,
    "nomePessoa": "teste",
    "cpfPessoa": "111.111.111-11",
    "justificativa": "Teste Liberação Manual",
    "loguinLiberacao": "Administrador",
    "liberado": true,
    "mensagem": "Acesso Liberado Manualmente"
  }


    function ativarRefresh() {
     contador--;
     if (contador === 0) {
       $scope.getAcessos();
       contador = 3;
     }
     promise = $timeout(ativarRefresh, 1000);
   }

    $scope.getAcessos = function(){
      acesso.getUltimosDezAcessos().then(function(data){
        $scope.listAcessos = data;
        $scope.ultimoAcesso = $scope.listAcessos[0];
        if($scope.ultimoAcesso.liberado){
          $scope.alterarAlertSuccess($scope.ultimoAcesso.mensagem);
        }else {
          $scope.alterarAlertDanger($scope.ultimoAcesso.mensagem);
        }
      });
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
