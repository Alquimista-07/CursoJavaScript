// Switch... condicional multiple

// Esta es otra estructura condicional que es muy usada cuando tenemos
// muchas decisiones que podemos tomar en base al valor de algo

var mes = 2;

switch( mes ){

    case 1:
        console.log( "Enero" );
        break; // NOTA: Si no ponemos el break al validar se posiciona en el case que cumple e inicia a 
               //       ejecutar secuencialmente a partir de ahí, por ejemplo si el case 2 cumple mostraaria
               //       Febrero, Marzo y lo demás. Entonces si queremos que se ejecute hasta ahí colocamos la 
               //       palabra reservada break

    case 2:
        console.log( "Febrero" );
        break; 

    case 3:
        console.log( "Marzo" );
        break;
    
    default:
        // Si mes no cumple ninguna de las condiciones anteriores hace esto
        console.log( "Cualquier otro mes" );

}

//* *********************************************************************************************************** */
// Ahora también podemos en el case meter código que se evalue y retorne un valor en específico
var mes2 = 40;

switch( mes2 ){

    // Como se muestra a continuación podemos meter funciones autoinvocadas, funciones anónimas,
    // valores . Y recordando que si hacemos que una función no regrese nada el valor devuelto es
    // undefined
    case ( 10 > 5 )? 40 : 1 :
        console.log( "Enero" );
        break;

    case 2:
        console.log( "Febrero" );
        break; 

    case 3:
        console.log( "Marzo" );
        break;
    
    default:
        // Si mes no cumple ninguna de las condiciones anteriores hace esto
        console.log( "Cualquier otro mes" );

}

//* ******************************************************************************************** */
var mes3 = undefined;

switch( mes3 ){

    // Como se muestra a continuación podemos meter funciones autoinvocadas, funciones anónimas,
    // valores . Y recordando que si hacemos que una función no regrese nada el valor devuelto es
    // undefined
    case ( 10 > 5 )? 40 : 1 :
        console.log( "Enero" );
        break;

    case undefined:
        console.log( "Febrero" );
        break; 

    default:
        // Si mes no cumple ninguna de las condiciones anteriores hace esto
        console.log( "Cualquier otro mes" );

}