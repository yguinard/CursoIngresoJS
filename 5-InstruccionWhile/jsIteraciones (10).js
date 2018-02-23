/*
Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, mostar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos.
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 9-Diferencia entre positivos y 
negativos, (positvos-negativos).
*/
function Mostrar()
{

	var contador = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var cantidadDeCeros = 0;
	var cantidadDePares = 0;
	var acumuladorPositivos = 0;
	var promedioPositivos = 0;
	var acumuladorNegativos = 0;
	var promedioNegativos = 0;
	var diferenciaEntrePositivosyNegativos = 0;
	//declarar contadores y variables 
	
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


			if (numero==0)
			{
				cantidadDeCeros++;
			}
			else
			{					
				if(numero>0)
				{	//es positivo
					contadorPositivos++;
					acumuladorPositivos+=numero;
				}
				else
				{	//es negativo
					contadorNegativos++;
					acumuladorNegativos+=numero;	
				}	
				// como sabemos que num!=0
				if(numero%2==0) // preguntamos si es par
				{
					cantidadDePares++;
				}	
			}
		

		respuesta=prompt("Para continuar, s");
	}

document.write("<br>1 Suma de los Numeros negativos: " + acumuladorNegativos);
document.write("<br>2 Suma de los Numeros Positivos: " + acumuladorPositivos);
document.write("<br>3 cantidad Numeros positivos: " + contadorPositivos);
document.write("<br>4 cantidad de los Numeros negativos: " + contadorNegativos);
document.write("<br>5 cantidad de Ceros: " + cantidadDeCeros);
document.write("<br>6 cantidad de numeros pares; " + cantidadDePares);

}//FIN DE LA FUNCIÓN