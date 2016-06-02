'use strict';

describe('Controller: GraficoacessohoraCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var GraficoacessohoraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraficoacessohoraCtrl = $controller('GraficoacessohoraCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GraficoacessohoraCtrl.awesomeThings.length).toBe(3);
  });
});
