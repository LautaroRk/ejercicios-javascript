const {
  sumar,
  multiplicar,
  dividir,
  multiplicarYSumar,
  sumarYDividir,
  calcularTotalConIva,
  numeroRandom,
  numeroRandomEntero,
} = require("../ejercicios/01.operadores");

describe("01", () => {
  describe("sumar", () => {
    it("debería retornar la suma de los dos números", () => {
      expect(sumar(1, 2)).toBe(3);
      expect(sumar(2, 2)).toBe(4);
    });
  });

  describe("multiplicar", () => {
    it("debería retornar la multiplicación de los dos números", () => {
      expect(multiplicar(1, 2)).toBe(2);
      expect(multiplicar(2, 2)).toBe(4);
    });
  });

  describe("dividir", () => {
    it("debería retornar la división del primer número por el segundo", () => {
      expect(dividir(1, 2)).toBe(0.5);
      expect(dividir(2, 2)).toBe(1);
    });
  });

  describe("multiplicarYSumar", () => {
    it("debería retornar la multiplicación del primer número por el segundo, y luego sumarle el tercero", () => {
      expect(multiplicarYSumar(1, 2, 3)).toBe(5);
      expect(multiplicarYSumar(2, 2, 3)).toBe(7);
    });
  });

  describe("sumarYDividir", () => {
    it("debería retornar la suma del primer número al segundo, y luego dividir el resultado por el tercero", () => {
      expect(sumarYDividir(1, 2, 3)).toBe(1);
      expect(sumarYDividir(7, 2, 3)).toBe(3);
    });
  });

  describe("calcularTotalConIva", () => {
    it("debería retornar el total de una compra, sumando el precio y el IVA (21%)", () => {
      expect(calcularTotalConIva(100)).toBe(121);
      expect(calcularTotalConIva(200)).toBe(242);
    });
  });

  describe("numeroRandom", () => {
    it("debería retornar un número random entre 0 y 1", () => {
      const numero = numeroRandom();
      expect(numero).toBeGreaterThanOrEqual(0);
      expect(numero).toBeLessThan(1);
    });
  });

  describe("numeroRandomEntero", () => {
    it("debería retornar un número random entero entre 0 y 10", () => {
      const numero = numeroRandomEntero();
      expect(numero).toBeGreaterThanOrEqual(0);
      expect(numero).toBeLessThanOrEqual(10);
    });
  });
});
