// Funciones especiales: Call(), Apply() y Bind()

// Toda función en JavaScript tiene 3 métodos que están en su prototipo,
// llamados call, bind y apply

//------------------------------------------------------------------------------------------------------
// bind(): Con el podemos establecer el objeto y usar el this
//------------------------------------------------------------------------------------------------------
var carro = {
    color: "Blanco",
    marca: "Mazda",
    imprimir: function(){
        var salida = this.marca + " - " + this.color;
        return salida;
    }
}

var carro2 = {
    color: "Rojo",
    marca: "Toyota"
}

console.log( carro.imprimir() );

var logCarro = function( arg1, arg2 ){
    // Si dejamos así el this va a estar apuntando al objeto global y buscara la función
    // imprimir y no la va a encontrar y debería lanzar error
    console.log( "Carro: ", this.imprimir() );
    console.log( "Argumentos: ", arg1, arg2 );
    console.log( "=====================================" )
}

// logCarro();

// Pero ahora que pasa si hago lo siguiente:
// Cuando uso la función bind() yo puedo alterar que valor va a tener this cuando sea llamada
// la función
var logModeloCarro = logCarro.bind( carro ); // Acá el bind() con el parametro carro que es el objeto lo que hace es setearlo en el this

// Invocamos
logModeloCarro();
logModeloCarro( "abc", "xyz" );


//------------------------------------------------------------------------------------------------------
// call(): Este invoca una función y tenemos que pasarle como parametro a lo que apunta el this y luego
//         se mandan los parametros que tiene la función
//------------------------------------------------------------------------------------------------------
logModeloCarro.call( carro, "123", "456" );

//------------------------------------------------------------------------------------------------------
// apply(): El apply es casi igual al call solo que en el apply espera solo dos parámetros. El primer 
//          parámetro es el objeto y el segundo es un objeto que puede contener x cantidad de parámetros
//          dentro y tiene que estra en formato arreglo.
//          Y es muy util cuando no sabemos la cantidad de parámetros que se le va a mandar a la función
//------------------------------------------------------------------------------------------------------
logModeloCarro.apply( carro, [ "qwe", "rty" ] );

// Ahora y para que me van a servir estas funciones.
// Y pues nos servirian para lo que se conocen como Funciones Prestadas.

//Funciones Prestadas
console.log( carro.imprimir.call( carro2 ) ); // Acá nos imprime carro2 a pesar de que llamamos la función imprimir por el objeto prinicipal y por eso se dice que son prestadas
                                              // ya que de esta forma podemos agarrar funciones de cualquier otro objeto que se haya definido anteriormente
