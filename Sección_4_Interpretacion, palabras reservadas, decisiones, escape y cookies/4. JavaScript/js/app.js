// Manejo de errores en JavaScript

// Javascript tiene una gran capacidad para el manejo de errores
// a continuación las vamos a ver

// El primero es:
try{

	// Intenta hacer este bloque de código
	var a = 100;

	console.log("El valor de a:" , a);

}catch(err){

	// NOTA: El catch es opcional y después de este va el finally.
	//       Y como es opcional si no lo usamos tenemos que poner el finally
	//
	// Basicamente lo que queremos decir que haga es intenta (try) y si falla
	// haga lo de acá adentro (catch)
	console.log(err); // Acá imprimimos el error como tal

}

//-----------------------------------------------------------------------------------------------------------------------
try{
	// Intenta
	var b = 100;
	console.log("El valor de b:", b);
}
finally{
	// Siempre hace esto
	console.log("Finalmente");
}

//-----------------------------------------------------------------------------------------------------------------------
try{
	// Intenta
	var c = 100;

	// Tirar o dispara algo y lo que hago con este throw es forzar al catch,
	// es decir, salirme del try
	throw 'Oh oh!';

	console.log("El valor de c:", c);
}
catch(err){
	// Si falla
	console.log( "Error de catch: ", err );
}
finally{
	// Siempre hace esto
	console.log("Finalmente");
}

//-----------------------------------------------------------------------------------------------------------------------
try{
	var c = 100;

	if (a === 100){
		throw 'que mal';
	}
	else{
		throw 'Oh oh!';
	}

	console.log("El valor de c:", c);
}
catch(err){
	// Esta no es la mejor forma de hacer lo siguiente pero es más para fines ilustrativos
	if( err === "que mal"){
		console.log( "Error tipo 1" );
	}

	if( err === "Oh oh!"){
		console.log( "Error tipo 2" );
	}

}
finally{
	console.log("Finalmente");
}

//-----------------------------------------------------------------------------------------------------------------------
// Puede ser que lo anterior sea suficiente para nustro programa, pero como se mencionó puede ir un poco más allá
// entonces para ello vamos a indagar un poco más de lo que se puede hacer con el try{}catch{} y para esto vamos a
// hacer lo siguiente:
//-----------------------------------------------------------------------------------------------------------------------
try{

	throw new Error( 'Error tipo 1' );

	console.log( "Esta parte nunca se ejecuta!!!..." );
	
}
catch(err){

	console.log( err );
	console.log( err.message );

	console.log( "Parte del catch" );

}
finally{
	console.log("Finalmente");
}

//-----------------------------------------------------------------------------------------------------------------------
try{
	
	// Podemos tirar lo que sea con el throw, funciones, objetos, variables, arreglos, tipos primitivos
	// y todo sera renombrado en el err (parametro del catch).
	// Basicamente lo que estamos haciendo es invocar la función catch y es ejecutada en el momento que se invoca
	// es como una función anónima
	throw {
		// NOTA: Como es un objeto no uso el camel case
		nombreerror: "Error tipo 1",
		accion: "Salir corriendo a echarla agua al servidor",
		coderror: 1
	}

	console.log( "Esta parte nunca se ejecuta!!!..." );
	
}
catch(err){

	console.log( err );
	console.log( err.nombreerror );
	console.log( err.accion );
	console.log( err.coderror );

	console.log( "Parte del catch" );

}
finally{
	console.log("Finalmente");
}

// También podemos mandar en throw una función anónima
try{
	
	throw function(){

		console.log( "Función del throw" );

	}

	console.log( "Esta parte nunca se ejecuta!!!..." );
	
}
catch(err){

	err();
	console.log( "Parte del catch" );

}
finally{
	console.log("Finalmente");
}

//-----------------------------------------------------------------------------------------------------------------------
// NOTA: También hay que tener cuidado si por ejemplo nos equivocamos y hacemos lo siguiente:
//       de mandar un throw descuidado en la parte principal

// Para probar lo que se menciono en la anterior nota descomentar la siguiente línea

//throw 'Error!!!...'; // Esto ocasiona que lo que se encuentre después no se ejecute

try{
	
	throw function(){

		console.log( "Función del throw" );

	}

	console.log( "Esta parte nunca se ejecuta!!!..." );
	
}
catch(err){

	err();
	console.log( "Parte del catch" );

}
finally{
	console.log("Finalmente");
}

console.log( "Otra cosa" );

// NOTA: Pero si va a llamar otros archivos .js  

//-----------------------------------------------------------------------------------------------------------------------
// A continuación tenemos un ejemplo de algo que podemos elaborar para el manejo de errores

try{

	throw 1; // n cualquier número.

}
catch( e ){

	// Si da error 1 tendríamos nuestro catalogo de errores
	// y acá hacemos los if o switch case o lo que sea

	registroErrores( e );

}
finally{
	console.log( "Finalmente" );
}

// Y podemos tener una función para registrar los errores
function registroErrores( err ){

	// Podríamos tener una peitición AJAX o http request para grabarlo
	// en una base de datos o mandar un correo o lo que sea si un error
	// pasa un error crítico.

	var ahora = new Date();

	console.log( "Se registro un error: ", err, " a las: ", ahora );

}