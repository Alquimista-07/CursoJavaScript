// Rotulando los ciclos

// Podemos ponerle un nombre siempre y cuando no sea una palbra reservada,
// como por ejemplo lo siguiente:

for_principal:
for( var i = 1; i <= 5; i++ ){
    
    console.log( "i", i );

    for_secundario:
    for( var j = 1; j <= 5; j++ ){

        console.log( "j", j );
        // Pero que pasa si acá en el for secundario detectamos algo
        // y queremos salirnos del for secundario y volver al principal
        // entonces podríamos hacer:
        continue for_principal;

        // Adicionalmente
    }

}

console.log( "=================================" );

for_principal:
for( var i = 1; i <= 5; i++ ){
    
    console.log( "i", i );

    for_secundario:
    for( var j = 1; j <= 5; j++ ){

        console.log( "j", j );

        // Adicionalmente podemos hacer cuantas rotulaciones queramos

        for_terciario:
        for ( var x = 1; x <= 5; x++){
            
            console.log( "x", x );
            // pero que pasa si a la primera queremos salirnos de todo ya que hicimos un barrido
            // y queremos salirnos ya. Entonces podemos usar el break pero hay que inidcar el rotulador
            // del ciclo que queremos terminar ya qu si solo lo dejamos break solo se saldría del for en
            // el que se encuentra
            break for_principal;

        }
    }

}

console.log( "=================================" );

for_principal:
for( var i = 1; i <= 5; i++ ){
    
    console.log( "i", i );

    for_secundario:
    for( var j = 1; j <= 5; j++ ){

        console.log( "j", j );

        for_terciario:
        for ( var x = 1; x <= 5; x++){

            console.log( "x", x );

            break for_secundario;

        }
    }

}