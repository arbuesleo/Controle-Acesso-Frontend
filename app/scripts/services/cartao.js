'use strict';

/**
 * @ngdoc service
 * @name controleAcessoAppApp.cartao
 * @description
 * # cartao
 * Service in the controleAcessoAppApp.
 */
angular.module('controleAcessoAppApp')
  .service('cartao', function ($rootScope, $http) {
    var url = $rootScope.urls.cartao;
    this.idEdit = 0;
    this.setIdEdit = function(id){
      this.idEdit = id;
    }

    this.getAllCartoes = function (){
        return $http.get(url + "/findAll").then(function(response){
             return response.data;
        }, function(response){
          console.log("Erro srv " + response.status + " - " + response.statusText);
        }
      );
    }

    this.getCartaoEdit = function (){
      return this.getCartao(this.idEdit).then(function(data){
        return data;
      });
    }

    this.getCartao = function (id) {
        return $http({
                method: "GET",
                url: url + "/findById?id="+ this.idEdit,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
                return response.data;
            }, function (error) {
                return error;
            })
        };


        this.saveCartao = function (cartao){
            cartao.tag.toUpperCase();
            return $http.post(url + "/add", cartao).then(function(response){
                    return true;
            }, function(response){
              console.log("Erro srv " + response.status + " - " + response.statusText);
            }
          );
        }

        this.excluirCartao = function(id){
          return $http.get(url + "/deleteById?id="+ id).then(function(response){
              return true;
          }, function(response){
              console.log("Erro srv " + response.status + " - " + response.statusText);
          }
        );
      }

      this.removePessoaCartao = function (idCartao) {
        return $http.get(url + "/removePessoaCartao?id="+ idCartao).then(function(response){
          return response;
        }, function(response){
            console.log("Erro srv " + response.status + " - " + response.statusText);
        }
      );
    }

      this.getCartoesDisp = function () {
      return  $http.get(url + "/findDisponiveis").then(function(response){
          return response.data;
        }, function(response){
          console.log("Erro srv " + response.status + " - " + response.statusText);
        }
      );
    }

    this.setPessoaCartao = function (idCartao, idPessoa) {
      return $http.get(url + "/addPessoaCartao?idCartao="+ idCartao +"&idPessoa="+idPessoa).then(function(response){
        return response.data;
      }, function(response){
      console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
    }


  });
