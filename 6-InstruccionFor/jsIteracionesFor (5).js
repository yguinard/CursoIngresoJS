Enunciado:/*
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
*/
function Mostrar()
{
	var numeroUsuario;
	for (;;) {
		numeroUsuario= prompt("Ingrese un Numero, para salir digite 9");
		numeroUsuario=parseInt(numeroUsuario);
		if(numeroUsuario==9){
			break;
		}
	}


}//FIN DE LA FUNCIÓN