// Completar la función para que devuelva un objeto con las propiedades 'area' y 'perimetro' calculadas a partir de un lado.
function calcularAreaYPerimetroDeUnCuadrado(lado) {
  // ...
}

// En los siguientes ejercicios vamos a trabajar con objetos que representan personas. Cada persona tiene las propiedades 'nombre', 'apellido' y 'edad'.
// Por ejemplo:
// {
//   nombre: "Carlos",
//   apellido: "García",
//   edad: 30,
// }

// Completar la función para que devuelva true si las personas tienen el mismo apellido, o false en caso contrario.
function tienenElMismoApellido(persona1, persona2) {
  // ...
}

// Completar la función para que devuelva la persona (objeto completo) con mayor edad, o null si tienen la misma edad.
function retornarPersonaMayor(persona1, persona2) {
  // ...
}

// Completar la función para que IMPRIMA POR CONSOLA un mensaje que diga "Hola, soy {nombre} {apellido} y tengo {edad} años" utilizando los datos de la persona recibida como parámetro
function saludar(persona) {
  // ...
}

// Esta función recibe una persona como la del ejemplo anterior y le agrega un método 'saludar'. Para no repetir el código de la función 'saludar', se debe utilizar la función 'saludar' que ya está definida.
function enseniarSaludo(persona) {
  // ...
}

module.exports = {
  calcularAreaYPerimetroDeUnCuadrado,
  tienenElMismoApellido,
  retornarPersonaMayor,
  saludar,
  enseniarSaludo,
};
