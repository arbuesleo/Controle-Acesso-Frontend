'use strict';

describe('Controller: PessoaCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var PessoaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PessoaCtrl = $controller('PessoaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PessoaCtrl.awesomeThings.length).toBe(3);
  });
});
