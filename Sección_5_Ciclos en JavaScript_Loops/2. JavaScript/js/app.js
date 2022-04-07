// Ciclo for y for in - Reflejo

for( var i = 0; i < 10; i++){ // Incrementa de 1 en 1

    console.log( i );

};

console.log( "============================" );

for( var i = 0; i <= 10; i+=2){ // Incrementa de 2 en 2

    console.log( i );

};

console.log( "============================" );

for( var i = 0; i <= 10; i+=3){ // Incrementa de 3 en 3

    console.log( i );

};

console.log( "============================" );

// Al igual que el while también tenemos el continue

for( var i = 0; i < 10; i++){ // Incrementa de 1 en 1
    
    if( i === 5){ // Se salta el 5
        continue;
    }

    console.log( i );

};

console.log( "============================" );

// Al igual que el while también tenemos el  break

for( var i = 0; i < 10; i++){ // Incrementa de 1 en 1
    
    if( i == 5){ // Cuando es 5 termina la ejecución del ciclo
        break;
    }

    console.log( i );

};

console.log( "============================" );

// NOTA: También podemos hacer ciclos dentro de ciclos

for( var i = 0; i < 5; i++){ // Incrementa de 1 en 1
    
    for (var j = 5; j > 0; j --){

        console.log( ["i", i,"j", j] );

    }

};

console.log( "============================" );

//* *************************************************** */
// For in
//* *************************************************** */
// El for in es muy util cuando tenemos objetos y queremos 
// cada uno de los elementos dentro de esos objetos barrer 

// Creamos una función de primera clase
var Persona = function(){
    this.nombre = "Juan";
    this.apellido = "Pineda";
    this.edad = 30;
};

// Cramos el objeto de tipo persona
var juan = new Persona();

// Ahora que pasa si metemos un prototipo con la dirección
// Lo que sucede es que a pesar de que la propiedad dirección
// no esta dentro de la función de primera clase, esta es agregada
// y mostrada al recorrerla con el ciclo for in
Persona.prototype.direccion = "San Jose";

// Por cada propiedad en juan imprimimos
for( prop in juan ){

    console.log( prop, ":", juan[prop] );

};

console.log( "============================" );

// Ahora y si necesito solo las propiedades definidas dentro del objeto
// y no los prototipos. Para esta hay unas propiedades en Javascript que 
// nos ayudan a esto.
for( prop in juan ){

    console.log( juan.hasOwnProperty( prop ) ); // regresa un true o false dependiendo

    console.log( prop, ":", juan[prop] );

};

// NOTA: Con ayuda del hasOwnProperty hacemos lo que se le conoce como reflejo

console.log( "============================" );

// Entonces usando el hasOwnProperty para lo que habíamos dicho tenemos lo siguiente
for( prop in juan ){

    // ! es la negación ya que si lo dejamos sin el ! es como si preguntaramos que fuera true.
    // Osea si no existe la propiedad hace continue
    if( !juan.hasOwnProperty( prop ) ){
   
        continue;
   
    }
    else{

        console.log( prop, ":", juan[prop] );

    }


}

console.log( "============================" );

// Ahora si queremos las propiedades que son solo del prototipo
for( prop in juan ){

    if( juan.hasOwnProperty( prop ) ){
   
        continue;
   
    }
    else{

        console.log( prop, ":", juan[prop] );

    }


};
console.log( "============================" );

//****************************** */
// NOTA: El for in tiene algo interesante que no debemos confundirlo
for( num in [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ){

    console.log( num ); // Acá pereciera que nos esta imprimiendo los números del arreglo pero no
                        // en realidad lo que esta haciendo es que va a hacer 10 vueltas, es decir, cada uno
                        // de los numeros que están dentro del arrelo, pero el num es el index que tiene cada 
                        // uno de esos elementos dentro del arrelo

};

console.log( "============================" );

//*********************************** */
// For Each
//*********************************** */
// Ahora si quisieramos obtener cada uno de los valores del arreglo
// del ejercicio anterior usariamos el for each pero es ya tema de los
// arreglo.
//NOTA: Entonces si necesitamos validar un arreglo es mejor no usar el for in sino el for each

[1,2,3,4,true,6,7,8,false,"nombre"].forEach( function ( val ) {
    
    console.log( val );

});

console.log( "============================" );

//**************************************************** */
// Ejemplo de for each
//**************************************************** */

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

console.log( "============================" );

//**************************************************** */
// Ejemplo de for each
//**************************************************** */
const array2 = [1,2,3,4,5,6,7,8,9];

array2.forEach(element => {

    console.log(element);

});

console.log( "============================" );
