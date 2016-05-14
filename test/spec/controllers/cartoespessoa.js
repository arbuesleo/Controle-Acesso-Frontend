'use strict';

describe('Controller: CartoespessoaCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var CartoespessoaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CartoespessoaCtrl = $controller('CartoespessoaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CartoespessoaCtrl.awesomeThings.length).toBe(3);
  });
});
