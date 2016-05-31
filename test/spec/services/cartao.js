'use strict';

describe('Service: cartao', function () {

  // load the service's module
  beforeEach(module('controleAcessoAppApp'));

  // instantiate service
  var cartao;
  beforeEach(inject(function (_cartao_) {
    cartao = _cartao_;
  }));

  it('should do something', function () {
    expect(!!cartao).toBe(true);
  });

});
