// Cajas de dialogo

// JavaScript cuenta con tres cajas de diálogo ya incorporadas en el código.
// Pero es recomendable usar unas fabricadas como el sweet alertet entre otras que
// se encuentran en internet y no es recomendable usar las que vamos a ver acá  y no
// son recomendables porque se pueden bloquear

alert("Hola Mundo!!!...");

// La siguiente retorna un valor booleano
var acepto = confirm( "¿Está seguro de que desea borrar esto?" )
console.log( acepto );

// La siguiente es la de captura de texto en pantalla. Y recibe
// como primer parámetro el texto y el segundo paámetro es opcional
// pero podría ser usado como un valor por defecto
var texto = prompt( "Ingrese su nombre", "nombre" );
console.log( texto );

// NOTA: Y porque no es recomendable usarlas y no es porque sean malas o nada parecido, pero con mucho cuidado ya que de hecho ayudan a salir
//       de algún apuro. Pero esto tiene que ver es con que JavasCript no es asíncrono (Solo puede hacer un proceso secuencial a la vez) ya que
//       por ejemplo si yo tengo lo siguiente:

// En este caso si estuviera trayendo la data o esperando el logueo en facebook, google u otra cosa lo que sucede es
// que dicho alert me pausa la ejecución mientras el prompt esté y cuando le de aceptar el código si continuaría con su ejecución
setInterval(() => {

    console.log("Segundo...");
    
}, 1000);

var nombre = prompt( "Ingrese su nombre", "Nombre" );

// NOTA: Por lo tanto nos recomienda por ejemplo usar el sweet alert que es fácil de usar y lo encontramos
//       en el siguiente enlace con su documentación: https://sweetalert2.github.io/
//       Y este no hace que nuestro código se pause. Y pues también hay un montón de notificaciones que
//       podemos buscar en internet que visualmente son bonitas