/*
Enunciado:
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
*/
function Mostrar()
{

	var numeroUsuario;
	var contadorNumrerosDivisores=0;
	numeroUsuario= prompt("Ingrese un Numero.");
	numeroUsuario=parseInt(numeroUsuario);

	for (i=2;i<=numeroUsuario;i++) {
		
		if(numeroUsuario%i==0){
			// i es divisor	
			contadorNumrerosDivisores++;
		//	document.write("<br>"+i );
		}

		
	}
	if(contadorNumrerosDivisores<2&&numeroUsuario!=1){
		document.write("<br>Es primo: ");
	}
	else{
		document.write("<br>No Es primo: ");
	}

	



}//FIN DE LA FUNCIÓN