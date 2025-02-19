/*
    POO
    -CLASE: Es una plantilla para crear objetos. Define los atributos y métodos de la clase.
    Se define con la palabra reservada class seguido del nombre empezando en mayúscula y terminando en singular.
    -OBJETO: Es una instancia de una clase. Se define con la palabra reservada new seguido del nombre de la clase
    -ATRIBUTO: Es una característica de un objeto. Se define dentro de la clase con la palabra reservada var seguido del nombre del atributo.
    -MÉTODO: Es una acción que se puede realizar sobre un objeto.
    -CONSTRUCTOR: Es una función que se ejecuta cuando se crea un objeto. Es un método especial que se ejecuta automáticamente cuando se crea un objeto.
*/

//PASO 1: Definir la clase con sus atributos y métodos
class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(
      `Hola, mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    );
  }

  despedir(nombreAmigo) {
    console.log("Hasta luego " + nombreAmigo);
  }
}

// PASO 2: Crear un objeto de la clase Persona
let juan = new Persona("Juan", "Perez", 25);
console.log(juan);

//PASO 3: Llamar a un método de la clase
juan.saludar();

//Ejercicio: crear un objeto a partir de la clase Persona con los datos del nomnbre = Lucia
//apellido = Lopez y edad = 30

let lucia = new Persona("Lucia", "Lopez", 30);

console.log(lucia);
lucia.saludar();
lucia.despedir("Gerardo");
