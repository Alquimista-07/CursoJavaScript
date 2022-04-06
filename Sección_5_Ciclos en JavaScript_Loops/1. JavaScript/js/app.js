// Ciclo While y Do While

//===============================================================================================
// WHILE
//===============================================================================================

var i = 0;

while( i < 10 ){

    i++; // Incrementamos i en 1 para que se saga del ciclo

    // Podemos hacer una terminación a la fuerza del ciclo, es decir,
    // continuar o salir del  y tenemos control total de esto y esto 
    // funciona para cualquier instrucción repetitiva
    if (i === 5){
        break;
    }

    console.log( i );
   

}

/************************************************ */
console.log( "===========================" );
/************************************************ */

var j = 0;

while( j < 10 ){

    j++; // Incrementamos i en 1 para que se saga del ciclo

    // A parte del break tenemos el continue que lo que va a hacer es que
    // cuando se cumple la condición vuelva a hacer la evaluación del while
    // y sigue adelante. Entonces en este caso en el console.log no nos muestra
    // el 5 porque no lo saltamos
    if (j === 5){
        continue;
    }

    console.log( j );
   

}

/************************************************ */
console.log( "===========================" );
/************************************************ */

//===============================================================================================
// DO WHILE
//===============================================================================================
// Este es como el ciclo while al reves, es decir, primero ejecuta aunque sea una vez
// y luego evalua la condición. Y acá también funciona el continue y el break
var k = 0;

do{

    k++;

    console.log( k );

}
while( k < 10 );

/************************************************ */
console.log( "===========================" );
/************************************************ */

var l = 0;

do{

    l++;
    console.log( l );
    
    break; // Si hago el break acá lo siguiente 
           // que este aá dentrojamás se va a ejecutar
           // porque cuando se incremente en 1 l la siguiente
           // instrucción es salirse del ciclo (break)

    console.log( l );

}
while( l < 10 );

/************************************************ */
console.log( "===========================" );
/************************************************ */

var m = 0;

do{

    m++;

    // Y pasa lo mismo con el continue y no muestra
    // el 5 como se vio en la explicación del ciclo 
    // while
    if ( m === 5){
        continue;
    }

    console.log( m );

}
while( m < 10 );

// NOTA: Hay que tener en cuenta es que cuando hagamos un while
//       estemos seguros que el ciclo while esta siendo terminado
//       en algún punto ya que podemos tener un error difícil de 
//       depurar y en algunos casos los navegadores web cuando
//       detectan que hay un script que esta trabado pueden terminar
//       bloqueando todo el código JavaScript de nuestro sitio web.