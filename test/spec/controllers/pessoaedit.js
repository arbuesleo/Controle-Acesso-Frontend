'use strict';

describe('Controller: PessoaeditCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var PessoaeditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PessoaeditCtrl = $controller('PessoaeditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PessoaeditCtrl.awesomeThings.length).toBe(3);
  });
});
