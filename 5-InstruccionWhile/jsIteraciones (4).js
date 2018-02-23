/*

*/
function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero = parseInt(numero);

	while(numero < 0 || numero > 9)
	{

		var numero = prompt("Error, ingrese un número entre 0 y 10.");
	}


}//FIN DE LA FUNCIÓN