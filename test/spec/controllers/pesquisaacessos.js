'use strict';

describe('Controller: PesquisaacessosCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var PesquisaacessosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PesquisaacessosCtrl = $controller('PesquisaacessosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PesquisaacessosCtrl.awesomeThings.length).toBe(3);
  });
});
