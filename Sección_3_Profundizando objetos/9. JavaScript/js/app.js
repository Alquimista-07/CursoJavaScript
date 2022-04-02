// Objeto string

//NOTA: Podemos encontrar mucha documentación sobre JavaScript en el siguiente enlace:
//      https://developer.mozilla.org/es/docs/Web/JavaScript

// Se tiene mal pensado qeu un objeto string en JavaScript es un arreglo de caracteres
// pero en JavaScript un objeto de tipo string es un objeto

var a = new String("Juan");

// Por ejemplo si necesito agarrar la primera letra en otros lenguales de programación
// nosotros hacemos esto:
console.log( a[0] ); // Y nos trae la J y nos hace pensar que es un arreglo y esto no es así
//                      ya que es un objeto, pero y porque resuelve esto hay que acordarnos de 
//                      la notación de corchetes ya que si hacemos lo siguiente lo hace
console.log( a["0"] );

// Y si imprimo todo el objeto
console.log( a ); // Es un objeto de tipo string que tiene la propiedad, 0, 1, 2, 3 ..., tiene
//                   otra propiedad length con su prototipo y su valor primitivo que en este caso
//                   es Juan

// Los podemos definir con el new o los podemos definir de la siguiente manera:
var b = "Hernández";

// Hay muchas funciones que viene heredadas del prototipo string, es decir nuestra variable ya heredó
// un montón de propiedades que ya están disponibles para nosotros

console.log( a.toUpperCase() ); // Agarra el valor de la varible y la hace toda mayúsculas

console.log( a.toLocaleLowerCase() ); // Hace lo contrario y convierte todo a minúsculas

// Este recibe un parametro e indica que quiero que me diga donde esta la letra, por ejemplo
// que me diga donde esta la a y hay que tener cuidado porque es key sensitive
var ind = a.indexOf( "a" );
console.log("La letra está en la pos: ", ind );

// Pero ahora con indexOf que pasa si hay letras repetidas
var b = new String("Fernando");

var ind2 = b.indexOf("n"); // Me muestra la primer posición es decir la 3
console.log("La letra está en la pos: ", ind2 );

// Y que pasa si quiero que me muestre la pos de la otra n, entonces hacemos
// lo siguiente y es usar otra función que es lastInexOf y lo que hace es
// mostrarnos la ultima posición encontrada de nuestro objeto de búsqueda:
// OJO: El lastIndexOf es key sensitive
var ind3 = b.lastIndexOf("n"); 
console.log("La letra está en la pos: ", ind3 );

// NOTA: El indexOf y lastIndexOf no solo necesaria mente funcionan con una palabra,
//       puede ser con bloques de texto

var c = new String("Juan Herrera");

var ind4 = c.indexOf("Herrera");
console.log("Está en la posición: ", ind4)

// Otra función interesante es por ejemplo cuando necesitamos obtener un corte o un pedazo del string.
// Para ello usamos el substring al cual le indicamos la posición desde donde quiero iniciar a cortar
var nombre = c.substring( 6 );
console.log( nombre );

// Ahora si le indico un segundo parametro le indico cuantas posiciones tome
var d = new String("Juan Herrera");

var nombre2 = d.substring( 2, 8);
console.log( d );
console.log( nombre2 );

// Ahora que pasa si queremos tomar el nombre
var e = new String("Juan Herrera Hernández");

var nombre3 = e.substring( 0, e.indexOf(" ") ); // Acá le estamos diciendo quiero que corte desde el inicio hasta donde encuentre un espacio
console.log( nombre3 );

// Los strings también tienen funciones parecidas a los arreglos como el split, slice, entre otros

var split = e.split();
console.log( split );

var split = e.split(" "); // Si le indicamos una separación por espacio nos crea un arreglo separado
console.log( split );
// Ahora si queremos saber cuantas palabras tiene hacemos
console.log("Tiene " + split.length + " palablas" );

// Hay funciones que antes se usaban más pero ahora se usan poco
// ya que ahora framworks y librerías como Angular, JQuery, Vue, React, etc, que permiten
// meter variables de texto u objetos directamente. Dichas funciones son las cuales son las siguientes
//=======================================================

document.write("Hola Mundo!!!..."); // Escribe en la página de lo que esta acá adentro en la página donde esta el código

// Por ejemplo la siguiente vuelve la variable en un tipo de nomenclatura html con fuente italica. (OJO el "<br> es una marca que estoy usando para concatenar y colocar un salto de linea nada más")
var it = e.italics();
console.log( "<br>" + it );

//Ahora miremos lo siguiente que podemos usar el document.write para colocarla en la pagina onde tengo el código:
document.write( "<br>" + e.italics() );

// Otro ejemplo es el blinck. (OJO el "<br> es una marca que estoy usando para concatenar y colocar un salto de linea nada más")
document.write( "<br>" + e.blink() );

// Tenemos el strike que es rayar el texto (OJO el "<br> es una marca que estoy usando para concatenar y colocar un salto de linea nada más")
document.write( "<br>" + e.strike() );

// En negrita (OJO el "<br> es una marca que estoy usando para concatenar y colocar un salto de linea nada más")
document.write( "<br>" + e.bold() );

document.write ( "<br>" + e.fontcolor( "red" ) );

// NOTA: Por lo tanto con los frameworks y librerias ya no hace falta hacer lo anterior ya que estan quedando deprecated.
//       pero no esta de más saber que existen.