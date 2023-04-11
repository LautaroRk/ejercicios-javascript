const {
  calcularAreaYPerimetroDeUnCuadrado,
  tienenElMismoApellido,
  retornarPersonaMayor,
  saludar,
  enseniarSaludo,
} = require("../ejercicios/03.objetos");

describe("03 - Objetos", () => {
  describe("calcularAreaYPerimetroDeUnCuadrado", () => {
    it("debería retornar un objeto con la propiedad area y perimetro", () => {
      const lado = 5;
      const resultado = calcularAreaYPerimetroDeUnCuadrado(lado);
      expect(resultado).toHaveProperty("area");
      expect(resultado).toHaveProperty("perimetro");
    });

    it("debería retornar un objeto con el area y perimetro correctos", () => {
      const lado = 5;
      const resultado = calcularAreaYPerimetroDeUnCuadrado(lado);
      expect(resultado.area).toBe(25);
      expect(resultado.perimetro).toBe(20);
    });
  });
  describe("tienenElMismoApellido", () => {
    it("debería retornar true si las personas tienen el mismo apellido", () => {
      const persona1 = {
        nombre: "Juan",
        apellido: "Perez",
      };
      const persona2 = {
        nombre: "Maria",
        apellido: "Perez",
      };
      expect(tienenElMismoApellido(persona1, persona2)).toBe(true);
    });

    it("debería retornar false si las personas tienen distinto apellido", () => {
      const persona1 = {
        nombre: "Juan",
        apellido: "Perez",
      };
      const persona2 = {
        nombre: "Maria",
        apellido: "Gomez",
      };
      expect(tienenElMismoApellido(persona1, persona2)).toBe(false);
    });
  });

  describe("retornarPersonaMayor", () => {
    it("debería retornar null si las personas tienen la misma edad", () => {
      const persona1 = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
      };
      const persona2 = {
        nombre: "Maria",
        apellido: "Gomez",
        edad: 30,
      };
      expect(retornarPersonaMayor(persona1, persona2)).toBe(null);
    });

    it("debería retornar la persona con mayor edad", () => {
      const persona1 = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
      };
      const persona2 = {
        nombre: "Maria",
        apellido: "Gomez",
        edad: 20,
      };
      expect(retornarPersonaMayor(persona1, persona2)).toBe(persona1);
    });
  });

  describe("saludar", () => {
    it("debería imprimir por consola un mensaje con los datos de la persona", () => {
      const persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
      };
      const consoleSpy = jest.spyOn(console, "log");
      saludar(persona);
      expect(consoleSpy).toHaveBeenCalledWith(
        "Hola, soy Juan Perez y tengo 30 años"
      );
    });
  });

  describe("enseniarSaludo", () => {
    it("debería agregar un método saludar a la persona", () => {
      const persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
      };
      const personaConMetodo = enseniarSaludo(persona);
      expect(personaConMetodo).toHaveProperty("saludar");
      expect(typeof personaConMetodo.saludar).toBe("function");
    });

    it("debería llamar al método saludar de la persona", () => {
      const persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 30,
      };
      const consoleSpy = jest.spyOn(console, "log");
      const personaConMetodo = enseniarSaludo(persona);
      personaConMetodo.saludar();
      expect(consoleSpy).toHaveBeenCalledWith(
        "Hola, soy Juan Perez y tengo 30 años"
      );
    });
  });
});
