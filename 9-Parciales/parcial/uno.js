
function Mostrar()
{
	var baseCuadrado;
	var perimetroCuadrado;
	
	baseCuadrado = document.getElementById('laBase').value;
	baseCuadrado = parseInt(baseCuadrado);
	perimetroCuadrado = 4 * baseCuadrado ;

	alert("El perimetro del cuadrado es: " + perimetroCuadrado);
}
