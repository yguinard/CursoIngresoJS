/*Enunciado:
al presionar el botón pedir la CLAVE (ayuda: es utn750)
clave = "utn750";
*/

function Mostrar()
{	
	var clave = prompt("ingrese el número clave.");
	
	while(clave!="utn750")
	{
		clave = prompt("Error : ingrese el número clave.");
	}

	alert("Clave Corecta");
}//FIN DE LA FUNCIÓN
