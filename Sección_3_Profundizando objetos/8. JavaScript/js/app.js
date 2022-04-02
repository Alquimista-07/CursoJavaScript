// Objeto Booleano

var a = true;
var b = false;

var c = new Boolean(); // Devuelve un objeto de tipo booleano y por defecto tiene el valor false
console.log( c );

var d = new Boolean("-1"); // Al indicar el valor regresa un true pero le estoy enviando un string
console.log( d );

// Incluso puedo mandar un "false" y me devuelve true
var e = new Boolean("false");
console.log( e );

// Pero si lo envío como numérico
var f = new Boolean(1); // Regeresa true
console.log( f );

// En pocas palabras el valor por defecto de un Boolean va a ser false si y solo si es 0, -0, null, false, NaN, undefined y un string vacio ("")

// Un error que se suele cometer es el siguiente
var g = "false";

// Todo lo que sea cadena de texto no vacia devuelve true por lo tanto se comete el error que a pesar de que se supone que es false
// nos devuelve true y al hacer una validación podemos cometer el error pensando que le estamos diciendo que es false y aun asi sigue 
// teniendo un comportamiento no deseado
var h = new Boolean( g ); 
console.log( h );

// Otro error que se comete puede ser
var i = new Boolean(); // Acordandonos siempre es false por defecto
console.log( i.valueOf() );

// Acá estamos errando porque no indica que i sea falso solo estamos diciendo que si i tiene algún valor
// Por lo tanto lo hace
if( i ){
    console.log("Me imprimí");
}

if( 1 ){
    console.log("Me imprimí 2");
}

if( "Juan" ){
    console.log("Me imprimí 3");
}

// Ahora i es un objeto si necesito evaluarlo como tal podemos hacer lo siguiente:
// Y acá si lo va a hacer de validar si es verdadero y no imprime porque ahora si le
// estamos pasando falso
if( i.valueOf() ){
    console.log("Me imprimí 4");
}

// Pero pues basicamente si necesitamos validar simplemente hacemos lo siguiente
var j = false;
var k = true;

if( j ){
    console.log("Me imprimí 5");
}

if( k ){
    console.log("Me imprimí 6");
}

// NOTA: Y hay que tener cuidado cuando usamos el booleano como un objeto,
//       es decir definirlo como var l = new Boolena(), obviamente sirve
//       pero si lo podemos usar var l = flase o true pues es mejor hacerlo 
//       de esa forma y nos ahorramos problemas.
