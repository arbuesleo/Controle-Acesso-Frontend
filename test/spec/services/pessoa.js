'use strict';

describe('Service: pessoa', function () {

  // load the service's module
  beforeEach(module('controleAcessoAppApp'));

  // instantiate service
  var pessoa;
  beforeEach(inject(function (_pessoa_) {
    pessoa = _pessoa_;
  }));

  it('should do something', function () {
    expect(!!pessoa).toBe(true);
  });

});
