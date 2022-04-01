// Arreglos

// En JavaScript los arreglos son una colección de objetos,
// y los arreglos con un conjunto de datos similares, del mismo
// tipo.

// var arreglo = new Array(); // Esta es una forma pero se puede abreviar de la siguiente forma
var arreglo = [ 5, 4, 3, 2, 1 ];

console.log( arreglo );

// Los arreglos son en base cero, es decir que la primera posición
// inician siempre desde la posición cero
// Explicando lo anterior hacemos lo sigiente
console.log( "Pos 1: ", arreglo[0] );
console.log( "Pos 2: ", arreglo[1] );
console.log( "Pos 3: ", arreglo[2] );
console.log( "Pos 4: ", arreglo[3] );
console.log( "Pos 5: ", arreglo[4] );

console.log( arreglo[0], arreglo[4] );
console.log( arreglo[0], arreglo[4], arreglo[5] ); // Acá como la pos 5 no existe en el arreglo muestra undefined

// Existen funciones propias del prototipo de un arreglo,
// por ejemplo fill, filter, find, forEach, concat, join,
// etc.

var invertido = arreglo.reverse(); // Recibe un arreglo y lo invierte
console.log( "Reverse: ", invertido );

// La siguiente línea de código, regresa un nuevo diseño o arquitectura de un arreglo,
// es decir, map nos permite ejecutar una función contra cada uno de los elementos del
// arreglo sin hacer un ciclo for, sin hacer cualquier otra cosa
var arr = arreglo.map( function(elemento){

    // Esto empieza a hacer vueltas en si misma, por la
    // 5, 4, 3, ... y va a obtener cada uno de los valores
    // conforme vaya dando vueltas, es como tener un ciclo for
    // dentro.
    // Y lo que quiero hacer por ejemplo es que a cada elemento
    // lo multiplicamos por el elemento
    elemento *= elemento;
    // Pero esto tiene que regresar la nueva posición del valor
    // de la posición en la que está
    return elemento;

});

console.log( "Map: ", arr );

// Lo siguiente hace la raiz cuadarada
var arrRaiz = arr.map( Math.sqrt );
console.log( "Map con Raiz: ", arrRaiz );

// Existe una instrucción interesante que se llama join
// la cual también regresa un arreglo.
// Y lo que hace es pegar todas la psoiciones del arregl
// separados por coma (,) pero esto es porque no se especifico
// nigún parámentro en el join
arrRaiz = arr.join(); 
console.log( "Join: ", arrRaiz );

// Ahora especificando un parámetro
arrRaiz = arr.join("|");
console.log( "Join: ", arrRaiz );

// Existe la funición opuesta del join

// Convertimos el objeto en un string
// Y de la misma forma si lo dejamos sin parámetro nos muestra un
// solo arreglo de un elemento
var sp = arr.toString().split();
console.log( "Split: ",  sp );

// Ahora si le pasamos el parámetro nos corta el valor por el separador que tenga,
// en este caso era una |
var sp2 = arrRaiz.toString().split(); // Sin cortar
var sp3 = arrRaiz.toString().split("|"); // Cortado
console.log( "(Split) Sin Cortar: ",  sp2 );
console.log( "(Split) Cortado: ", sp3 );

// Otra función es el push. A diferencia a otros lenguajes de programación
// como java, los arreglos en java no pueden crecer cuando llegan al limite, 
// y es más que todo cuando estamos creando una lista de elementos pero no 
// sabemos cuantos elementos van a tener. Pero en Javascript esto no suecede
// Y no hay problemas.
// Para ello usamos el push, pero esto lo agrega a la última posición del arreglo
arreglo.push(6, "7"); // Y con esto podemos meter tanto texto como números
console.log( "Push: ", arreglo );

// Ahora que pasa si lo queremos meter a la primera posición del arreglo
// para ello existe los siguiente:
arreglo.unshift(0); // OJO hay que tener en cuenta que también se pueden meter strings y números de la misma forma que se hizo antes
console.log( "unshift: ", arreglo );

// Existe otra función que es el toString que lo que hace es 
// poner la representación textual del arreglo, similar a como lo
// hace el split
arreglo.toString();
console.log( "toString: ", arreglo );

// Existe otra función que permite eliminar el ultimo elemento del arreglo
// Y para ello existe la función pop

var elimine = arreglo.pop();
console.log ( "Pop: ", arreglo, elimine );

// La función splice puede recibir n cantidad de parámetros, pero como primer parámetro 
// siempre debe ser un número y nos indica la posición del arreglo en la cual queremos
// trabajar, por ejemplo en lo suguiente decimos que se ubique en la posición 1 y que 
// a partir de esa posición elimine 1 elemento del arreglo
arreglo.splice( 1, 1 ); // Si queremos eliminar desde la 1 3 elementos indicamos un 3 en el segundo parámetro
console.log( "Splice: ", arreglo );

// Ahora también podemos indicar un tercer parametro que nos permite meter valores en esa posición que quitamos
var arreglo2 = [ 1, 2, 3, 4, 5 ];

arreglo2.splice( 1, 1, "10");
console.log( "Splice: ",  arreglo2 );

// pero podemos meter n cantidad de parámetros
arreglo2.splice(1, 1, "10", "20", 30);
console.log( "Splice: ", arreglo2 );

// Y el splice es interesante porque no necesariamente debemos quitar algo
// por ejemplo
var arreglo3 = [1, 2, 3, 4, 5 ];

arreglo3.splice(0, 0, "10", "20", 30, 40);
console.log("Splice: ", arreglo3);

// Ahora tenemos el slice que por cedirlo así es la función opuesta a splice
// es como decir cortar
var arreglo4 = [1, 2, 3, 4, 5 ];

// De la misma forma el primer parametro indica la posición del arreglo donde quiero
// inciar a cortar y el segundo valor es la posición a donde quiero cortar
// es decir, si indico un 3 va a contar 0, 1, 2 y apartir de ahí corta hacia adelante
arreglo4 = arreglo4.slice(0, 3);
console.log( "Slice: ", arreglo4 );

arreglo4 = arreglo4.slice(1, 3);
console.log( "Slice: ", arreglo4 );

// Ahora en lo siguiente le digo que quiero que apartir de la posición 0
// me ignores todo lo que siga a partir de la posición 2
arreglo4 = arreglo4.slice( 0, 2 );
console.log( arreglo4 ); 