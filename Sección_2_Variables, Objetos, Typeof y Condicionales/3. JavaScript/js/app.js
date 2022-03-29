//-------------------------------------------------------
// NOTACIÓN DE PUNTO
//-------------------------------------------------------

console.log( "NOTACIÓN DE PUNTO" );

var persona = {
    nombre: "Juan",
    apellido: "Hernandez",
    edad: 25,
    direccion: {
        pais: "Canadá",
        ciudad: "Ottawa",
        edificio: {
            nombre: "Edificio principal",
            telefono: "(0)5555-1234"
        }
    }
};

console.log( persona.nombre );
console.log( persona.apellido );
console.log( persona.edad );

console.log( persona.direccion );
console.log( persona.direccion.pais );
console.log( persona.direccion.ciudad );

// Ahora agregamos una propiedad nueva al objeto dirección
persona.direccion.zipcode = "K1P 1J1";
console.log( persona.direccion );
console.log( persona.direccion.zipcode );

// Haora si queremos obtener el telefono podríamos hacer lo siguiente,
// pero se tornaría demasiado largo
console.log( persona.direccion.edificio.telefono );

// Entonces ahora como podemos hacer para resumir lo anterior, para ello
// hacemos lo siguiente:
// Podemos aprovechar que son valores pasados por referencia

var edificio = persona.direccion.edificio;

// También podemos agregarle propiedades
edificio.numPiso = "8vo Piso";

console.log( persona );

//-------------------------------------------------------
// NOTACIÓN DE CORCHETE
//-------------------------------------------------------
// Es bastante práctica, pero no es muy comun cuando queremos
// accesar valores directamente que sabemos que no van a cambiar.
// Pero es bastante usada cuando queremos traer datos de manera 
// dinámica

console.log( "NOTACIÓN DE CORCHETE" );

var campo = "edad";

// Supongamos que queremos tener el nombre de la persona

console.log( persona["nombre"] );
console.log( persona["direccion"]["pais"] );

console.log( persona[campo] );

// Ahora que pasa si la propiedad no existe y la imprimimos
var campo = "edad2";

// Lo que sucede es que nos muestra undefined porque el campo así fue inicializado
// pero no hizo referencia a ninguna propiedad ya que no la encontro y por eso
// así se quedo
console.log( persona[campo] );

// Nota de hecho la notación de punto también lanza undefined
console.log( persona.campo );