'use strict';

/**
 * @ngdoc service
 * @name controleAcessoAppApp.pessoa
 * @description
 * # pessoa
 * Service in the controleAcessoAppApp.
 */
angular.module('controleAcessoAppApp')
  .service('pessoa', function ($rootScope, $http) {
    var url = $rootScope.urls.pessoa;
    this.idPessoaEdit = 0;

    this.getAllPessoas = function (){
      return  $http.get(url + "/findAll").then(function(response){
  			     return response.data;
  		  }, function(response){
           console.log("Erro srv " + response.status + " - " + response.statusText);
  		  }
  		);
    }

    this.setId = function (id){
          this.idPessoaEdit = id;
    }


    this.getPessoa = function (id) {
            return $http({
                method: "GET",
                url: url + "/finbById?id="+ id,
                headers: { 'Content-Type': 'application/json' }
            }).then(function (response) {
              if(response.data.dataNascimento){
              response.data.dataNascimento = new Date(response.data.dataNascimento.replace("-","/"));
            }
              return response.data;
            }, function (error) {
                return error;
            })
        };

    this.getPessoaEdit = function(){
      return this.getPessoa(this.idPessoaEdit).then(function(data){
        return data;
      });
    }

    this.savePessoa = function (pessoa){
        return $http.post(url + "/add", pessoa).then(function(response){
           return response.data;

        }, function(response){
        console.log("Erro srv " + response.status + " - " + response.statusText);
        }
      );
    }

    this.excluirPessoa = function(id){
      return $http.get(url + "/deleteById?id="+ this.idPessoaEdit).then(function(response){
           return response.data;
      }, function(response){
      console.log("Erro srv " + response.status + " - " + response.statusText);
      }
    );
    }



  });
