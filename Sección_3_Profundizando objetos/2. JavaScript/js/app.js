// Arreglos parte 2

// Los arreglos en JavaScript son muy poderosos, por lo tanto podemos tener el
// siguiente arreglo con booleanos, objetos, funciones y funciona normalmente

 var arr = [

    true,
    {
        nombre: "Juan",
        apellido: "Hernández"
    },
    function (){
        console.log( "Estoy viviendo en un arreglo" );
    },
    function ( persona ){
        console.log( persona.nombre + " " + persona.apellido );
    },
    // Los arreglos pueden contener otros arreglos y así sucesivamente
    ["Juan", "Carlos", "Fernando", "Angelica"],

    // Los enter y espacios no importan en JavaScript, podemos tener lo siguiente y de todas formas obtener los elementos sin problema
    [
        "Camilo", 
        "Tatiana", 
        "Andrea", 
        "Melissa",
        "Camila"
    ],

    // Ahora asi hago lo siguinete y meto más arreglos y dentro otros arreglos
    [
        "Ariadna",
        "Sofia",
        "Andrés",
        "Miguel",
        [
            "Cristina",
            "Pedro",
            "Alicia",
            function(){
                console.log("this: ", this );
            }
        ]
    ]

 ];

// Ahora para hacer referencia a los elementos de l arreglo sencillamente podemos hacer referencia
// a la posición de cada elemento como se muestra a continción
console.log( arr );    // Arreglo completo
console.log( arr[0] ); // Valor booleano dentro del arreglo
console.log( arr[1].nombre + " " + arr[1].apellido ); // Objeto dentro del arreglo 

arr[2](); // Invocar la función

arr[3]( arr[1] ); // Invocar una función pasado como parametro otra posición del arreglo

console.log( arr[4][3] ); // Obener un valor de un arreglo dentro de otro arreglo, en este caso obtenemos
//                         el nombre Angelica

console.log( arr[5][4]);

console.log( arr[6][4]); // Obtenemos el arreglo completo dentro del arreglo
console.log( arr[6][4][2]); // Obtenemos a Alicia

// Ahora que pasa si queremos cambiar el valor de un valor dentro del arreglo
var arreglo2 = arr[6][4];
console.log("Arreglo 2 ", arreglo2 );
// Entonces para cambiar el valor hacemos lo siguiente
arreglo2[2] = "Alicia!!!...";
console.log("Cambio en Arreglo 2: ", arreglo2 );

// Y como JavaScript pasa los valores por referencia si imprimimos el arreglo principal
// El valor que cambiamos se debió de alterar así hayamos cambiado sobre arreglo 2, 
// entonces imprimimos para verificar
console.log( arr );

// Ahora llamamos la función anónima dentro del otro arreglo
arreglo2[3](); // Invocamos la función que contiene el console.log(this)

// También podemos saber el largo de un arreglo de la siguiente forma:
var longArr = arr.length;
console.log( longArr );