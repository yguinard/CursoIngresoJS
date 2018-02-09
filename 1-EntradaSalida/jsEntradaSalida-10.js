/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var valorProducto;
	var porcentajeDescuento = 25; //Se puede simplificar operaciones con 0.25 = 25%
	var resultadoValorConDescuento;

	valorProducto = document.getElementById('importe').value;
	valorProducto = parseInt(valorProducto);
	resultadoValorConDescuento = valorProducto - (valorProducto*porcentajeDescuento/100);
	//alert(resultadoValorConDescuento);
	document.getElementById('resultado').value=resultadoValorConDescuento;

}
