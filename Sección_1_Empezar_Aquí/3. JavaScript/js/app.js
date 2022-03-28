// Aca muestra undefined y no da error porque cuando el interprete  de javascript abre el archivo le hace un barrido
// y detecta las variables e inmediatamente las crea en el objeto global y las inicializa como undefined hasta que se 
// les asigne un nuevo valor, y por eso el console.log nos muestra undefined
console.log( a ); 
console.log( b );
console.log( c );

var a = "Juan";
var b = 3;
var c = true;

console.log( a );

//OJO: undefined no es igual al null ya que son objetos diferentes