// Evento "on submit" y parámetros URL

// El método onsubmit se puede usar antes de que el formulario sea enviado
// al servidor

// NOTA: Esto es para fines ilustrativos y no es práctico ponernos a hacer esto ya que hay muchos
//       librerias en JavaScript que nos permiten implementar dichas validaciones de forma rápida
//       y sin tanto código.
//
//       Por Ejemplo:
//
//       Angular: angular autovalidate
//       JQuery : jquery autovalidate 
function validar(){

    //Obtenemos los id para hacer validaciones
    var nombre = document.getElementById("txtIdNombre").value; // Obtenemos el valor ingresado
    var apellido = document.getElementById("txtIdApellido").value; // Obtenemos el valor ingresado

    if( nombre.length < 1 ){
        return false;
    }

    if( apellido.length < 1 ){
        return false;
    }

    return true;

}

// Ahora compo podemos obtener los parámetros de url
console.log( window.location ); // Este window.location continen varias propiedades y la que nos interesa es el search que contiene los parámetro
console.log( window.location.search ); // Acá ya nos muestra los parámetros separados por el signo & y un signo ? al inicio

// Entonces por ejemplo podríamos convertirlo en un arreglo
console.log( window.location.search.split("&") );

// NOTA: Pero para que inventar el agua caliente si esto ya alguién lo hizo, entonces
// podemos usar la siguiente función que nos permite obtener la url con el uso de una
// expresión regular
function getParamURL(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}

// Y cuando usemos la función le especificamos el parametro que viene en la url por ejemplo lo siguiente:
console.log( getParamURL("txtNombre") )
