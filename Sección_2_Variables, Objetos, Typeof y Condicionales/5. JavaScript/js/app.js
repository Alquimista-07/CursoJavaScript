// Parámetros de las funciones

// Los parámetros pueden ser cualquier cosa, objetos, variables primitivas u otras funciones.
// Mandamos una variable anónima, es decir no esta explícita en el código

// --------------------------------------------------------
// FUNCIONES CON PARAMETROS DE TIPO PRIMITIVO
//---------------------------------------------------------
function imprimir( nombre, apellido1 ){

    console.log( nombre + " " + apellido1 );

}

imprimir("Juan", "Padilla"); 

// Ahora una variable explicita es lo siguiente
var apellido = "Hernández";

// Ahora como javascript es tan flexible podemos invocar la 
// función sin uno de sus parametros
imprimir("Juan");
// Y por lo tanto arroja undefined ya que como siempre se ha dicho
// javascript reservo e inicializo la variable y no coloca problemas

// Y lo mismo sucede si no mando nada en los parametros
imprimir();

// Ahora lo siguiente arroja error porque no hay una definición
function imprimir2(nombre2){

    console.log( nombre2 + " " + apellido2 );

}

// Para probar lo anterior en donde se dice que da error descomentar la siguiente línea
//imprimir2("Juan");

// Hay formas de verificar si los parametros están definidos
// Por ejemplo:
function imprimir3( nombre, apellido ){
    
    if(apellido === undefined ){
        apellido = "ABC";
    }
    console.log ( nombre + " " + apellido );
}

imprimir3("Juan");

//Exsite otra forma para verificar si los parametros están definidos
// Por ejemplo
function imprimir4(nombre, apellido ){

    apellido = apellido || "ABCD"; // Si el apallido es undefined agarra ABCD y si tiene algo agarra el valor asignado
    
    console.log(nombre + " " + apellido );

}

imprimir4("Juan");
imprimir4("Juan", "Herrera");

// --------------------------------------------------------
// FUNCIONES CON PARAMETROS DE TIPO OBJETO
//---------------------------------------------------------

// Del mismo modo que sucede con las variables primitivas,
// también los objetos pueden ser anónimos

function imprimir5( persona ){
    console.log("Nombre: ", persona.nombre + " Apellido: " + persona.apellido);
}

imprimir5( { 

    nombre: "Juan",
    apellido: "Padilla"

 });

 // Ahora con un objeto explicito
 var obj = {

    nombre: "Juan",
    apellido: "Pérez"

 }

 imprimir5( obj );

// Ahora como los objetos son pasados por referencia
// tenemos que si cambiamos una propiedad se nos va a
// alterar el objeto, por ejemplo

var obj2 = {

    nombre: "Juan",
    apellido: "Carreño"

 }

function imprimir6( persona2 ){

    console.log( persona2.nombre + " " + persona2.apellido );
    persona2.nombre = "María";

}

imprimir6( obj2 );
console.log( obj2 );

// --------------------------------------------------------
// FUNCIONES CON PARAMETROS OTRA FUNCIÓN
//---------------------------------------------------------
// De igual forma las funciones también pueden ser explicitas o anónimas
// ya que en realidad las funciones son objetos

function imprimir7( fn ){

    // Acá llega como un parametro a esta función
    fn();

}

// Creamos una función anónima
imprimir7( function() {

    console.log("Función anónima");

});

// Ahora una función explícita
var miFuncion = function(){
    console.log("MiFuncion");
}

imprimir7( miFuncion );