// Modo Estricto "use strict"

// JavaScritp tiene algo que se llama modo estricto
// que es una característica adicional pero no debemos
// confiar en ella al 100% porque diferentes navegadores
// Lo interpretan de diferentes maneras

// Entonces supongamos que tenemos lo siguiente:
// Acá no le estoy diciendo que como tal es una variable
// pero JavaScript lo interpreta, le asigna el valor y la
// podemos usar.
// NOTA: Para ver quitar comentarios y comentar el use strict
/*
nombre = "Juan";

console.log( nombre );
*/

// Pero para hacer que javascript sea interpretado de una manera
// más estricta usamos lo siguiente:

"use strict";
// Y lo que hace es que JavaScript sea más rigurso al momento de evaluar
// ciertas cosasa. Como por ejemplo si al siguiente codigo no le colocamos el
// var, let o const, es decir, no esta definida por lo tanto nos va a arrojar 
// error.

// NOTA: Si lo ponemos a lo descarado en el top del archivo, todos los archivos
//       de JavaScript posteriores a este van a ser evaluados usando el modo 
//       estricto. Por lo tanto pueda que ser util como perjudicial ya qu por 
//       ejemplo si usamos librerias de terceros y estás no usan el modo estricto
//       podrían presentarse errores o comportamientos no deseados en la aplicación

//nombre = "Juan";
let nombre = "Juan";

console.log( nombre );

//NOTA: Pero también podemos meter el use strict en funciones y de esta forma controlar
//      un poco lo que se dijo anteriormente
function getNombre(){
    "use strict";

    // De momento esto no da error ya que cuando se creo el contexto del archivo por lo que
    // habíamos visto en el tema de funciones es como si la función estuviera cerrada y solo
    // se presentaría al momento de ejecutar la función
    //nombre2 = "Juan";

    var nombre2 = "Juan";

    return nombre2;
}

console.log( getNombre() );

// Ahora si quisiera que todo mi archivo fuera validado con el uso estricto
// deberíamos encapsularto en una función anónima. Por ejemplo
(function () {
    "use strict";

    function getNombre(){

        var nombre2 = "Juan";
    
        //var nombre2 = "Juan";
    
        return nombre2;
    }

    // nombre3 = "Ariadna";
    let nombre3 = "Ariadna";
    
    console.log( nombre3 );
    
    console.log( getNombre() );
    

})(); // La invocamos con ()

// NOTA: Es importante que si usamos el modo estricto lo mejor es encpasular
//       el código y no dejarlo al inicio del archivo por la razón que se 
//       mencionó anteriormente
