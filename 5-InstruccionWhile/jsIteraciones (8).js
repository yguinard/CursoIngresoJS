/*
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera,
 sumar los que son positivos y multiplicar los negativos.
 conceptos break, continue, confirm();-
 isNaN(); NaN!=NaN
*/
function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

while(respuesta=='si')
	{
		contador++;
		numero = prompt("ingrese Numero");
		numero = parseInt(numero);
		//alert(numero);
		while(isNaN(numero))
		{
			numero = prompt("Por favor ingrese Numero");
			numero = parseInt(numero);
		}

		if(numero>0)
		{
			positivo = positivo + numero;
		}
		else
		{
			if(numero<0)
			{
				negativo = negativo * numero;
			}

		}
		//acumulador = acumulador + numero;
		respuesta=prompt("Para continuar, si");
	}

	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN