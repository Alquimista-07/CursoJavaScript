// Expresiones regulares

//NOTA: Las expresiones regulares son key sensitive, es decir, que las minúsculas y mayúsculas importan y no son lo mismo

//Hay dos formas de definir expresiones regulares:
// Explícita: Usando el constructor
// Literal: Que solo se define en el momento

// En este caso vamos a usar la literal que es la más común

var reg1 = RegExp("a"); // Esta expresión va a evaluar o buscar en mi cadena de texto la letra a

// Otra forma de definir la expresión regular es:
var reg2 = /a/; // Esto es lo mismo que la anterior

var texto = "Hola Mundo";

// Existe una función en todos los strings en su protoripo para hacer una evaluación con una expresión que es el match.

//La siguiente línea de código devuelve un arreglo si y solo si por lo menos 1 vez apareció nuestra
// evaluación y en caso contrario regresa null. Por lo tanto para usarla hacemos lo siguiente:
//
//  texto.match( reg1 );
//
// Otra forma de hacer lo mismo que lo anterior es pasandola directamente
//
//  texto.match( /a/ );

var arr = texto.match( reg1 );
console.log( arr );

var arr2 = texto.match( /Z/ ); // Esto regresa null porque estamos buscando una Z maýuscula que no existe en la cadena de texto
console.log( arr2 ); 

var arr3 = texto.match( /A/ ); // Del mismo modo regresa null ya que al ser key sensitive no encuentra una A myúscula en la cadena de texto
console.log( arr3 ); 

// NOTA: Existen caracteres especiales o comodines que cambian dependiendo del contexto.
//
// El primer caracter es el ^ y cuando se coloca al inicio lo que le esta diciendo a la expresión regular es que busque en la cadena
// de texto en la primera posición a ver si encuentra la letra
// 
// El segundo signo es el $ y básicamente es el opuesto a la anterior, es decir, valida que la cadena de texto termine por la letra
//
// El tecero es el . (punto) que sigunifica que quiero cualquier caracter y cada punto es un caracter
//
// La siguiente instrucción son las [] y son usadas para rangos, es decir, dentro definimos un rango
//
// La siguiente instrucción es \s  que nos permite validar si hay espacios y básicamente es un patron que incluye espacios, tabs
//
// La siguiente instrucción es el | que es lo mismo que un o logico
//
//------------------------------------------------------------------------------------------------------------------------------------------------------------- 
// Abreviación de expresiones regulares
//------------------------------------------------------------------------------------------------------------------------------------------------------------- 
//
// La siguiente es \w que significa word (palabra) y permite validar que incluya cualquier letra sin incluir la ñ
//
//La siguiente es \d que significa decimal y permite validar un rango de numeros
//
//--------------------------------------------------------
// Usando el comodín ^
//--------------------------------------------------------
// Por ejemplo en la siguiente expresión estamos validando si el texto inicia con la letra a
var arr4 = texto.match( /^a/ ); // Regresa null
console.log( arr4 ); 

// Ahora que pasa si busco la H
var arr5 = texto.match( /H/ );
console.log( arr5 ); // Me devuelve el arreglo con la letra que suque, la posición y la entrada

//----------------------------------------------------------------------------------------------------------------
// NOTA: Y al ser un arreglo tiene todas las propiedades de un arrelo por lo tanto lo siguiente
//       es válido
console.log( arr5[0] );
//----------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------
// Usando el comodín ^
//--------------------------------------------------------
var arr6 = texto.match( /a$/ ); // Regresa null porque la cadena de texto no termina en a
console.log( arr6 );

var arr7 = texto.match( /o$/ ); // Devuelve el valor ya que si encuentra la letra o al final
console.log( arr7 ); 

//--------------------------------------------------------
// Usando el comodín .
//--------------------------------------------------------
var arr8 = texto.match( /.../ ); // Por lo tanto acá le estoy indicando que quiero los 3 primeros caracteres que hagan match
console.log( arr8 );             // y en este caso seria Hol

