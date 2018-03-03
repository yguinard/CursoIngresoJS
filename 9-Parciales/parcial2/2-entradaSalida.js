//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	var importeProducto;
	importeProducto=prompt("Ingrese el importe del producto");
	importeProducto = parseInt(importeProducto);
	document.getElementById('importe').value=importeProducto*1.21;
}

