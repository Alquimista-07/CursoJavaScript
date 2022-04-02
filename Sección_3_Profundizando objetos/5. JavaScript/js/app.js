// Polimorfismo

// Muchas formas, y hace referencia a una función que puede trabajar con varios tipos de datos

function determinaDato( a ){

    if( a === undefined ){
        console.log("A es undefined no se que hacer");
    }

    if( typeof a === "number"){
        console.log("A es un número, y puedo hacer operaciones con números");
    }

    if( typeof a === "string"){
        console.log("A es un texto, puedo hacer operaciones con textos");
    }

    if( typeof a === "object"){
        console.log("A es un objeto, pero puede ser cualquier cosa...");
    
        if(a instanceof Number ){
            console.log("A es un objeto numérico...");
        }
    }

}

var b = new Number(3); // Cuando lo definimos de esta forma no es un valor primitivo sino que es un objeto por eso cuando le pasamos b a la función determinaDato deveuelve que es un objeto
console.log( b ); 
console.log( b + 10 ); // a pesar de que puedo hacer b + 10 y se maneja como si fuere un número, pero no es un número es un objeto de tipo número

determinaDato();
determinaDato( 2 );
determinaDato( "Juan" );
determinaDato({
    nombre: "Juan"
});
determinaDato( b );
