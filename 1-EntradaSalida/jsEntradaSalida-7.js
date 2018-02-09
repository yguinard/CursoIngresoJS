/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numeroUno;
var numeroDos;
var resultado;

/* Porbando funcion capturar Numeros by ID
function capturar()
{

}
*/


function sumar()
{	
	numeroUno = document.getElementById('numeroUno').value;
	numeroUno = parseInt(numeroUno);

	//numeroUno = parseInt(document.getElementById('numeroUno').value); // toma un string y devuelve Integer

	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno + numeroDos;
	alert("La Suma es: " + resultado);
}


function restar()
{
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno - numeroDos;
	alert("La Resta es: " + resultado);
}

function multiplicar()
{ 
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno * numeroDos ;
	alert("La multiplicacion es: " + resultado);
}

function dividir()
{
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resultado = numeroUno / numeroDos;
	alert("La division es: "+ resultado);
}



