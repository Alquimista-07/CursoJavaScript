// Operaciones con Fechas

var fecha = new Date(2022, 3, 20);

console.log( fecha );

// Si nos piden sumarle 5 dias a la fecha hacemos lo siguiente
fecha.setDate( 25 ); // Si sumamos más de la cuenta pasa el mes y suma la cantidad de días que le siguen al mes siguiente

console.log( fecha );

// Ahora que nos parece si hacemos una modificación al protoripo
Date.prototype.sumarDias = function( dias ){

    this.setDate( this.getDate() + dias );

    return this;

};

var fecha2 = new Date(2022, 3, 20);

console.log( fecha2);
console.log( fecha2.sumarDias(5) );

//Ahora que pasa si le resto días usando el prototipo que creamos
console.log( fecha.sumarDias( -10 ) );

// Ahora creamos un prototipo para años
Date.prototype.sumarAnios = function( anios ){

    this.setFullYear( this.getFullYear() + anios );
   
    return this;
};

// Usando el protoripo sumamos o restamos años

var fecha3 = new Date(2022, 3, 20);

console.log( fecha3.sumarAnios( 5 ) );
console.log( fecha3.sumarAnios( -5 ) );

// Creamos un prototipo para sumar segundos
Date.prototype.sumarSegundos = function( segs ){

    this.setSeconds( this.getSeconds() + segs );

    return this;

};

var fecha4 = new Date(2022, 3, 20);

console.log( fecha4.sumarSegundos( 40 ) );