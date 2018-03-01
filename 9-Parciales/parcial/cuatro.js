function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultadoOperacion;
	var esParResultadoMultiplicacion=false;
	numeroUno=prompt("ingrese  Primer Numero: ");
	//numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese  Segundo Numero: ");
	//numeroUno=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultadoOperacion=numeroUno+numeroDos;
		
	}
	else
	{	
		numeroUno=parseInt(numeroUno);
		numeroDos=parseInt(numeroDos);

		if(numeroUno>numeroDos)
		{
			resultadoOperacion=numeroUno*numeroDos;	
			if((resultadoOperacion%2==0) && (numeroUno!=0) && (numeroDos!=0) )
			{
				esParResultadoMultiplicacion=true;
			}
			
		}
		else
		{
			resultadoOperacion=numeroUno-numeroDos;	
		}

	}

	
	if(esParResultadoMultiplicacion==true)
	{
		document.write(resultadoOperacion+" Es Par");	
	}
	else
	{
		document.write(resultadoOperacion);
	}
	


}
