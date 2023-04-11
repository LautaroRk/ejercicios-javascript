// En la entrada a un evento se permite el ingreso únicamente a mayores de 18 años.
// Completar la función para que devuelva true si la edad es mayor o igual a 18, o false en caso contrario.
// Para este ejercicio se deben utilizar las sentencias 'if' y 'else'.
function esMayorDeEdad(edad) {
  // ...
}

// Al igual que en el ejercicio anterior, completar la función para que devuelva true si la edad es mayor o igual a 18, o false en caso contrario.
// En este caso, no se pueden utilizar las sentencias 'if' ni 'else'.
function esMayorDeEdadVersionCorta(edad) {
  // ...
}

// En un evento se permite el ingreso a mayores de 18 años, pero no a mayores de 50.
// Completar la función para que devuelva true si la edad es mayor o igual a 18 y menor o igual a 50, o false en caso contrario.
function esMayorDeEdadPeroNoTanto(edad) {
  // ...
}

// En la entrada a un evento ofrecen descuentos para menores y jubilados (más de 60 años).
// Completar la función para que devuelva true si la edad es menor a 18 o mayor a 60, y false en caso contrario.
function esMenorOJubilado(edad) {
  // ...
}

// Una aplicación de citas requiere que los usuarios sean de la misma edad para poder chatear.
// Completar la función para que devuelva true si las edades son iguales, o false en caso contrario.
function tienenLaMismaEdad(edad1, edad2) {
  // ...
}

// En una aplicación de citas un poco menos estricta, se permite chatear a usuarios con 5 años de diferencia o menos.
// Completar la función para que devuelva true si la diferencia entre las edades es mayor o igual a 5, o false en caso contrario.
function seLlevanMasDe5Anios(edad1, edad2) {
  // ...
}

module.exports = {
  esMayorDeEdad,
  esMayorDeEdadVersionCorta,
  esMayorDeEdadPeroNoTanto,
  esMenorOJubilado,
  tienenLaMismaEdad,
  seLlevanMasDe5Anios,
};
