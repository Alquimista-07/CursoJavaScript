// Sobrecarga de operadores

// En Javascript a diferencia de otros lenguajes de programación como Java no tenemos
// la sobrecarga de metodos u operadores, ya que cuando se hace el barrido del archivo
// la sigiente función sobreescribe a la anterior

function crearPersona(){

}

function crearPersona( nombre ){

}

function crearPersona( nombre, apellido ){

}

// Entonces como lidiamos con la sobrecarga de operadores en JavaScript
function crearProducto( nombre, precio ){

    nombre = nombre || "Sin Nombre"; // Si no viene nombre el valor de nombre es Sin Nombre
    precio = precio || 0;            // Si no viene precio el valor de precio es cero

    console.log( "Producto:", nombre, " Precio:", precio );

}

function crearProducto100( nombre ){

    crearProducto(nombre, 100);

}

function crearProductoCamisa( precio ){

    crearProducto( "Camisa", precio );

}

crearProducto(  );
crearProducto( "Lapiz" );
crearProducto100( "Corrector" );
crearProductoCamisa( 75 );

// NOTA: Esta no es la forma como querríamos llevar la sobrecarga de métodos pero
//       es una forma de hacerlo, tal vez más adelante el ES6 o nuevas versiones 
//       esto sea implementado