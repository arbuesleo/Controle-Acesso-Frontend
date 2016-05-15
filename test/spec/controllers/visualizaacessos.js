'use strict';

describe('Controller: VisualizaacessosCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var VisualizaacessosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VisualizaacessosCtrl = $controller('VisualizaacessosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VisualizaacessosCtrl.awesomeThings.length).toBe(3);
  });
});
