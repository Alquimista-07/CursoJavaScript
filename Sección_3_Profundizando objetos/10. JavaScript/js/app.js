// Objeto Fecha (Date)

// Las formas más comunes de inicializar fechas en JavaScript son las siguientes:

var hoy = new Date();
var fechaMilisegundos = new Date(0);

// Para el siguiente objeto fecha tenemos que pasar 7 argumentos los cuales están indicados a continuación:
//var fechaFija = new Date( anio, mes, dia, hora, min, seg, milisegundo )
// NOTA: Los meses en JavaScript son en base cero por lo tanto el 0 representa Enero y así sucesivamente.
//       Adicionalmente la hora va en formato 24 horas y si colocamos 24 no da error solo que suma el día 
//       por ejemplo el día ya no sería 3 sino 4
var fechaFija = new Date( 2022, 3, 3, 18, 10, 45, 0 ); // Y así definimos una fecha estática


console.log( hoy );
console.log( fechaMilisegundos );
console.log( fechaFija );

// Como todo objeto las fechas tienen sus propias propiedades y métodos

console.log( hoy.getFullYear() ); // Obtenemos el año
console.log( hoy.getFullYear() + 1 ); // Adicionelamente podemos hacer operaciones con ella

// Hay que tener en cuenta para no confundirnos con el getYear()
console.log( hoy.getYear() ); // Es un formato deprecated ya que funcionaba antes en los 90 pero ahora no y da prblemas

console.log( hoy.getDate() ); // Regresa el día

console.log( hoy.getHours() ); // Devuelve la hora en formato 24 horas

console.log( hoy.getMinutes() ); // Devuelve los minutos

console.log( hoy.getSeconds() ); // Devuelve los segundos

console.log( hoy.getUTCMilliseconds()); // Devuelve los milisegundos

console.log( hoy.getMonth() ); // Devuelve el mes en base cero como si fuera un arreglo

console.log( hoy.getTime() ); // Devuelve la representación numérica en milisegundos de una fecha
// Por lo tanto si tomamos lo que nos devuelve el metodo getTime() y se lo pasamos a Date nos muesta
// la fecha porque getDate() tiene 3 consturctores de los cuales uno de ellos es la fecha.
// Adicionalmente este dato va cambiando cada milisegundo que pasa
var hoy2 = new Date( 1649000330871 );
console.log(hoy2 );

// Por ejemplo el principal uso que se le puede dar a getTime() es para decirme cuanto tiempo
// se demora un proceso en ejecutarse.

// Ejemplo

var inicio = new Date();

for(var i = 0; i < 15000; i++){
    console.log( "Ejecutando ciclo!!!..." );
}

var fin = new Date();

console.log( "Inicio: ", inicio );
console.log( "Fin", fin );

// Lo anterior no es tan explícito y para ello usamos el getTime()
var duracion = fin.getTime() - inicio.getTime();
console.log( duracion, "Milisegundos" );
console.log( (duracion/1000), "Segundos" ); // Lo convertimos a segundos dividiendo en 1000

// NOTA: Existe una librería muy usada para el manejo de fechas que se llama moment.js
// la cual podemos ver en este enlace: https://momentjs.com/
