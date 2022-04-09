//Bloqueando el click derecho de la página.

// Mostramos un mensaje para que sea mostrado cuando hagan click
// derecho
document.onmousedown = function( arg ){
    
    // Bloqueamos el click derecho que corresponde al 2 y el izquierdo corresponde al 1
    if( arg.button === 2 ){
        alert("Click Bloqueado!!!...");
        return;
    }

    console.log( arg );

    // El otro clik lo permitimos
    console.log( "No Hay Problema ");

}

// Evento para capturar cuando se hace una selección de texto sobre el sitio web
document.onmouseup = function(){

    var texto = window.getSelection().toString();

    console.log( texto );

}