'use strict';

/**
 * @ngdoc function
 * @name controleAcessoAppApp.controller:GraficoacessohoraCtrl
 * @description
 * # GraficoacessohoraCtrl
 * Controller of the controleAcessoAppApp
 */
angular.module('controleAcessoAppApp')
  .controller('GraficoacessohoraCtrl', function ($scope, $http, acesso, utils) {
    $scope.dataFinal = "";
    $scope.dataInicial = "";
    var LineChart = "";
    var options = {
      responsive: true,
      //Boolean - Whether to show lines for each scale point
scaleShowLine : true,

//Boolean - Whether we show the angle lines out of the radar
angleShowLineOut : true,

//Boolean - Whether to show labels on the scale
scaleShowLabels : true  ,

// Boolean - Whether the scale should begin at zero
scaleBeginAtZero : true,

//String - Colour of the angle line
angleLineColor : "rgba(1,1,1,.1)",

//Number - Pixel width of the angle line
angleLineWidth : 1,

//String - Point label font declaration
pointLabelFontFamily : "'Arial'",

//String - Point label font weight
pointLabelFontStyle : "normal",

//Number - Point label font size in pixels
pointLabelFontSize : 5,

//String - Point label font colour
pointLabelFontColor : "#555",

//Boolean - Whether to show a dot for each point
pointDot : true,

//Number - Radius of each point dot in pixels
pointDotRadius : 4,

//Number - Pixel width of point dot stroke
pointDotStrokeWidth : 2,

//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
pointHitDetectionRadius : 20,

//Boolean - Whether to show a stroke for datasets
datasetStroke : true,

//Number - Pixel width of dataset stroke
datasetStrokeWidth : 3,

//Boolean - Whether to fill the dataset with a colour
datasetFill : true
};
      var horas = ["teste"];
      var acessos = ["22"];

    $scope.carregraGrafico = function (){

    acesso.getQtdAcessosHora($scope.dataInicial.toLocaleDateString(), $scope.dataFinal.toLocaleDateString()).then(function(data){
      acessos = [];
      horas = [];
      for (var i = 0; i < data.length; i++) {
                acessos[i] = data[i][0];
                horas[i] = data[i][1] + " Hr";
             }

             var tituo ={
                  display: true,
                  text: "Tste"
                };
             var data = {
                 labels: horas,
                 datasets: [
                     {
                         label: "Acessos",
                         fillColor: "rgba(72,61,139,0.8)", // preenchimento
                         strokeColor: "rgba(72,61,139,100)", // linha
                         pointColor: "rgba(165,42,42,100)", //ponto
                         pointStrokeColor: "rgba(165,42,42,100)", //contorno ponto
                         pointHighlightFill: "#696969", // cor ponto ao passar o mouse
                         pointHighlightStroke: "#D3D3D3", // contono do ponto ao passar o mouse
                         data: acessos
                     }
                 ]
             };

             var ctx = document.getElementById("GraficoLine").getContext("2d");
             if (LineChart != "")
                LineChart.chart.ctx = "";

             LineChart = new Chart(ctx).Line(data, options);




    });
}



  });
