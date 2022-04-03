// Objeto Math

console.log(window.Math);

var PI = Math.PI;
var E  = Math.E;

console.log( PI );
console.log( E );

var num1 = 10.456789;
var num2 = 10.656789;

console.log( num1 );
console.log( num2 );

// Función de redondeo
console.log( Math.round(num1) );
console.log( Math.round(num2) );

// Función para colocarle 2 decimales
console.log( Math.round( num1 * 100) / 100 ); // El truco esta en que si queremos 2 decimales multiplicamos por 100, 3 por 1000, 4 por 10000, etc.

// Tenemos el floor
console.log( Math.floor(num1) ); // Deja el número entero en el que está, es decir, quita todos los decimales

// Aleatorio
var rnd = Math.random(); // Genera números aleatorios cercanos a cero sin incluir el 0 o el 1
console.log( rnd );

// Si queremos hacer una función para retornar un aleatorio entre 2 números
// Y como siempre bien podemos crear nuestros protoripos en el objeto Math y colocarlo en nuestro archivo de prototipos para 
// tenerlo a mano de forma fácil y rapida
function randomEntre( min, max ){

    return Math.floor( Math.random() * ( max - min + 1 ) + min );

}

console.log( randomEntre( 1, 6 ) );
console.log( randomEntre( 500, 1000 ) );

// Raiz cuadrada
console.log( Math.sqrt( 36 ) );

// Exponente
console.log( Math.pow( 6, 2 ) ); // Recibe la base como primer parámetro y luego el exponentease como primer parámetro y luego el exponente
console.log( Math.pow( 5, 3 ) ); 