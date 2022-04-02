// Cuidado con las funciones y su contexto

// Contexto global: Cuando el JavaScript empieza a ejecutar y barre toda la página

console.log("------------------------------");

// Creamos una función que crea un arreglo de funciones
function crearFunciones(){

    // El contexto de la función es lo que se crea y esta dentro de la función cuando esta es invocada

    var arr = [];
    var numero = 1;

    arr.push( function (){
        console.log( numero );
    }); 

    // Ahora cambiamos el contexto del valor número, es decir, cambiamos el valor de número
    numero = 2;

    arr.push( function (){
        console.log( numero );
    });
    
    // Creamos otro
    numero = 3;

    arr.push( function (){
        console.log( numero );
    }); 

    // numero = 10;

    return arr;

}

var funciones = crearFunciones();

// La invocamos y cuando la función es invocada lo que hace es regresar al contexto y lo vuelve a leer
// pero al final cuando se termino la función principal numero valia 3 y por lo tanto por eso nos imprime 
// 3, 3, y 3 así hayamos indicado que numero valia 1, 2 y 3.
// Y lo mismo sucede si dijere que numero = 10 cuando termine el contexto de la función al final la variable
// numero va a valer 10
funciones[0]();
funciones[1]();
funciones[2]();

console.log("------------------------------");

// Ahora que pasa si quisieramos obtener las valores de número por separado
// pues básicamento lo haríamos usando una función anónima, como por ejemplo:
function crearFunciones2(){

    // El contexto de la función es lo que se crea y esta dentro de la función cuando esta es invocada

    var arr = [];
    var numero = 1;

    arr.push(

            // Creamos una función anónima
            (function( numero ){

                // regreso la función con el respectivo número
                return function (){
                    console.log( numero );
                }

            })( numero )// Recibe como parámetro numero

    ); 

    // Ahora cambiamos el contexto del valor número, es decir, cambiamos el valor de número
    numero = 2;

    arr.push( function (){
        console.log( numero );
    });
    
    // Creamos otro
    numero = 3;

    arr.push( function (){
        console.log( numero );
    }); 

    // numero = 10;

    return arr;

}

var funciones2 = crearFunciones2();

funciones2[0]();
funciones2[1]();
funciones2[2]();

console.log("------------------------------");

// Ahora complicando un poco más y simplificando la función
// metemos la cración de las funciones con un for
function crearFunciones3(){

    // El contexto de la función es lo que se crea y esta dentro de la función cuando esta es invocada

    var arr = [];
    var numero = 1;

    for( var numero = 1; numero <= 5; numero ++ ){
        
        arr.push(

                // Creamos una función anónima
                (function( numero ){

                    // regreso la función con el respectivo número
                    return function (){
                        console.log( numero );
                    }

                })( numero )// Recibe como parámetro numero

        ); 

    }

    return arr;

}

var funciones3 = crearFunciones3();

funciones3[0]();
funciones3[1]();
funciones3[2]();
funciones3[3]();
funciones3[4]();