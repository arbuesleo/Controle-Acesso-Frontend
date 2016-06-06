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


    this.getAcessosByData = function(dataIni, dataFim){
      var url = "http://localhost:8888/acesso/findByDate?dtIn=" + dataIni.toLocaleString() + "&dtFim=" + dataFim.toLocaleString();
      return $http.get(url).then(function(response){
        var i;
        return response.data;
      }, function(response){
        console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
  }

  this.getUltimosDezAcessos = function(){
    return  $http.get("http://localhost:8888/acesso/findUltimosDez").then(function(response){
        return response.data;
      }, function(response){
      console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
  }


this.acessoManual = function (){
    $http.post("http://localhost:8888/acesso/registrarAcessoManual", $scope.acessoMan).then(function(response){
        websocket.send("Teste");
    }, function(response){
      console.log("Erro srv " + response.status + " - " + response.statusText);
    }
  );
}

});
