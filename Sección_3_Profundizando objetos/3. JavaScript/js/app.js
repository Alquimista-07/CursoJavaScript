// Argumentos - arguments

// Las funciones también tiene un prototype, en este caso por ejemplo tenemos arguments
function miFuncion(a, b, c, d){

    // EL arguments no hace referencia a las variables que colocamos dentro de los ()
    // Hacen referencia al valor que envío cuando invoco la función
    console.log( arguments );

    console.log( a + b + c + d);
    console.log( "Suma de número con undefined: ", 30 + undefined ); // Regresa NaN es decir algo que no es un número

}

// Acá cuando invoco la función usamos el prototype arguments
miFuncion(10, 20, 30, 40, {}, function(){});

miFuncion(10, 20, 30);




function miFuncion2(a, b, c, d){

    // EL arguments no hace referencia a las variables que colocamos dentro de los ()
    // Hacen referencia al valor que envío cuando invoco la función
    console.log( arguments );
    
    // Ahora si necesitaramos a fuerza que nuesta funcion recibiera los 4 número podríamos validarlo con la ayuda del arguments
    // de la siguiente forma:
    if( arguments.length != 4 ){
        console.error("La función necesita 4 parpametros");
        // Nos salimos de la función usando el return
        return;
    }

    console.log( a + b + c + d);

}

// Si nos faltan elementos se sale de la función y no ejecuta nada más por la validación que se colocó
miFuncion2(10, 20, 30); // Esto para evitar que salga el NaN

// Como pasamos los 4 elementos ejecuta la función no se sale y nos muestra 100
miFuncion2(10, 20, 30, 40); 

// Y si mandamos más de los argumentos necesasrio sucede lo mismo que se sale de la función
miFuncion2(10, 20, 30, 40, 50, 60, 70, 80, 80);