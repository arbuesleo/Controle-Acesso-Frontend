'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:VisualizaacessosCtrl
 * @description
 * # VisualizaacessosCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('VisualizaacessosCtrl', function ($scope) {
    $scope.alterarAlert = function (){
       $('#statusAcesso').addClass('alert-danger').text('Alert Danger');
    }

    $scope.alterarAlertSuccess = function (){
      if($('#statusAcesso').hasClass('alert-danger')){
       $('#statusAcesso').removeClass('alert-danger');
     }
       $('#statusAcesso').addClass('alert-success').text('Alert Success');
    }
  });
