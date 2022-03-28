// Por valor y por referencia

// Las variables de tipo primitivo siempre se pasan por valor,
// es decir, en el siguiente ejemplo a siempre va a tener un 
// valor diferente y b siempre va a tener un valor diferente, 
// en pocas palabras ambos tienen un espacio de memoria diferentes
var a = 10;
var b = a;

console.log("a: ", a );
console.log( "b: ", b );

a = 20;

console.log("a: ", a );
console.log( "b: ", b );

var obj = {
    nombre: "Juan"
}

var obj2 = obj;

console.log("obj: ", obj);
console.log("obj2: ", obj2);

// Aca usamos el valor por referencia ya que en teoria solo le cambiamos
// el valor nombre de obj y obj2 a su vez también se altera y no se mantiene
// igual.
// Los objetos siempre se pasan por referencia y lo que indica es que cuando
// se crea el objeto apunta a un espacio de memoria y cuando igualamos otra variable 
// al mismo objeto lo que hace es decirle ahora esta variable también apunte al mismo
// epacio en memori y por eso se alteran
obj.nombre = "David";

console.log("obj: ", obj);
console.log("obj2: ", obj2);

obj2.nombre = "Andres";

console.log("obj: ", obj);
console.log("obj2: ", obj2);