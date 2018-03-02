
/*
vamos a pedir 3 datos hasta que el cliente quiera
nombre del animal
peso del animal // validar >0
temperatura del habitad -40 +40
informar nombre del animal mas pesado
nombre del animal de la temperatura mas baja
la cantidad de temperaturas pares que se ingresaron
el promedio del peso de todos los animales
temp maxima y temp minima
*/
function Mostrar()
{

	var nombreDelAnimal;
	var pesoDelAnimal=0;
	var pesoMaximo=0;
	var temperaturaHabitadAnimal;
	var temperaturaMinima=40;
	var temperaturaMaxima=-40;
	var nombreAnimalMasPesado;
	var nombreAnimalMasFrio;
	var contadorDeTemperaturasPares=0;
	var contadorDeAnimalesIngresados=0;
	var acumuladorDePesoAnimales=0;
	var respuesta='si';

	while(respuesta=='si')
	{
		contadorDeAnimalesIngresados++;
		nombreDelAnimal = prompt("Ingrese el nombre del Animal: ");
		
		pesoDelAnimal= prompt("Ingrese el peso del Animal: ");
		pesoDelAnimal= parseInt(pesoDelAnimal);

		while(isNaN(pesoDelAnimal) || pesoDelAnimal<=0 )
		{
			pesoDelAnimal = prompt("Error!, Ingrese de nuevo el peso del animal");
			pesoDelAnimal = parseInt(pesoDelAnimal);
			
		}

		if(pesoDelAnimal>pesoMaximo)
		{
			pesoMaximo=pesoDelAnimal;
			nombreAnimalMasPesado=nombreDelAnimal;
		}


		temperaturaHabitadAnimal= prompt("Ingrese temperatura Habitad Animal:-40 y +40 ");
		temperaturaHabitadAnimal= parseInt(temperaturaHabitadAnimal);

		while(isNaN(temperaturaHabitadAnimal) || temperaturaHabitadAnimal<-41 || temperaturaHabitadAnimal>41)
		{
			temperaturaHabitadAnimal = prompt("Error!, Ingrese de nuevo temperatura Habitad Animal entre -40 y +40");
			temperaturaHabitadAnimal = parseInt(temperaturaHabitadAnimal);
			
		}

		if(temperaturaHabitadAnimal%2==0 && temperaturaHabitadAnimal!=0 )
		{
			contadorDeTemperaturasPares++;
		}


		if(temperaturaHabitadAnimal<temperaturaMinima)
		{
			temperaturaMinima=temperaturaHabitadAnimal;
		}

		if(temperaturaHabitadAnimal>temperaturaMaxima)
		{
			temperaturaMaxima=temperaturaHabitadAnimal;
		}
		

	
		acumuladorDePesoAnimales=acumuladorDePesoAnimales+pesoDelAnimal;
		

		respuesta=prompt("Para continuar Ingresando animales, si");
		
	}	

	document.write("Nombre del animal mas pesado: " + nombreAnimalMasPesado );
	document.write("<br>Cantidad de temperatura pares digitadas: " + contadorDeTemperaturasPares );
	document.write("<br>Cantidad de animales Ingresados: " + contadorDeAnimalesIngresados );
 	document.write("<br>Promedio peso animales: " + acumuladorDePesoAnimales/contadorDeAnimalesIngresados );
 	document.write("<br>Cantidad de temperatura pares digitadas: " + contadorDeTemperaturasPares );
 	document.write("<br>temperatura minima: " + temperaturaMinima );
 	document.write("<br>temperatura maxima: " + temperaturaMaxima  );
}
