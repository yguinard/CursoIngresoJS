function Mostrar()
{

	var numeroUsuario;
	var contadorNumrerosPares=0;
	numeroUsuario= prompt("Ingrese un Numero.");
	numeroUsuario=parseInt(numeroUsuario);

	for (i=1;i<=numeroUsuario;i++) {
		
		if(i%2==0){
			// i es par	
			contadorNumrerosPares++;
			document.write("<br>"+i );
		}

		
	}
	document.write("<br>Cantidad de pares Encontrados: "+ contadorNumrerosPares );

}//FIN DE LA FUNCIÓN