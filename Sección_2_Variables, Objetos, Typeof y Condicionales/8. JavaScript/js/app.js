// Metodos y el objeto THIS

var persona ={

    nombre: "Maria",
    apellido: "Dubon",
    imprimirNombre: function() {
        //console.log( nombre ); // Si hago esto dentro del metodo va a dar error porque esta haciendo referencia a algo que en el objeto global no existe
        console.log( this.nombre ); // Para hacer referencia a la propiedad debo colocar this
        console.log( this ); // Este this de acá dentro es el objeto principal {nombre: 'Maria', apellido: 'Dubon', imprimirNombre: ƒ}... y hace referencia al valor que tenga la propiedad al momento de ser llamada
       
    },
    direccion: {
        pais: "Costa Rica",
        obtenerPais: function() {

            console.log( this ); // Ahora el this es el nuevo objeto {pais: 'Costa Rica', obtenerPais: ƒ}
            console.log("La dirección es en: " + this.pais );

            // Puedo crear una variable que apunte al this de aca afuera
            var self = this; // No necesariamente le debemos dar el nombre self ya que la podemos llamar de cualquier forma, pero le colocamos self ya que esto se ve demasiado en todo lado porque es una práctica adoptada por los desarrolladores

            var nuevaDireccion = function() {
                console.log( this ); // Acá hace referencia al objeto global, es decir, apunta al bojeto global
                console.log( "La nueva dirección es en: " + this.pais ); // Acá sale undefined ya que al apuntar al objeto globar la propiedad pais no existe
                // Como dentro de este contexto no existe un self al que hacer referencia lo que hace JavaScript es salirse
                // y afuera si la encuentra, y al estarle pasando el contexto this anterior podemos ahora si hacer referencia
                // a pais y no va a salir undefined
                console.log( "La nueva dirección es en: " + self.pais ); 
            }

            nuevaDireccion();
        }
    }

};

persona.imprimirNombre();
persona.direccion.obtenerPais();