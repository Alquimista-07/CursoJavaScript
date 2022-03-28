//------------------------------------------------
// Tipos De Datos Primitivos
//------------------------------------------------
// NOTA: El tipo de dato primitivo, es un tipo de dato que apunta a un solo valor

// Ejemplos

var num = 10; // Numericos
var str = "texto"; // Cadena de texto
var bol = true; // Booleanos (true o false)
var und = undefined; // Undefined
var nul = null; // Nulos

console.log( num );

// Ahora lo siguiente que se va a hacer no arroja error y a javascript no le importa en absoluto,
// y aesto se le conoce como escritura dinamica ya que las variables no están amarradas a un solo 
// tipo de dato en particular.

// Por ejemplo asignar una variable num a un texto, o un booleano a un numero

num = str;
console.log( num );

bol = 10;
console.log( bol );

//------------------------------------------------
// Objetos
//------------------------------------------------
// NOTA: El objeto puede ser una colección de tipos de datos primitivos, o bien
//       otros objetos. Pero dentro de los objetos todo esta dentro de lo que se 
//       llama nomenclatura de pares, es decir, cada una de las propiedades que 
//       coloque tiene que tener un par

var obj = {} // Objeto vacío

// Objeto con pares
var obj2 = {
    numero: 10,
    texto: "Juan"
};

console.log( obj2 ); // Imprimimos el objeto
console.log( obj2.numero ); // Imprimimos una propiedad del objeto
console.log( obj2.texto ); // Imprimimos una propiedad del objeto

// Ahora para el ejemplo de que un objeto puede contener otro objeto tenemos lo siguiente:
// NOTA: No existe limite de cuantos objetos pueden estar dentro de un objeto
var obj3 = {
    numero: 10,
    texto: "Juan",

    objHijo: {
        numero: 20,
        texto: "David"
    }
};

console.log( obj3 );
console.log( obj3.objHijo );
console.log( obj3.objHijo.texto );