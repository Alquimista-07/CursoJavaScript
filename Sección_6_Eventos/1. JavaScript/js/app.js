// Eventos |0|

// Los eventos no sen más que las acciones que hacen que se dispare una función

function evento( arg ){

    console.log( "Me disparé" );
    console.log( arg );
    // console.log( arg.keyCode ); // Esto nos permite obtener el codigo de la letra cuando hacemos keypressed
    // console.log( arg.x, arg.y ); // Este nos permite obtener la posición en la cual le hice click al botón, es decir, en una esquina, en el centro, etc.

}

//* ****************************************************************************************************** */
// Lo siguiente es para dar un mejor manejo a los eventos usando los id de los elementos html
//* ****************************************************************************************************** */

var objeto = document.getElementById( "objDemo" );
console.log( objeto );

var objeto2 = document.getElementById( "objDemo2" );
console.log( objeto2 );

// Y con el elemento referenciado le podemos agregar eventos desde JavaScript
objeto.addEventListener( "keypress", evento ); // recibe como primer parámetro el tipo que en este caso es cuando presionamos una tecla 
                                             //y como segundo parametro recibe la función que se va a ejecutar.
                                             // NOTA: Ahora esto nos devuelve un objeto con muchos elementos con los cuales podemos 
                                             //       trabajar, como por ejemplo si presionó shift, ek key code entre otros y los manejamos
                                             //       como siempre lo hacemos al manejar un objeto común y corriente

// Otro ejemplo
objeto2.addEventListener("click", evento); // Pasa lo mismo que el anterior nos devuelve un objeto

// Cuando hacemos el click nos devuelve un isTrusted que indica que el usuario realizo el click y devuelve true
// en caso contrario como por ejemplo con la siguiente linea de código devuelve un false porque estoy forzando el
// click desde el código
objeto2.click()