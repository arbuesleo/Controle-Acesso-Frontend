'use strict';

/**
 * @ngdoc service
 * @name controleAcessoAppApp.utils
 * @description
 * # utils
 * Service in the controleAcessoAppApp.
 */
angular.module('controleAcessoAppApp')
  .service('utils', function () {

    this.subtrairDiasData = function(data, qtdDias){
      return new Date(data.getTime() - (qtdDias * 24 * 60 * 60 * 1000)).toLocaleDateString();
    }
  });
