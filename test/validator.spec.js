// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';
// import main from '../src/index';


// test/validator.spec.js tests de ejemplo e implementar tests para validator.isValid() y validator.maskify().

/* describe('main', () => {
  it('debería ser un objeto', () => {
    expect(typeof main).toBe('object');
  });

  describe('validator.validate', () => {
    it('debería ser una función', () => {
      expect(typeof main.validate).toBe('function');
    });
  });

}); */


describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.getCardBrand', () => {
    it('debería ser una función', () => {
      expect(typeof validator.getCardBrand).toBe('function');
    });

    it('Debería retornar "American Express" para "3"', () => {
      expect(validator.getCardBrand("3")).toBe("American Express");
    });

    it('Debería retornar  "Visa" para "4"', () => {
      expect(validator.getCardBrand("4")).toBe("Visa");
    });

    it('Debería retornar "Mastercard" para "5"', () => {
      expect(validator.getCardBrand("5")).toBe("Mastercard");
    });

    it('Debería retornar "" para "7"', () => {
      expect(validator.getCardBrand("7")).toBe("");
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });



  describe('validator.sumDigits', () => {
    it('debería ser una función', () => {
      expect(typeof validator.sumDigits).toBe('function');
    });

    it('Debería retornar 11 para 29', () => {
      expect(validator.sumDigits(29)).toBe(2);
    });

    it('Debería retornar 1 para 10', () => {
      expect(validator.sumDigits(10)).toBe(1);
    });
  });

});
