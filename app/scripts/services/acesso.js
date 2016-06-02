'use strict';

/**
 * @ngdoc service
 * @name controleAcessoAppApp.acesso
 * @description
 * # acesso
 * Service in the controleAcessoAppApp.
 */
angular.module('controleAcessoAppApp')
  .service('acesso', function ($http, $rootScope) {

    var url = $rootScope.urls.acesso;

  this.getQtdAcessosHora = function (dataIni, dataFim){
      return $http.get(url + "/groupHora?dtIn="+dataIni+"&dtFim="+dataFim).then(function(response){
        return response.data;
      }, function(response){
        console.log("Erro srv " + response.status + " - " + response.statusText);
      }
      );
    }

  });
