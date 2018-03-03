/*

Enunciado:

7-Realizar el algoritmo que al presionar el botón "Mostrar" 
pida por prompt las notas (validar entre 0 y 10) y el sexo(validar el sexo “f” o “m”) 
de 6 alumnos, informar por alert: 
a) el promedio de las notas totales. 
b) la nota más baja. 
c) la cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function Mostrar()
{
	
	var notaAlumno;
	var promedioNotas;
	var acumuladorNotas=0;;
	var notaMasBaja;
	var sexoAlumno;
	var cantidadVaronesNotasAltas=0;

	for(i=1;i<7;i++)
	{
		notaAlumno = prompt("ingrese Nota Alumno #" + i);
		notaAlumno = parseInt(notaAlumno);

		while(isNaN(notaAlumno)||notaAlumno<0||notaAlumno>10)
		{
			notaAlumno = prompt("Error. ingrese de nuevo Nota Alumno #" + i);
			notaAlumno = parseInt(notaAlumno);
		}

		acumuladorNotas = acumuladorNotas+notaAlumno;	

		sexoAlumno = prompt("ingrese Sexo Alumno #" + i +" f or m");

		while(sexoAlumno!= "m"  && sexoAlumno!="f")
		{
			sexoAlumno = prompt("Error. ingrese de nuevo Sexo Alumno #" + i);
			
		}


	

		if(i==1)
		{
			notaMasBaja=notaAlumno;
		}
		else
		{			

			if(notaAlumno<notaMasBaja)
			{
				notaMasBaja=notaAlumno;
			}


			if(sexoAlumno=="m" && notaAlumno>=6)
			{
				cantidadVaronesNotasAltas++;
			}
		}	

	}
	promedioNotas = acumuladorNotas /6;
	document.write("Promedio Notas:" + promedioNotas);
	document.write("<br>Nota mas baja:" + notaMasBaja);
	document.write("<br>cantidadVaronesNotasAltas:" + cantidadVaronesNotasAltas);

	//alert("Funciona 7-iteraciones");
	
}

