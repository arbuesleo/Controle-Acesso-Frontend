'use strict';

describe('Service: loadEditCartoesPessoa', function () {

  // load the service's module
  beforeEach(module('controleAcessoAppApp'));

  // instantiate service
  var loadEditCartoesPessoa;
  beforeEach(inject(function (_loadEditCartoesPessoa_) {
    loadEditCartoesPessoa = _loadEditCartoesPessoa_;
  }));

  it('should do something', function () {
    expect(!!loadEditCartoesPessoa).toBe(true);
  });

});
