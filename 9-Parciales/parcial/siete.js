/*
Enunciado:
Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas 
(validar entre 0 y 10) y el sexo (validar el sexo “f” o “m”) de 100 alumnos, 
informar por alert: a) el promedio de las notas totales. b) la nota más baja. c) 
la cantidad de varones que su nota haya sido mayor o igual a 6.
*/
function Mostrar()
{

	var notaDigitada;
	var sexoDigitado;
	var promedioNotas;
	var acumuladorNotas=0;
	var cantidadVaronesNotaMayor=0;
	var notaMasBaja;
	var NotaMasAlta;
	var cantidadDeAlumnos=0;

	while(cantidadDeAlumnos<10)
	{
		cantidadDeAlumnos++;

		notaDigitada = prompt("Ingrese Nota del Alumno #" + cantidadDeAlumnos);
		notaDigitada = parseInt(notaDigitada);

		while(isNaN(notaDigitada)|| notaDigitada<0|| notaDigitada>10)
		{
			notaDigitada = prompt("Error!Ingrese Nota del Alumno #" + cantidadDeAlumnos);
			notaDigitada = parseInt(notaDigitada);
		}

		sexoDigitado = prompt("Digite el Sexo del Alumno f o m");

		while(sexoDigitado!='f' && sexoDigitado!='m')
		{
			sexoDigitado = prompt("Error!. Digite el Sexo del Alumno f o m");
		}

		acumuladorNotas = acumuladorNotas + notaDigitada;
		
		if(sexoDigitado=='m' && notaDigitada>=6)
		{
			cantidadVaronesNotaMayor++;
		}

		if(cantidadDeAlumnos==1)
		{
			notaMasBaja = notaDigitada;
			NotaMasAlta = notaDigitada;
		}

		if(notaDigitada<notaMasBaja)
		{
			notaMasBaja=notaDigitada;
		}

		if(notaDigitada>NotaMasAlta)
		{
			NotaMasAlta=notaDigitada;
		}

	}


	promedioNotas=acumuladorNotas/10;

alert("Promedio de notas Totales: " +promedioNotas+ "  Nota mas Baja: " + notaMasBaja + "  Nota mas Alta: "+ NotaMasAlta + " Ctd de Varones> 6: " +cantidadVaronesNotaMayor);
}
