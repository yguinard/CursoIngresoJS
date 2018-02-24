/*Enunciado:
al presionar el botón pedir la cantidad de veces 
que quiero repetir el mensaje "Hola UTN FRA"
*/
function Mostrar()
{

	var repetciones = prompt("ingrese el número de repeticiones");
	
		for (var i = 0; i<repetciones; i++) {
		document.write("<br>Hola UTN FRA" );
		}

}//FIN DE LA FUNCIÓN