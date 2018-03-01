/*Enunciado:
al presionar el botón pedir un número. Mostar los numeros divisores desde el 1 al número 
ingresado, y mostar la cantidad de numeros divisores encontrados.*/

function Mostrar()
{
	var numeroUsuario;
	var contadorNumrerosDivisores=0;
	numeroUsuario= prompt("Ingrese un Numero.");
	numeroUsuario=parseInt(numeroUsuario);

	for (i=1;i<=numeroUsuario;i++) {
		
		if(numeroUsuario%i==0){
			// i es divisor	
			contadorNumrerosDivisores++;
			document.write("<br>"+i );
		}

		
	}
	document.write("<br>Cantidad de divisores Encontrados: "+ contadorNumrerosDivisores );


}//FIN DE LA FUNCIÓN