// Objeto Number

var a = 10.456789;

console.log( "Fixed:", a.toFixed(2) ); // Formatea el número a una cantidad de datos decimales y su máximo es 21

a = a.toString();
console.log( "toString:", a );

var b = 10.456789
console.log( b.toPrecision(4) ); // Funciona de forma algo similar a hacer un redondeo pero no es lo mismo

b = 10;
b *= 1000000000000000000000000000000; // y la cantidad de números que aguanta es bastante alta y la cual es 308 y luego cuando pasa manda Infinity e indica que el número es demasiad grande y ya no lo puede manejar JavaScript y también existe el -Infinity y es lo contrario

console.log( b );

c = 10;
c = c * "f"; 

console.log( c + 10 ) // Manda not a number (NaN) e indica que en algún punto dejo de ser un número y no le podemos hacer operaciones

var d = new Number( "20" ); // Como es un objeto puede recibir cualquier cosa
console.log( d );
console.log( d.valueOf() * 10 ); // El valueOf retorna el valor primitivo del objeto numérico así lo hayamos puesto como un texto y por consiguiente al obtener el valor pirmitivo podemos hacer operaciones sin problema