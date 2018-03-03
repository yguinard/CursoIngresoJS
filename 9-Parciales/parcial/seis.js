/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que pida el importe de las ventas (validar que sea mayor a 0,”cero”)
 de los 24 días hábiles del mes por prompt (una por día), e informar cual fue el mayor importe y 
 cuál fue el menor importe de venta.
*/
function Mostrar()
{
	var importeIngresado;
	var importeMaximo;
	var importeMinimo;
	var contador=0;
	
	while(contador<25)
	{
		contador++;
		importeIngresado=prompt("Ingrese Importe #"+contador);
		importeIngresado=parseInt(importeIngresado);

		while(isNaN(importeIngresado)||importeIngresado<=0)
		{

			importeIngresado=prompt("Ingrese Importe #"+contador);
			importeIngresado=parseInt(importeIngresado);

		}

		if(contador==1)
		{
			importeMaximo=importeIngresado;
			importeMinimo=importeIngresado;
		}

		if(importeIngresado>importeMaximo)
		{	
			importeMaximo=importeIngresado;
		}

		if(importeIngresado<importeIngresado)
		{
			importeMinimo=importeIngresado;
		}
	}	

	document.write("<br>Importe minimo ingresado: " + importeMinimo);
	document.write("<br>Importe maximo ingresado: " + importeMaximo);
}
