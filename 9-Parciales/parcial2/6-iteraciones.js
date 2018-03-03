/*6-Realizar el algoritmo que al presionar el botón "Mostrar"
 pida el importe de las ventas (validar que sea mayor a 0,”cero”)
  de los 7 días de la semana por prompt (una por día), e informar cual fue el mayor
   importe y cuál fue el menor importe de venta
*/
function Mostrar()
{
	//alert("Funciona 6-iteraciones");
	var contador=0;
	var importeDeVentas;
	var mayorImporte;
	var menorImporte;
	var diaMayorImporte;
	var diaMenorImporte;

	for(i=1;i<8;i++)
	{
		importeDeVentas=prompt("Ingrese importe dia:" + i);
		importeDeVentas=parseInt(importeDeVentas);

		while(isNaN(importeDeVentas)||importeDeVentas<=0)
		{
			importeDeVentas=prompt("Dato invalido. Ingrese importe dia:" + i);
			importeDeVentas=parseInt(importeDeVentas);
		}

		if(i==1)
		{
			mayorImporte=importeDeVentas;
			menorImporte=importeDeVentas;
			diaMayorImporte=i;
			diaMenorImporte=i;
		}
		else
		{		
			if(importeDeVentas<menorImporte)
			{
				menorImporte=importeDeVentas;
				diaMenorImporte=i;
			}

			if(importeDeVentas>mayorImporte)
			{
				mayorImporte=importeDeVentas;
				diaMayorImporte=i;
			}
		}	
	}

document.write("Mayor Importe: "+ mayorImporte);
document.write("<br>Menor Importe: "+ menorImporte);
document.write("<br>Dia Menor Importe: "+ diaMenorImporte);
document.write("<br>Dia Mayor Importe: "+ diaMayorImporte);
}

