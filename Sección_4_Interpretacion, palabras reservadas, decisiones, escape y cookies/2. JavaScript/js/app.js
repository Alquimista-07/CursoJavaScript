// Comentarios en Javascript y espaciado

// Comentario linea simple
/*
Comentarios multi linea
Comentarios multi linea
Comentarios multi linea
*/


var arr = [
    // AjvaScript es muy permisivo y colocar comentarios dentro de objetos
    // y demás es válido
    
    // Li primera pos ...
    // sirve para ...
    // hace ...
    "Juan", 

    // La segunda ...
    // es un objeto ....
    // hace ...
    {
        // Otro comentario
        // Esta propiedad hace ...
        // por lo cual ...
        // es bueno que ...
        nombre: "Juan",
        apellido: "Hernández",



            // Esta función hace tal cosa...
            // por lo cual ...
            // no tiene parametros ...
            // es bueno que....
            getNombre: function()
            // Un comentarios más
            {   
                //Acá hay otro
                return this.nombre + " " + this.apellido;
            }


},

// tercera posición del arreglo
true, 

function(){ console.log( this ); }

// Fin del arreglo principal
// no hacer nada después
];

console.log(
    arr
);

// Para convertir los archivos javascript a su versión min.js, es decir, optimizarlo para la web
// podemos usar la página https://htmlcompressor.com/compressor/ la cual es gratuita