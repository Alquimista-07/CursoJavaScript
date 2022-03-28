// JavaScript no es asíncrono a pesar de que JQuery existe AJAX,
// o en Angular que exite el http request

// Ejemplo Demostrativo
// Se va a crear una rutina que ejecute algo repetitivo y a la vez cuando se este ejecutando esto
// llamar otra función inmediatamente para que caiga en la pila de funciones que tien que ejecutar
// Y esto demuestra que si Javascript fuera asíncrono ejecutaria si problema las 2 cosas
function imprimir() {

    for( var i = 0; i < 20000; i++){

        console.log("Imprimió", i);

    }

}

// Cuando se llame esta función al hacer click en el botón
// se va a mostrar luego de que termine de hacer lo de la primera
// función, es decir que se ejecuta todo el código en secuencia, ya que como
// se dijo anteriormente cae en una pila 
function presionoClick(){
     
    console.log('Click en botón');

}

// Lamamos la función
imprimir();