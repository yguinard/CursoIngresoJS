/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultadoSuma;

	numeroUno = parseInt(document.getElementById('numeroUno').value); //lower camel case Js
	numeroDos = parseInt(document.getElementById('numeroDos').value); // lower case primera en minuscula y nuevas palabras mayuscula Inicial
	resultadoSuma = numeroUno + numeroDos;

	alert("La suma es: " + resultadoSuma);
}

