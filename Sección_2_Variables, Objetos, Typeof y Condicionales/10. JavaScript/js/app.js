// El señor de los anillos :: The JavaScript Game

// En este ejercicio se va a poner en práctica lo aprendeido 
// hasta ahora, tipos primitivos, palabra reservada new, valores por referencia, pasar objetos, etc

// Función de primera clase
function Jugador( nombre ){

    this.nombre = nombre;
    this.pv = 100; // Puntos Vida
    this.sp = 100; // Special Points

    // Creamos un metodo curar jugador
    this.curar = function( jugadorObjetivo ){ // Personaje que quiero curar

        // Validamos para que la habilidad de curar la pueda hacer si y solo si tiene 40 se SP disponible
        if (this.sp >= 40 ){

            //jugadorObjetivo.sp = jugadorObjetivo.sp - 20; // Resta SP en 20 puntos
            this.sp -= 40; // Es lo mismo que la linea anterior solo que una forma para corta y sirve para restar SP en 20 puntos

            //jugadorObjetivo.pv = jugadorObjetivo.pv + 20; // Cura en 20 puntos
            jugadorObjetivo.pv += 20; // Es lo mismo que la linea anterior solo que una forma para corta y sirve para cura en 20 puntos
        
        }
        else{
            console.info( this.nombre + " No tiene SP" );
        }

        // Cada vez que se ejecute la acción imprime el estado de los jugadores
        this.estado( jugadorObjetivo );

    }

    // Creamos un metodo para disparar una flecha
    this.dispararFlecha = function( jugadorObjetivo ){

        // Validmos para que no se puedan bajar más los PV de lo disponible
        if( jugadorObjetivo.pv > 40 ){

            jugadorObjetivo.pv -= 40;
            this.estado( jugadorObjetivo );

        }
        else{

            jugadorObjetivo.pv = 0;
            console.error( jugadorObjetivo.nombre + " Murió!!!..." );
            this.estado( jugadorObjetivo );

        }
       

    }

    this.golpeaConEspada = function( jugadorObjetivo ){

        // Validamos el pv del jugador
        if( jugadorObjetivo.pv > 20 ){

            jugadorObjetivo.pv -= 20;
            this.estado( jugadorObjetivo );

        }
        else{

            jugadorObjetivo.pv = 0;
            console.error( jugadorObjetivo.nombre + " Murió!!!...");
            this.estado( jugadorObjetivo );
            
        }

    }

    // Creamos un meotodo par aimprimir por consola
    this.estado = function ( jugadorObjetivo ){

        console.info( this );
        console.info( jugadorObjetivo );

    }

}

// Declaramos los jugadores (Variables objeto de tipo Jugador)
var gandalf = new Jugador( "Gandalf" );
var legolas = new Jugador( "Legolas" );
var aragon = new Jugador( "Aragon" );

console.log( gandalf );
console.log( legolas );

// Usamos los metodos del Jugador
gandalf.curar( legolas );