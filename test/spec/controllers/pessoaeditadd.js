'use strict';

describe('Controller: PessoaeditaddCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var PessoaeditaddCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PessoaeditaddCtrl = $controller('PessoaeditaddCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PessoaeditaddCtrl.awesomeThings.length).toBe(3);
  });
});