// Ahora la siguiente expresión le indica que quiero el primer caracter, sin importar que letra sea
// y luego tiene que seguirle la letra o obligatoriamente
var arr9 = texto.match( /^.o/ ); // Por lo tanto devuelve el arreglo con Ho
console.log( arr9 );

//--------------------------------------------------------
// Usando el comodín []
//--------------------------------------------------------
var texto2 = "Hola Mundo, 12345.";

var arr10 = texto2.match( /[0-9]/); // Valida el rango del 1 al 9 y en el arreglo me dice que encontro 1 correspondiente al primer caracter
console.log( arr10 );               // ya que lo evalúa de izquierda a derecha

// Ahora si no queremos el rango sino unos número en específico
var arr11 = texto2.match( /[06789]/ ); // Regresa null porque no hay un número que cumpla
console.log( arr11 );

var arr12 = texto2.match( /[026789]/ ); // Acá si regresa el arreglo ya que si existe
console.log( arr12 );

// Otro para lo que se usa es para definir un rango de caracteres
var arr13 = texto.match( /[a-z]/ ); // Acá aparece la o ya que es la primera letra que cumple por el tema del key sensitive
console.log( arr13 );

// Y la siguiente expresión indica de la a a la z minúscula o de la A a la Z mayúscula
var arr14 = texto.match( /[a-zA-Z]/ ); // Y acá si aparece la H
console.log( arr14 );

// La siguiente expresión me indica que tiene que empezar por H y contener el rango de caracteres de la a la z sin importar que letra
// siga después de la H
var arr15 = texto.match( /^H[a-z]/ ); // Me regrea Ho
console.log( arr15 );

// Si queremos validar cualquier vocal podemos hacer lo siguiente
var arr16 = texto.match( /^H[aeiou]/ );
console.log( arr16 );

// Ahora la siguiente indica cualquier vocal [aeiou] seguida de cualquier caracter . pero que este al final $
var texto3 = "Hola mundo.";

var arr17 = texto3.match( /[aeiou].$/ ); // Regresa o. si no terminara en . no regresa nada ya que tiene que terminar en vocal y cualquier otro caracter luego
console.log( arr17 );

var arr18 = texto3.match( /[aeiou]./ ); // Esto me devuelve cualquier vocal seguida de cualquier caracter
console.log( arr18 );

//--------------------------------------------------------
// Usando el comodín \s
//--------------------------------------------------------
var arr19 = texto3.match( /\s/ ); // Esto nos permite validar si hay espacios y básicamente es un patron que incluye espacios, tabs
console.log( arr19 );             // y lo que hace es buscarme cualquier espacio o separación que haya

//----------------------------------------------------------------------
// Abreviación de expresiones regulares
//----------------------------------------------------------------------

// Por ejemplo tenemos la siguiente expresión regular
var arr20 = texto3.match(/[a-zA-Z0-9]/);
console.log( arr20 );

// Entonces para abreviar la anterior expresión regular usamos la \w e indica que quiero cualquier letra
var arr21 = texto3.match( /\w/ );
console.log( arr21 );
//------------------------------------------------------------------------------------
// Ahora si por ejemplo tenemos la siguiente expresión regular

var texto4 = "Hola 9 mundo";

var arr22 = texto4.match( /[0-9]/ );
console.log( arr22 );

// Su forma abreviada es
var arr23 = texto4.match( /\d/ );
console.log( arr23 );

//------------------------------------------------------------------------------------
// las expresiones regulares también tiene 3 controladores que nos permiten controlar 
// un poco como va a funcionar la expresión regular. Hay 3 y se escriben al final de
// la expresión regular.
//
// La primera es la i e inidca que quiero que sea insensible a las mayúsculas o minúsculas,
// es decir que no le importe si estan en mayúscula o minúscula solo que eucnetre la letra
//
// La segunada es la g que e indica que quiero todas las apariciones
//
// La tercera es la m e indica que sea multilinea y se usa cuando tenemos saltos de línea \n
//------------------------------------------------------------------------------------
// En cuanto a los controladores tenemos los siguientes ejemplos

