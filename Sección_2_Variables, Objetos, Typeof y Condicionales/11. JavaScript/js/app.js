//  Prototipos: prototype

// Los prototipos permite expandir este tipo de objetos y agregarles
// propiedades y métodos.
// NOTA: Un protoripo puede tener prototipos y no hay límite de prototipos

// Función de primer clase
function Persona(){
    this.nombre   = "Juan",
    this.apellido = "Hernández",
    this.edad     = 30;

    // Creamos un método
    this.imprimirInfo = function(){
        console.log( this.nombre + " " + this.apellido + " (" + this.edad + ")");
    }
}

// Ejemplo de prototipos
Persona.prototype.pais = "Tokio" // Agregamos una propiedad de tipo primitiva

var juan = new Persona();

// Usamos el método
juan.imprimirInfo();

console.log( juan );
console.log( juan.pais ); // Lo que hace Javascript es que cuando es llamada una propiedad que no se encuentra en mi función
                          // Lo primero que hace es mirar en la sección proto (Prototipos: prototype) y si encuentra el metodo o la propiedad 
                          // ahí la va a ejecutar o la va a traer

// Para que sirven los protoripos, imaginemonos que tenemos una base de datos con 1000 registros de persona
// y los campos no cambian, solo cambia la información almacenada en cada campo. Pero la función imprimirInfo
// la tenemos 1000 veces a pesar de que no cambie en nada dependiendo de la persona.
// Por lo tanto el objetivo de los prototipos es hacer más eficiente el uso de los objetos.
// Por lo tanto la ventaja es que solo tenemos 1000 registros cargados en memoria y no 1000 de data no repetida

// Ahora ¿Cómo hago una fución de tipo protoripo
Persona.prototype.imprimirInfo2 = function(){
    // Y esto es lo mismo que tengo dentro de mi función de primera clase Persona
    // solo que ya no lo tendría dentro de mi función y lo podría quitar
    console.log( this.nombre + " " + this.apellido + " (" + this.edad + ")");

}

console.log( juan.imprimirInfo2() );

// Podemos hacer más cosas aún con los prototipos
// Por ejemplo voy a decir que voy a meter un prototipo a las variables de tipo Number
// Y esto nos permite expandir nuestros horizontes ya que podemos alterar y meter prototipos
// para meter funciones fáciles de llamar directamente contra las varaibales, pero lo recomendable
// es no meter prototipos a las variables primitivas porque no sabemos exactamente en que parte de nuestro
// javascript estarán y lo recomendado es manejar los prototipos unicamente a nuestros objetos personalizados

Number.prototype.esPositivo = function(){

    if( this > 0 ){
        return true;
    }
    else{
        return false;
    }

}

var a = 1;
console.log( a.esPositivo() );

var b = -1;
console.log( b.esPositivo() );
