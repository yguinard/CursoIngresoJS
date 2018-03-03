/*
Enunciado:

8-Realizar el algoritmo que al presionar el botón "Mostrar" 
permita ingresar números positivos (validar que sea positivo) hasta que el usuario quiera. 
Informar al terminar el ingreso por document.write: 
a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo. 

// ojo el cero no es positivo

*/
function Mostrar()
{
	
	var numeroDigitado;
	var sumaNumeros=0;
	var promedioNumeros;
	var numeroMinimo;
	var numeroMaximo;
	var cantidadDePares=0;
	var cantidadDeNumerosdigitados=0;
	var respuesta = "si";

	while(respuesta=="si")
	{
		cantidadDeNumerosdigitados++;

		numeroDigitado=prompt("ingrese Numero Positivo");
		numeroDigitado=parseInt(numeroDigitado);

		while(isNaN(numeroDigitado) || numeroDigitado<=0)
		{
			numeroDigitado=prompt("Error.ingrese de Nuevo Numero Positivo");
			numeroDigitado=parseInt(numeroDigitado);
		}

		respuesta=prompt("para continuar digite: si");


		sumaNumeros=sumaNumeros+numeroDigitado;
		if(numeroDigitado%2==0)
		{
			cantidadDePares++;
		}

		if(cantidadDeNumerosdigitados==1)
		{
			numeroMaximo=numeroDigitado;
			numeroMinimo=numeroDigitado;
		}
		else
		{	
			if(numeroDigitado>numeroMaximo)
			{
				numeroMaximo=numeroDigitado;
			}
			if(numeroDigitado<numeroMinimo)
			{
				numeroMinimo=numeroDigitado;
			}
		}
	}

	promedioNumeros=sumaNumeros/cantidadDeNumerosdigitados;
	/*
	a) la cantidad de números pares. 
b) el promedio de todos los números ingresados. 
c) la suma de todos los números. 
d) El número máximo y el mínimo. 
	*/
	document.write("cantidad de numeros PAres: " + cantidadDePares);
	document.write("<br>promedio de todos los numeros: " + promedioNumeros);
	document.write("<br>sumaNumeros de todos los numeros: " + sumaNumeros);
	document.write("<br>minimo de todos los numeros: " + numeroMinimo);
	document.write("<br>maximo de todos los numeros: " + numeroMaximo);
}

