//Clase Padre Animal
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      this._nombre = nombre;
      this._edad = edad;
      this._img = img;
      this._comentarios = comentarios;
      this._sonido = sonido;
    }
  
    getNombre() {
      return this._nombre;
    }
  
    getEdad() {
      return this._edad;
    }
  
    getImg() {
     return this._img
    }
  
    getComentarios() {
      return this._comentarios;
    }
  
    getSonido() {
      return this._sonido;
    }
  }
  //Clases Hijos
  export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
  
    rugir() {;
      return this._sonido;
    }
  }
  
  export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
  
    aullar() {
      return this._sonido;
    }
  }
  
  export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
  
    grunir() {
      return this._sonido;
    }
  }
  
  export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
  
    sisear() {
      return this._sonido;
    }
  }
  
  export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
  
    chillar() {
      return this._sonido;
    }
  }