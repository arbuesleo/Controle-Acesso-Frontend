'use strict';

/**
 * @ngdoc service
 * @name controleAcessoAppApp.loadEditCartoesPessoa
 * @description
 * # loadEditCartoesPessoa
 * Service in the controleAcessoAppApp.
 */
angular.module('controleAcessoAppApp')
  .service('loadEditCartoesPessoa', function () {
    this.idPessoa;

    this.setIdPessoa = function(){
      this.idPessoa = id;
    }

  this.getId = function (){
    return this.idPessoa;
  }

  });
