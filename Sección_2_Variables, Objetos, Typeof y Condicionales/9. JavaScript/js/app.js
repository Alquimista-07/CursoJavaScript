// Palabra reservada new

// Usando la palabra reservada new lo que hace es crear un objeto vacío
// pero si necesita que le especifiquemos el tipo de ese objeto vacío

function Persona(nombre, apellido, edad){

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + " (" + this.edad + ")";
    }

}

var juan = Persona();
var juan2 = new Persona("Juan", "Hernández", 30);

console.log( juan ); // Muestra undefined
console.log( juan2 ); // Muestra un objeto de tipo persona porque le agregamos el new
console.log( juan2.nombre );
console.log( juan2.imprimirPersona() );