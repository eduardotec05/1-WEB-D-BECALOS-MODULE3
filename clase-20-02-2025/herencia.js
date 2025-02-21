//HERENCIA

//Paso 1. Creación de la clase principal (clase padre, super clase)
class Persona {
  //en el constructor inicializamos los atributos
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  //metodos de la clase
  saludar(nombrePersona) {
    console.log("Hola", nombrePersona);
  }
}
console.log(Persona);
let persona1 = new Persona("Juan", 20);
persona1.saludar("Pedro");

// Paso 2. Creación de la clase hija (clase hija, sub clase de la clase padre)
class Estudiante extends Persona {
  constructor(nombre, edad, curso) {
    super(nombre, edad);
    this.curso = curso;
  }

  //metodos de la clase hija
  mostrarInfo() {
    console.log("Mi nombre es", this.nombre);
    console.log("Mi edad es", this.edad);
    console.log("Mi curso es", this.curso);
  }
}

let estudiante1 = new Estudiante("Juan", 20, "Ingenieria");
console.log(estudiante1);
estudiante1.mostrarInfo();

class EstudianteMusica extends Estudiante {
  constructor(nombre, edad, curso, instrumento) {
    super(nombre, edad, curso);
    this.instrumento = instrumento;
  }

  mostrarInfo() {
    super.mostrarInfo();
    console.log("Mi instrumento es", this.instrumento);
  }
}
let estudianteMusica1 = new EstudianteMusica("Juan", 20, "Ingenieria", "Guitarra");
estudianteMusica1.mostrarInfo();