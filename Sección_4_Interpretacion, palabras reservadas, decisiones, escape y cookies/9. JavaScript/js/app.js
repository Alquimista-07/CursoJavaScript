// JSON y breve historia

// Creamos un objeto
var objetoJS = {
    nombre: "Juan",
    edad: 30,
    // Inclusive podemos meterle funciones al objeto 
    // y luego cuado lo convertirlo a JSON solo se
    // pasan los string, que en este caso es nombre y edad
    // y al recuperarla con el JSON.parse() lamentablemente
    // perdemos la función. Por lo tanto acá es donde es bueno
    // usar los prototipos y así no perderiamos el imprimir
    imprimir: function(){
        console.log( this.nombre, this.edad );
    }
};

console.log( "Objeto literal", objetoJS );

// Si necesito pasarlo a una estructura JSON,
// por cualquier razón que neceiste, JavaScript 
// ya tiene el parseador para esto

var jsonString = JSON.stringify( objetoJS );

console.log( jsonString );

// Existe una página para hacer evaluaciones de JSON o verificar que 
// este correcto la cual la encontramos en // el siguiente link: 
// http://json.parser.online.fr/

// Otra cosa que podemos hacer es por ejemplo suponiendo que tenemos
// un objeto JSON, es decir, viene un objeto JSON y necesitamos 
// convertirlo a un objeto para poderlo trabajar

var objetoDesdeJson = JSON.parse( jsonString );

console.log( objetoDesdeJson );

// Lo que quiere decir que ya convirtiendo el JSON en un string
// podemos hacer por ejemplo lo siguiente
console.log( "Nombre:" + objetoDesdeJson.nombre + " Edad: " + objetoDesdeJson.edad );