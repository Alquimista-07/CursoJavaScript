//
// escape, unescape y cookies
//
// NOTA: Para ejecutar el servidor de node ejecutamos en consola 
//       htt-server -p 8081 -o (Donde el -p indica el puerto en el que queremos que se ejecute
//       y el -o indica que queremos que abra automáticamente el navegador)
 
// Las cookies es informaión que podemos salvar en la máquina del cliente, más que todo para saber
// que idioma seleccionó, o el correo electrónico de la persona, el nombre de usuario, ocsas generales que
// no sean sensibles y que sirven para el funcionamiento de nuestra página.
// Las cookies pueden sobrevivir reinicios de navegador web, o se puede colocarles una fecha de expiración.

// Para crear una cookie hacemos lo siguiente:
document.cookie = "nombre=juan;"; // Quiero crear una cookie que sera el nombre de la persona que esta usando el navegador en ese momento
document.cookie = "apellido=hernandez;";


// Ahora si queremos leer u obtener las cookies (para ver descomentar lo siguiente)
//var cookies = document.cookie;
//console.log( cookies );

// NOTA: Si comentamos el document.cookie = "nombre=juan" y recargamos el navegador la cookie va a permanecer ahí porque aún existe
//       de la misma forma si cierro el navegador y lo vuelvo a abrir va a volver a aparecer porque ya esta almacenada y va a persistir.
//       Es buena práctica colocarles una fecha de expiración y si se dejan sin fecha o en blanco la cookie posiblemente se destruya cuando
//       se cierre el navegador web

// Pero lo anterior no es una buena práctica de crear cookies
// entonces nos vamos a crear nuestras funciones personalizadas
// que sería lo más práctico

function crearCookie( nombreCookie, valor ){

    // Escapamos la cookies que lo que quiere decir es cambiar los caracteres que pueden darnos errores
    // por caracteres que sabemos que no dan problemas.
    // Por ejemplo si tenenos lo siguiente:
    //
    // document.cookie = "apellido=hern;andez;";
    // 
    // El ; que se encuentra entre el apellido daría problemas porque nos va a cortar el valor de la cookie y no va a quedar
    // completo, es decir la cookie quedaria apellido=hern yq eua javascript piensa que luego del ; sigue otro tipo de definición
    // de variables por ejemplo la duración de la cookie, si es una cookie segura entre otra cosas.
    // Pero que pasa si realimente necesitamos meter el ; en ese sitio, acá entra el concepto de lo que es el escape o escapado
    // y no vamos a meter nigún valor de cookie si no esta escapado (ver código de más abajo)

    // Escapamos el valor
    valor = escape(valor);

    // Colocamos una fecha de expiración de la cookie
    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() + 1 ); // Sumamos 1 al mes actual para que la cookie expire en un mes

    // Recibe el nombre, el valor y la fecha de expiración usando la palabra reservada expires
    document.cookie = nombreCookie + "=" + valor + ";expires=" + hoy.toUTCString() + ";";
    
    
}

//----------------------------------------------------------------------------
// Explicación de lo que hace escape y unescape
//----------------------------------------------------------------------------
var demo = "123;123*123'123/ 123";
console.log("Sin escape: ", demo );
console.log("Con escape: ", escape( demo ) );
// También existe la versión opuesta que es el unescape
console.log("unescape: ", unescape( escape(demo) ) ); // Recibe un valor escapado y sirve para recuperarlo
//----------------------------------------------------------------------------

// Ahora para eliminar una cookie
function borrarCookie( nombre ){

    var hoy = new Date();
    hoy.setMonth( hoy.getMonth() - 1 );

    // Recibe el primer parametro nombre, el valor cualquier cosa (en este caso es una x), y la fecha
    document.cookie = nombre + "=x;expires=" + hoy.toUTCString() + ";";

}

// Función para optener la cookie para trabajar con ella
function obtenerCookie( nombre ){

    // Ahora si queremos leer las cookies
    var cookies = document.cookie;

    // Separamos las cookies en un arreglo
    var cookieArr = cookies.split("; ");
    console.log( cookieArr );

    // Obtenemos los datos
    for( var i=0; i < cookieArr.length; i++){

        var parArr = cookieArr[i].split("=");
        cookieArr[i] = parArr;

        if( parArr[0] === nombre ){
            // Si el nombre de la cookie que estan en la posición cero
            // y si me coincide con el nombre que estoy solicitando de cookie
            // me regresa el valor desescapado que se que esta en la posición uno
            // del arreglo
            return unescape( parArr[1] );
        }
        
    }

    console.log( cookieArr );

    // Retorno undefined si no existe la cookie, por ejemplo si busco el numero de casa y no existe entonces regreso undeifined
    return undefined;

}

// Invocamos obtner cookie
console.log( obtenerCookie( "correo" ) );
console.log( obtenerCookie( "direccion" ) );

// Ahora podemos hacer algo más interesante como pasarle los valores a la función y creamos la cookie
crearCookie( "nombre","Juan" );
crearCookie( "correo","jdca.07@gmail.com" );
crearCookie( "direccion","San José, Costa Rica" );

borrarCookie( "nombre" ); // destruye la cookie


// Descomentar lo siguiente para ver comportamiento
// Ahora si queremos leer u obtener las cookies
//var cookies = document.cookie;

//console.log( cookies );
