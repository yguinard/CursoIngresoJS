/*
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo.
*/
function Mostrar()
{

	var contador=0;
	var numeroMaximo;
	var numeroMinimo;
	// declarar variables
	
	var respuesta='s';

while(respuesta=='s')
	{
		//contador++;
		numero = prompt("ingrese Numero");
		numero = parseInt(numero);
		//alert(numero);
		while(isNaN(numero))
		{
			numero = prompt("Por favor ingrese Numero");
			numero = parseInt(numero);
		}

		if(contador==0)
		{
			contador=1;
			numeroMaximo=numero;
			numeroMinimo=numero;
		}
		else
		{
			if(numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}
			else
			{
				if(numero<numeroMinimo)
				{
					numeroMinimo=numero;
				}
			}	
		}

		//acumulador = acumulador + numero;
		respuesta=prompt("Para continuar, s");
	}

	document.getElementById('maximo').value=numeroMaximo;
	document.getElementById('minimo').value=numeroMinimo;



}//FIN DE LA FUNCIÓN