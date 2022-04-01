// Funciones typeof e instanceof... interesante

// Van a existir momentos en los cuales nosotros necesitemos estar seguros del tipo
// de dato que estamos recibiendo antes de hacer alguna acción. Y es acá donde entra
// en juego la fucnión typeof.
// Y esto puede ser muy útil cuando tenemos funciones que puede recibir múltiples objetos,
// es decir, siempre siempre que creemos una función y debemos usar un número por ejemplo
// verificamos que sea un número, o si vamos a trabajr con un objeto verificamos que se un
// objeto. Y esto es la entrada al polimorfismo (muchas formas) que se va a explicar más 
// adenlante en el curso

//EJEMPLO

function identifica( param ){

    console.log( typeof param );

}

function Persona(){

}

var juan = new Persona();

identifica( 1 );
identifica( "1" );
identifica( {} );
identifica( juan );

// Mandamos una funicón anónima
identifica( function() {

});

// Y basicamente los tipos que le podemos mandar son tipos primitivos, objetos y funciones

// Ahora como podemos usar ese typeof en la vida real

// EJEMPLO

function identifica2( param ){

    if( typeof param == "function"){
        param();
    }
    else{
        console.log( param );
    }

}

function Persona2(){
    this.nombre = "Juan",
    this.edad = 30;
}

var juan2 = new Persona2();

identifica2( function() { console.log("Soy anónima"); });
identifica2( 2 );
identifica2( juan2 );

// Ahora por ejemplo si necesito validar si es de un tipo en particular podemos
// hacer los siguiente:

function identifica3( param ){

    console.log( typeof param );
    console.log( param instanceof Persona3 );

}

function Persona3(){
    this.nombre = "Juan",
    this.edad = 30;
}

var juan3 = new Persona3();

// En este caso como si es de tipo persona debe retornar un true
identifica3( juan3 );

// Si mando otra cosa diferente retorna un false cuando realice la validación
identifica3( "Juan" );

// NOTA: En otras palabras el instanceof me permite comparar dos objetos y el
//       typeof me permite saber que tipo de parametro es.