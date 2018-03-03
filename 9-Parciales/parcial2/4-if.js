//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
/*
Enunciado:

4-Realizar el algoritmo que al presionar el botón "Mostrar"
 pida dos números por prompt, si son iguales que los multiplique, si el 
 primero es mayor al segundo que los reste y si no que los sume, mostrar el
  resultado por document.write.
*/
function Mostrar()
{	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno = prompt("Ingresa primer numero:");
	numeroUno = parseInt(numeroUno);
	numeroDos = prompt("Ingresa segundo numero:");
	numeroDos = parseInt(numeroDos);
	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resultado = numeroUno - numeroDos;
		}
		else
		{
			resultado= numeroUno + numeroDos;
		}

	}


document.write("Resultado de la operacion: "+ resultado);
	//alert("Funciona 4-if");
	
}

