function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var numeroMayor;

	numeroUno=prompt("ingrese  Primer Numero: ");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese  Segundo Numero: ");
	numeroDos=parseInt(numeroDos);
	numeroTres=prompt("ingrese  tercer Numero: ");
	numeroTres=parseInt(numeroTres);

	if(numeroUno==numeroDos==numeroTres)
	{
		numeroMayor=numeroUno;
	}
	else
	{

		if(numeroUno>numeroDos)
		{
			numeroMayor=numeroUno;
		}
		else
		{
			numeroMayor=numeroDos;
		}

		if(numeroTres>numeroMayor)
		{
			numeroMayor=numeroTres;
		}

	}
	
	alert("El numero mayor es: " + numeroMayor );
/*

	if(numeroUno>numeroDos)
	{
		numeroMayor=numeroUno;
	}
	else
	{
		numeroMayor=numeroDos;
	}

	if(numeroTres>numeroMayor)
	{

		numeroMayor=numeroTres;
	}

	
	alert("El numero mayor es: " + numeroMayor );
	*/
	
}
