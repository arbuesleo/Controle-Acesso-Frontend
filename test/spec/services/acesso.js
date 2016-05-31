'use strict';

describe('Service: acesso', function () {

  // load the service's module
  beforeEach(module('controleAcessoAppApp'));

  // instantiate service
  var acesso;
  beforeEach(inject(function (_acesso_) {
    acesso = _acesso_;
  }));

  it('should do something', function () {
    expect(!!acesso).toBe(true);
  });

});
