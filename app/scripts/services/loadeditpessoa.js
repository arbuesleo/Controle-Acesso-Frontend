'use strict';

/**
 * @ngdoc service
 * @name controleAcessoAppApp.loadEditPessoa
 * @description
 * # loadEditPessoa
 * Service in the controleAcessoAppApp.
 */
angular.module('controleAcessoAppApp')
  .service('loadEditPessoa', function ($http) {

    this.pessoaId = 0;
    this.pessoaEdit = "";

  this.setId = function (id){
        this.pessoaId = id;
  }



  this.getPessoa = function () {
          return $http({
              method: "GET",
              url: "http://localhost:8888/pessoa/finbById?id="+ this.pessoaId,
              headers: { 'Content-Type': 'application/json' }
          }).then(function (response) {
            return response.data;
          }, function (error) {
              return error;
          })
      };

  });
