'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    var options = {
                    responsive:true
                };
      var horas = ["teste"];
      var acessos = ["22"];
    $scope.carregraGrafico = function (){
                    $http.get("http://localhost:8888/acesso/groupHora?dtIn=19/05/2016&dtFim=22/05/2016").then(function(response){

                         for (var i = 0; i < response.data.length; i++) {
                            acessos[i] = response.data[i][0];
                            horas[i] = response.data[i][1];
                         }
                         var data = {
                             labels: horas,
                             datasets: [
                                 {
                                     label: "Dados primários",
                                     fillColor: "rgba(220,220,220,0.2)",
                                     strokeColor: "rgba(220,220,220,1)",
                                     pointColor: "rgba(220,220,220,1)",
                                     pointStrokeColor: "#fff",
                                     pointHighlightFill: "#fff",
                                     pointHighlightStroke: "rgba(220,220,220,1)",
                                     data: acessos
                                 }
                             ]
                         };



                             var ctx = document.getElementById("GraficoLine").getContext("2d");
                             var LineChart = new Chart(ctx).Line(data, options);


                    }, function(response){
                      console.log("Erro srv " + response.status + " - " + response.statusText);
                    }
                  );
    }

    $scope.carregraGrafico();




  });
