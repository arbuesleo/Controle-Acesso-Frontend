'use strict';

describe('Service: loadEditPessoa', function () {

  // load the service's module
  beforeEach(module('controleAcessoAppApp'));

  // instantiate service
  var loadEditPessoa;
  beforeEach(inject(function (_loadEditPessoa_) {
    loadEditPessoa = _loadEditPessoa_;
  }));

  it('should do something', function () {
    expect(!!loadEditPessoa).toBe(true);
  });

});
