'use strict';

describe('Service: loadEditCartao', function () {

  // load the service's module
  beforeEach(module('controleAcessoAppApp'));

  // instantiate service
  var loadEditCartao;
  beforeEach(inject(function (_loadEditCartao_) {
    loadEditCartao = _loadEditCartao_;
  }));

  it('should do something', function () {
    expect(!!loadEditCartao).toBe(true);
  });

});