var arr24 = texto.match( /m/i );
console.log( arr24 );

var arr25 = texto.match( /[aeiou]/g );
console.log( arr25 );

var texto5 = "HolA MunDO";

var arr26 = texto5.match( /[aeiou]/ig );
console.log( arr26 );

var texto6 = "Hola mundo.\nQué tal";
console.log( texto6 );

var arr27 = texto6.match( /[aeiou]/ig );
console.log( arr27 );
// En la anterior expresión regular no aparece la é entonces la incluimos
var arr28 = texto6.match( /[aeiou]é/m );
console.log( arr28 );

//--------------------------------------------------------
// Usando el comodín |
// NOTA: Ojo hay que tener cuidado al usar los espacios en 
//       una regex ya que también son validos
//--------------------------------------------------------
var arr29 = texto6.match( /[aeiou]|é/ig );
console.log( arr29 );

var arr30 = texto6.match( /[aeiou]|[áéíóúñü]/ig );
console.log( arr30 );

var arr31 = texto6.match( /[aeiouáéíóúñü]/ig );
console.log( arr31 );

//--------------------------------------------------------
// Otras estructuras en las expresiones regulares son las 
// de repetición y en general lo que hacen es buscar patrones
// repetitivos:
//
// El primer operador de repetición es el + y lo que le dice es que quiero que por lo menos
// aparezca la letra una o más veces
//
// El segundo es el ? y dice que tiene que aparecer la letra o no tiene que aparecer. Ojo y hay que tener
// cuidado porque un string vacío ("") va a hacer match en nuestra regex
//
// El siguiente es el * que lo que hace es validar que la letra aparezca cero o más veces, y al igual que
// la anterior hay que tener cuidado porque va a hacer matc con un string vacio ("")
//
// El siguiente es {} con el cual validamos cuantas veces queremos que aparezca la letra indicada
//
//--------------------------------------------------------
var texto7 = "Holaa mundooooo.";

var arr32 = texto7.match( /a/ig ); // Quiero cualquier a ignorando key sensitive y todas las apariciones
console.log( arr32 );

var arr33 = texto7.match( /o+/g ); // Acá queremos que por lo menos aparezca la o una o más veces
console.log( arr33 );

var arr34 = texto7.match( /o?/g ); // La letra o tiene que aparecer o no tiene que aparecer
console.log( arr34 );

var arr35 = texto7.match( /o*/g ); // Lo que busca es si aparece sola o repetica cuantas veces sea y calza todas las demás letras como ""
console.log( arr35 );

var arr36 = texto7.match( /o{2}/ ); // Validamos que la o aparezca 2 veces
console.log( arr36 );

var texto8 = "Hola mundoo Hoola de nuevooo coooomo estan";

var arr37 = texto8.match( /o{2,}/g ); // Indica que aparezcan 2 y luego todo lo que venga
console.log( arr37 );

// También podemos definir un rango.
// Por ejemplo si yo quiero definir que tienen que venir de 2 a 3 secuencias de o hacemos lo siguiente
var arr38 = texto8.match( /o{2,3}/g );
console.log( arr38 );

var arr39 = texto8.match( /o{3,4}/g ); // 3 a 4 secuencias de o 
console.log( arr39 );

var texto9= "Hooooola mundo"

var arr39 = texto9.match( /o{3,4}/g ); // 3 a 4 secuencias de o y me ignora una o
console.log( arr39 );

// Si no quiero que me la ignore usamos el comodin . que indica que agregue lo que siga
var arr40 = texto9.match( /o{3,4}./g ); 
console.log( arr40 );