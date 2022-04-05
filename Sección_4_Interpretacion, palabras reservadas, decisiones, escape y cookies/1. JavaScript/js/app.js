// El ";" (punto y coma)es opcional?

// NOTA: Para hacer funcionar el código ir quitando los bloques de comentarios /* */
//       para cada sección separada por //----------...

/*
var a = 10
var b = 20
var c = 30
var d = "Juan"

console.log( a )
console.log( b )
console.log( c )
console.log( d )
*/
//Sin ; parecer funcionar todo bien


// --------------------------------------------------------------------------------------
// Pero ahora que pasa si se hace lo siguiente:

/*
;

var a = 10
var b = 20
var c = 30
var d = "Juan"
;
console.log( a )
console.log( b )
console.log( c )
console.log( d )

;
*/
// Lo anterior no da error y funciona


// --------------------------------------------------------------------------------------

// Ahora que pasa si se hace lo siguiente
/*
;;;;;;;;;
;;;;;;;;;
;;;;;;;;;
;;;;;;;;;var a = 10;;;;;;;;;;;;;;;;;
;;;;;;;;;var b = 20;;;;;;;;;;;;;;;;;
;;;;;;;;;var c = 30;;;;;;;;;;;;;;;;;
;;;;;;;;;var d = "Juan";;;
;;;;;;;;;
;;;;;;;;;console.log( a );;;;;;;;;;;;;;;;;;;
;;;;;;;;;console.log( b );;;;;;;;;;;;;;;;;;;
;;;;;;;;;console.log( c );;;;;;;;;;;;;;;;;;;
;;;;;;;;;console.log( d );;;;;;;;;;;;;;;;;;;
;;;;;;;;;
;;;;;;;;;
;;;;;;;;;
;;;;;;;;;
*/
// Lo anterior aún sigue funcionando

// --------------------------------------------------------------------------------------
// NOTA:Pero ¿por qué funciona todo a la perfexión?
//      Esto no es quiere decir que el punto y coma en JavaScript sea ignorado ya que solo
//      le quiere decir al lenguaje que ahí termina una línea, es decir, como si luego de 
//      cada punto y coma vieniera una nueva línea o instrucción separada o independiente.
//
//      Y bueno en vace a lo anterior el punto y coma parecer ser opcional y no sería necesario
//      usarlo más. Peeeeero para ¿qué usar el punto y coma?

function getNumero(){

    return // Cuando el interprete encuentra esto es como que si quisieramos regresar vacio como si colocaramos el ; y le dice que quiere hacer un return sin definir y no ve el resto
        10 // es como si tuvieramos  return; y el 10 queda en el limbo no hace nada y queda como un número anónimo y no da error

}

console.log( getNumero() );

// NOTA: Y esto nos dice que el ; no es que sea obligatorio pero si no lo ponemos pueden suceder errores raros en nuestro codigo
//       algo así similar como sucede en COBOL cuando se coloca un . y el codigo funciona bien y si se quita ese . el código ya 
//       empieza a hacer algo muy distinto a la lógica definida y tener comportamientos erráticos y extraños.