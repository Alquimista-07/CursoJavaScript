// Funciones de primera clase

function a(){

    console.log("Función a");

}

// Invocamos
a();

// Como las funciones son objetos podemos asinarle una propiedad
a.nombre = "María";

// Y si imprimimos nos regresa la propiedad
console.log(a.nombre);

//-----------------------------------------------------------------------------------------
// Ahora si en la consola del google developer tools colocamos (a.) nos va a motrar 
// las funciones y propiedades que automáticamente el interprete de javascript
// asigna a la función cuando la crea.

// Por lo tanto cuando revisamos lo anterior en la consola de developer de google 
// podemos observar que hay una llamada name

// Y por ejemplo si colocamos lo siguiente
a.name = "Juan"
// Entonces lo que sucede es que a pesar de que supuestamente cambiamos la propiedad
// nos va a devolver de todas formas el nombre de la función que es a
// y esto sucede porque a es parte del mecanismo de funciones de primera clase
console.log ( a.name );

// Pero hay otros que si se pueden cambiar
a.apply = "María";

console.log(a.apply); // Nos muestra María ya que sobreescribimos el mecanismo

// Otra cosa es que a las funciones le podemos poner cualquier cosa que se le pueda
// poner a un objeto como propiedades y métodos
// Por ejemplo
a.name = "Juan";
a.direccion = {
    pais: "Costa Rica",
    ciudad: "San José",
    edificio: {
        piso: "8vo",
        nombre: "Edificio principal"
    }
}

// Ahora si en la consola de developer de google chrome colocamos (a.)
// miremos el resultado, y observamos que tiene otras propiedades adicionales
// correspondientes a las que asignamos anteriormente

