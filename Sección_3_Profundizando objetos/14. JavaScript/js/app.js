// Expresiones regulares parte 2

//NOTA: Para ver documentación referente a las expresiones regulares
//      podemos visitar el siguiente enlace: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions

var texto = "Aeropuerto";
console.log( texto );

// Quiero las vocales que se repitan por lo menos 2 veces, insensible y todas las apariciones
var arr = texto.match( /[aeiou]{2,2}/ig ); // Esta expresión es útil cuando tenemos diptongos (vocales juntas)
console.log( arr );

var arr2 = texto.match( /\w{2,2}/ig );
console.log( arr2 );

var texto2 = "La respuesta de la suma es: 45 + 60 = 105";
console.log( texto2 );

// Cualquier decimal que aparezca de 1 a n veces y la palabra respuesta
var arr3 = texto2.match( /\d{1,}|respuesta/ig );
console.log( arr3 );