// El reorno de las funciones

// Las funciones pueden regresar un tipo primitivo, undefined, un objeto, null o una función

//-------------------------------------------------------------------------
// Función que retorna número
//-------------------------------------------------------------------------
function obtenerAleatorio(){
    // Regresa un numero aleatorio etre 0 y 1 sin contar el 1
    return Math.random(); // Simpre retorna un número

}

// Ahora podemos hacer lo siguiente ya que como regresa un número
// la podemos tratar como un número
console.log( obtenerAleatorio() + 10 ); // genera aleatorio entre 0 y 1 (sin contar el 1) y le suma 10

//-------------------------------------------------------------------------
// Función que retorna cadena de texto
//-------------------------------------------------------------------------
function obtenerNombre(){
    return "Juan";
}

console.log( obtenerNombre() + " Padilla" );

var nombre = obtenerNombre();
console.log( nombre );

//-------------------------------------------------------------------------
// Función que retorna un booleano
//-------------------------------------------------------------------------
function esMayor05(){
    
    if (obtenerAleatorio() > 0.5){
        return true;
    }   
    else{
        return false;
    }

    // Si no se cumple retorna undefined ya que las funciones siempre retornan
    // un valor
}

console.log( esMayor05() );

// Como la función esMayor05 podemos tomar decisiones
if( esMayor05() ){ // Aca no necesito igualarlo ya que basicamente estoy preguntando si es true
    console.log("Es mayor a 0.5");
}
else{
    console.log("Es menor a 0.5");
}

//-------------------------------------------------------------------------
// Funciones qeu retornan objetos
//-------------------------------------------------------------------------
// De la misma forma se puede retornar un objeto explicito o anónimo
//Anónima
function crearPersona( nombre, apellido ){

    return {
        nombre: nombre, // El primer par es el indicativo de la propiedad: el segundo es el valor
        apellido: apellido // El primer par es el indicativo de la propiedad: el segundo es el valor
    }

}

var persona = crearPersona("Juan", "Padilla");
console.log( persona );
// Esto nos devuelve un objeto y podemos usar la notación punto o llaves
console.log( persona.nombre );
console.log( persona["apellido"] );

//Explícita
function crearPersona2( nombre2, apellido2 ){

    var obj = {
        nombre: nombre2, // El primer par es el indicativo de la propiedad: el segundo es el valor
        apellido: apellido2 // El primer par es el indicativo de la propiedad: el segundo es el valor
    }

    return obj;

}

var persona2 = crearPersona2("María", "Hernández");
console.log( persona2 ); 

// Esto nos devuelve un objeto y podemos usar la notación punto o llaves
console.log( persona2.nombre );
console.log( persona2["apellido"] );


//-------------------------------------------------------------------------
// Funciones qeu retornan funciones
//-------------------------------------------------------------------------
// También podemos hacer la función anónima o explícita

// Creamos una función que retorna una anónima
function creaFuncion(){

    // Si queremos mandar parametros lo podemos hacer
    return function( nombre ) {

        console.log("Me creo " + nombre );

    }

}

var nuevaFuncion = creaFuncion();
nuevaFuncion( persona.nombre );

// NOTA: la función puede retornar otra función y esa a su vez puede retornar otra.
// Por ejemplo:
function creaFuncion2(){

    // Si queremos mandar parametros lo podemos hacer
    return function( nombre ) {

        console.log( "Me creo " + nombre );

        return function() {
            console.log( "Segunda función" );
        }

    }

}

var nuevaFuncion2 = creaFuncion2();
var segundaFuncion = nuevaFuncion2( persona.nombre );
segundaFuncion();
