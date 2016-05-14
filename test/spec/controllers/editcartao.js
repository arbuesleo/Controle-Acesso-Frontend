'use strict';

describe('Controller: EditcartaoCtrl', function () {

  // load the controller's module
  beforeEach(module('controleAcessoAppApp'));

  var EditcartaoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditcartaoCtrl = $controller('EditcartaoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditcartaoCtrl.awesomeThings.length).toBe(3);
  });
});
