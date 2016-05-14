'use strict';

/**
 * @ngdoc service
 * @name controleAcessoAppApp.loadEditCartao
 * @description
 * # loadEditCartao
 * Service in the controleAcessoAppApp.
 */
angular.module('controleAcessoAppApp')
  .service('loadEditCartao', function ($http) {
    this.cartaoId = 0;

    this.setId = function (id) {
      this.cartaoId = id;
    }

    this.getCartao = function () {
        return $http({
                method: "GET",
                url: "http://localhost:8888/cartao/findById?id="+ this.cartaoId,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return error;
            })
        };

  });
