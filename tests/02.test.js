const {
  esMayorDeEdad,
  esMayorDeEdadPeroNoTanto,
  esMenorOJubilado,
  tienenLaMismaEdad,
  seLlevanMasDe5Anios,
  esMayorDeEdadVersionCorta
} = require("../ejercicios/02.condicionales");

describe("02 - Condicionales", () => {
  describe("esMayorDeEdad", () => {
    it("debería retornar true si la edad es mayor o igual a 18", () => {
      expect(esMayorDeEdad(18)).toBe(true);
      expect(esMayorDeEdad(120)).toBe(true);
    });

    it("debería retornar false si la edad es menor a 18", () => {
      expect(esMayorDeEdad(17)).toBe(false);
      expect(esMayorDeEdad(0)).toBe(false);
    });

    it("debería utilizar if y else", () => {
      expect(esMayorDeEdad.toString().includes("if")).toBe(true);
      expect(esMayorDeEdad.toString().includes("else")).toBe(true);
    });
  });

  describe("esMayorDeEdadVersionCorta", () => {
    it("debería retornar true si la edad es mayor o igual a 18", () => {
      expect(esMayorDeEdadVersionCorta(18)).toBe(true);
      expect(esMayorDeEdadVersionCorta(120)).toBe(true);
    });

    it("debería retornar false si la edad es menor a 18", () => {
      expect(esMayorDeEdadVersionCorta(17)).toBe(false);
      expect(esMayorDeEdadVersionCorta(0)).toBe(false);
    });

    it("NO debería utilizar if ni else", () => {
      expect(esMayorDeEdadVersionCorta.toString().includes("if")).toBe(false);
      expect(esMayorDeEdadVersionCorta.toString().includes("else")).toBe(false);
    });
  });

  describe("esMayorDeEdadPeroNoTanto", () => {
    it("debería retornar true si la edad es mayor o igual a 18 y menor o igual a 50", () => {
      expect(esMayorDeEdadPeroNoTanto(18)).toBe(true);
      expect(esMayorDeEdadPeroNoTanto(50)).toBe(true);
    });

    it("debería retornar false si la edad es menor a 18 o mayor a 50", () => {
      expect(esMayorDeEdadPeroNoTanto(17)).toBe(false);
      expect(esMayorDeEdadPeroNoTanto(51)).toBe(false);
    });
  });

  describe("esMenorOJubilado", () => {
    it("debería retornar true si la edad es menor a 18 o mayor a 60", () => {
      expect(esMenorOJubilado(17)).toBe(true);
      expect(esMenorOJubilado(61)).toBe(true);
    });

    it("debería retornar false si la edad es mayor o igual a 18 y menor o igual a 60", () => {
      expect(esMenorOJubilado(18)).toBe(false);
      expect(esMenorOJubilado(60)).toBe(false);
    });
  });

  describe("tienenLaMismaEdad", () => {
    it("debería retornar true si las edades son iguales", () => {
      expect(tienenLaMismaEdad(18, 18)).toBe(true);
      expect(tienenLaMismaEdad(120, 120)).toBe(true);
    });

    it("debería retornar false si las edades son distintas", () => {
      expect(tienenLaMismaEdad(18, 17)).toBe(false);
      expect(tienenLaMismaEdad(120, 0)).toBe(false);
    });
  });

  describe("seLlevanMasDe5Anios", () => {
    it("debería retornar true si la diferencia entre las edades es mayor o igual a 5", () => {
      expect(seLlevanMasDe5Anios(18, 13)).toBe(true);
      expect(seLlevanMasDe5Anios(120, 0)).toBe(true);
    });

    it("debería retornar false si la diferencia entre las edades es menor a 5", () => {
      expect(seLlevanMasDe5Anios(18, 17)).toBe(false);
      expect(seLlevanMasDe5Anios(120, 119)).toBe(false);
    });
  });
});
