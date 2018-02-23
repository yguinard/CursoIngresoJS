/*
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera e informar la suma acumulada y el promedio.
*/
function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while(respuesta=="si")
	{
		contador++;
		numero = prompt("ingrese Numero");
		numero = parseInt(numero);
		acumulador = acumulador + numero;
		respuesta=prompt("Para continuar, si");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN