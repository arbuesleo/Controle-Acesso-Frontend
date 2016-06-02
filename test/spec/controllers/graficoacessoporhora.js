'use strict';

describe('Controller: GraficoacessoporhoraCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var GraficoacessoporhoraCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraficoacessoporhoraCtrl = $controller('GraficoacessoporhoraCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GraficoacessoporhoraCtrl.awesomeThings.length).toBe(3);
  });
});
