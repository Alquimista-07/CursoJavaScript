// Funciones de tiempo en JavaScript

// JavaScript tiene dos funciones para manejar tiempos

// La primera es usada cuando queremos ejecutar un código 
// cuando pasa x cantidad de segundos.
//

setTimeout( function(){

    console.log( "Paso un segundo" )
    
}, 1000 ); // Cantidad en milisegundos


// La segunda es usada cuando queremos que ese código en particular
// se repita x cantidad de veces en x cantidad de segundos
//

var segundos = 0;

var intervalo = setInterval( function(){

    segundos++;

    console.log( "seg", segundos );

    // La siguiente validación sirve para que no se ejecute infinitamente
    // sino que por ejemplo hasta que pasen 5 segundos
    if( segundos === 5 ){
        clearInterval( intervalo );
    }
    
}, 1000); // Cada cuanto se va a repetir

//-----------------------------------------------------------
// Ejemplo
//-----------------------------------------------------------

var juan = {
    nombre: "Juan",
    edad: 30,
    imprimir: function(){

        var self = this;
        
        setTimeout( function(){
            
            // Existe un problema y es que si apuntamos al this como este nos va a mandar undefined porque
            // esta apuntando al objeto global
            console.log( this );
            console.log( this.nombre, this.edad );
            // Entonces como hacemos para evitar dicho problema ya que dicho problema puede llevar a errores
            // algo difíciles de rastrear. Entonces lo que hacemos es apuntar al self afuera del timeout ya 
            // que ese si apunta a mi obejto
            
            console.log( self.nombre, self.edad );
            
        }, 1000);

    }
};

// Acá lo que queremos hacer es que cuando sea llamada la funicion imprimir
// debe demorar un segundo en mostrar algo así como un delay o un retraso
juan.imprimir();