// Funciones

var a = 30;

// Creamos la función sin parametros
function primeraFuncion(){
    // Cuando entra a la función genera un nuevo contexto y reserva espacio en memoria
    // para lo que tiene dentro la función y por eso nos muestra el 20 y sale de la 
    // función
     var a = 20;

    console.log( a );

}

// Invocamos la función para que la ejecuta, ya que si no hacemos esto
// solo va a quedar metida detro del objeto global pero no se va a ejecutar
primeraFuncion();

//NOTA: Cabe resaltar que cuando se barre todo el archivo es como si no existiera
//      nada dentro de la fucnión, es decir así:
//
//      function primeraFuncion(){
//
//      }
//
// Pero cuando es invocada nuevamente hace un barrido dentro de la función
// y ahora si detecta las variables y demás y luego si hace lo que tiene 
// que hacer

// Ahora que pasa si hacemos lo siguiente:
// Cuando entra a la función y hace el barrido detecta el valor de la variable
// la cual existe en el objeto global y la imprime y nos muestra 30 esto siempre
// y cuando exista como en el ejemplo que si existe en el entorno global

var b = 30;

// Creamos la función sin parametros
function primeraFuncionCopia1(){

    console.log( b );

}

primeraFuncionCopia1();

// Ahora que pasa si hacemos lo siguiente:

// Creamos la función sin parametros
function primeraFuncionCopia2(){

    console.log( c );

}

primeraFuncionCopia2();

var c = 40;

// Al barrer detecta la variable b, no da error pero muestra undefined
// porque al llamar la función aún no se le había asignado valor 

// También lo siguiente es valido ya que cuando se hace el barrido tenemos
// todo en el objeto global

var d = 40;

primeraFuncionCopia3();

function primeraFuncionCopia3(){

    console.log( d );

}

// Otra cosa es que en javascript las funciones y los procedimientos son los mismo
// y una función siempre regresan algo, por ejemplo si tenemos lo siguiente:

function primeraFuncionCopia5(){

}

var e = primeraFuncionCopia5();

console.log( e ); // En este caso la función retorna undefined y eso explica lo que
                  // se mencionó anteriormente


// Ahora que pasa si hacemos lo siguiente:
function primeraFuncionCopia6(){
    console.log("Invocada");
}

var miFuncion = primeraFuncionCopia6; // Si no ponemos los paretesis no invocamos la función

// Pero si llamo miFuncion() va a ejecutar y va a hacer lo que hace la función.
// Para ver la explicación de lo que se acaba de explicar descomentar la siguiente línea.
//miFuncion();

// OJO LO SIGUIENTE SON EJEMPLOS DE UNA FUNCIÓN NORMAL Y UNA FUNCIÓN DE FLECHA
var saludar1 = function(){
    return console.log("Hola Mundo");
};

saludar1();

let saludar2 = () => console.log("Hola Mundo");
saludar2();

var sumar1 = function(num1, num2){ 
    return console.log("Suma 1: ", num1+num2); 
}

sumar1(5, 5);

let sumar2= (num1, num2) => console.log("Sumar 2: ", num1 + num2);
sumar2(6, 6);