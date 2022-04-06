// IF... ELSE...
// Decisiones

var nota = 55;

// La condición if puede o no puede ir con el else
if( nota >= 90 ){
    console.log( "A" );
}
else if( nota >= 80 ){
    console.log( "B" );
}
else if( nota >= 70 ){
    console.log( "C" );
}
else if( nota >= 60 ){
    console.log( "D" );
}
else{

    // Adicionalmente dentro de otra condición podemos agregar otra.
    // Y Algo interesante es lo siguiente
    if( nota > 50 )
        console.log( "F" );
    
    console.log( "Algo por aquí..." );

    // Y es como si yo tuviera esto
    // if( nota > 50 ){
    //     console.log( "F" );
    // }
    // Pero por legibilidad del codigo quedaría mejor abrir y cerrar con {} las condiciones
    
}

// NOTA: No es tan recomendable hacer ese if, if, if,..., para ello es mejor usar el switch case que se
//       explicará más adelante

console.log( "Termino el código" );

//-----------------------------------------------------------------------------------------------------------
// Otra forma 
//-----------------------------------------------------------------------------------------------------------
var a = 10;
var b = 20;

var c = 0;

// Quiero que c sea el valor mayor de a o b, entonces normalmente hariamos algo parecido a lo siguiente:
if( a > b ){
    c = a;
}
else{
    c = b;
}

console.log( c );

// Pero existe una forma más sencilla de hacer la misma 
// evaluación de una forma más corta
var d = 10;
var e = 20;

// Hacer una función que podría regresar un verdadero o falso,
// entonces tenemos que si d es mayor a e y colocamos el signo ? para que 
// evalue lo que esta en los paréntesis y determine si es un verdadero o falso
// entonces si es verdadero el return de esa función es d y si no b y en una sola
// linea tenemos la misma decisión que teníamos anteriormente
var f = ( d > e )? d : e;

console.log( f );

//---------------------------------------------------------------------------------------------
// Ahora si le agregamos características más interesantes tenemos:
//---------------------------------------------------------------------------------------------
var g = 10;
var h = 20;

var i = ( g > h )? function(){
    console.log( "G es mayor a h" );
    return g;
}() : function(){
    console.log( "H es mayor a g" );
    return h;
}(); // NOTA: Con los () invocamos la funión 

console.log( i );

//---------------------------------------------------------------------------------------------
// Otra forma corta de hacer validaciones es la siguiente:
//---------------------------------------------------------------------------------------------
var j = 10;
var k = undefined;

// Acá lo que quiero decir es que agarre el valor del que este definido y tenga valor
var l = j || k;

console.log( l );

//* ******************************* */
var m = undefined;
var n = 30;

// Acá lo que quiero decir es que agarre el valor del que este definido y tenga valor
var o = m || n;

console.log( o );

//* ******************************* */
// Ahora si tenemos lo siguiente:
var p = 30;
var q = 10;

// En este caso agarra es el primer valor (p) por defecto
// Entonces valida y dice p tiene un valor entonces agarro ese y no
// tiene en cuenta la otra
var r = p || q; 
console.log( r );

// NOTA: Y estas formas cortas son muy útiles cuando hacemos funciones que esperan
//       parámetros

function getNombre( nombre ){

    var nomb  = nombre  || "<Sin nombre>";

    console.log( nomb );
}

// Invocamos la función
getNombre();
getNombre( "Ariadna" );

//************************************************************** */
// Podríamos agregar más parametros a la condición en la cual se nos muestra que no necesariamente
// evaluamos 2 sino que se pueden evaluar 3 o más hasta que encuentre un valor válido en toda la línea
function getNombre2( nombre ){

    var nomb  = nombre  || null || "<Sin apellido>";

    console.log( nomb );
}

// Invocamos la función
getNombre2();

//************************************************************** */
function getNombre3( nombre ){

    var nomb  = nombre  || null || null || undefined;

    console.log( nomb );
}

// Invocamos la función
getNombre3();

//************************************************************** */
function getNombre4( nombre ){

    var nomb  = null  || null || null || undefined; // Regresa undefined ya que tiene más peso que el null

    console.log( nomb );
}

// Invocamos la función
getNombre4();

//************************************************************** */
function getNombre5( nombre ){

    var nomb  = null  || null || null || null; // Regresa null

    console.log( nomb );
}

// Invocamos la función
getNombre5();

//************************************************************** */
function getNombre6( nombre ){

    var nomb  = null  || null || null || 123; // Regresa 123 ya que tiene más peso que el null

    console.log( nomb );
}

// Invocamos la función
getNombre6();