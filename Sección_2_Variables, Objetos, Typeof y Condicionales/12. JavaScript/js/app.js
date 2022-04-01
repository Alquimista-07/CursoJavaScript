// Funciones anónimas

// Estas son bastante interesantes y nos ayudan a mantener el código bastante encapsulado
// y prevenir que nuestro código sea manipulado por otras secciones de nuestro DOM. Pero
// este no es el único uso de las funciones anónimas pero es el más común.

// Esta variable esta en el objeto global por lo tanto puede ser manipulada en cualuqier parte
// del programa
var a = 10;

console.log( a );

function cambiarA(){

    a = 20;

}

cambiarA();

console.log( a );

// Ahora como evitamos esto de que se pueda manipular por cualquier parte
// del programa.
// La principal forma es usar las funciones anónimas

// EJEMPLO 1

// Función anónima
( function() {

    var b = 10;

    console.log( b );

    function cambiarA(){

        b = 20;

    }

    cambiarA();

    console.log( b );

})(); // Toda función se tiene que invocar, por lo tanto al colocar los () luego de } la invocamos

// Entonces vemos lo mismo pero con la diferencia de que la variable  b no la vemos en el objeto 
// global, es decir esta escondidad para el objeto global.
// OJO: Si volvemos a colocar la var b fuera de la función anónima lo que sucede es que va a estar 
// visible para el objeto global, por lo tanto se va a poder modificar.
// NOTA: De esta manera aunque tengamos otro archivo con otra variable llamada igual (a en este caso)
//       no va a ser afectada y van a ser trabajadas independientemente y protegidas de modificaciones que 
//       pueden causar comportamientos extraños y no deseados en nuestro código

// EJEMPLO 2
// Otro tipo muy común de funciones anónimas es la siguiente:

function ejecturarFuncion( fn ){

    if (fn() === 1 ){

    return true;
    
    }
    else{
        return false;
    }

}

// Imprimimos usando la función anónima
// nos muestra el mensaje y el resultado del return
console.log(  

ejecturarFuncion( function(){
    
        console.log( "Función anónima ejecutada!!!..." );
        // Estas funciones son totalmente validas que inclusive pueden devolver valores
        return 1;

    })
);

// NOTA: Realmente esto es muy usado en las librerias de javascript y angular en su código
// interno y nos permite a nosostros el control y la seguridad que podemos hacer cálculos
// o llamar procedimientos en cualquier lado