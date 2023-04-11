const {
  numeroMayor,
  promedio,
  promedioDeEdad,
  minimoYMaximo,
  convertirPalabraEnArray,
} = require("../ejercicios/04.arrays");

describe("04 - Arrays", () => {
  describe("numeroMayor", () => {
    it("debería retornar el mayor número del arreglo", () => {
      expect(numeroMayor([1, 2, 3])).toBe(3);
      expect(numeroMayor([1, 3, 2])).toBe(3);
      expect(numeroMayor([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toBe(10);
    });
  });

  describe("promedio", () => {
    it("debería retornar el promedio de los números del arreglo", () => {
      expect(promedio([1, 2, 3])).toBe(2);
      expect(promedio([1, 3, 2])).toBe(2);
      expect(promedio([1, 10, 2, 9, 3, 8, 4, 7, 5, 6])).toBe(5.5);
    });
  });

  describe("promedioDeEdad", () => {
    it("debería retornar el promedio de edad de las personas", () => {
      expect(promedioDeEdad([{ edad: 30 }, { edad: 20 }, { edad: 10 }])).toBe(
        20
      );
      expect(promedioDeEdad([{ edad: 10 }, { edad: 30 }, { edad: 20 }])).toBe(
        20
      );
      expect(
        promedioDeEdad([
          { edad: 10 },
          { edad: 20 },
          { edad: 30 },
          { edad: 40 },
          { edad: 50 },
          { edad: 60 },
          { edad: 70 },
          { edad: 80 },
          { edad: 90 },
          { edad: 100 },
        ])
      ).toBe(55);
    });
  });

  describe("minimoYMaximo", () => {
    it("debería retornar un arreglo con el menor y el mayor número del arreglo", () => {
      expect(minimoYMaximo([1, 2, 3])).toEqual([1, 3]);
      expect(minimoYMaximo([1, 3, 2])).toEqual([1, 3]);
      expect(minimoYMaximo([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 10]);
    });
  });

  describe("convertirPalabraEnArray", () => {
    it("debería retornar un arreglo con cada letra de la palabra", () => {
      expect(convertirPalabraEnArray("hola")).toEqual(["h", "o", "l", "a"]);
      expect(
        convertirPalabraEnArray("Un String también es un objeto.")
      ).toEqual([
        "U",
        "n",
        " ",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
        " ",
        "t",
        "a",
        "m",
        "b",
        "i",
        "é",
        "n",
        " ",
        "e",
        "s",
        " ",
        "u",
        "n",
        " ",
        "o",
        "b",
        "j",
        "e",
        "t",
        "o",
        ".",
      ]);
    });
  });
});
