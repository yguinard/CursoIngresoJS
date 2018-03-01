
function Mostrar()
{
  	var valorfinal;
	var porcentajeDescuento;
 	var valorInicial=0;
	
	
	var respuesta='si';

	while(true)
	{
		
		porcentajeDescuento = prompt("Ingrese % de Descuento 0-100:","0");
		porcentajeDescuento = parseInt(porcentajeDescuento);
		//alert(isNaN(numero));
		while(isNaN(porcentajeDescuento)||porcentajeDescuento<0||porcentajeDescuento>100)
		{
			porcentajeDescuento = prompt("Error!, Ingrese % de Descuento 0-100:","0");
			porcentajeDescuento = parseInt(porcentajeDescuento);
			break;
		}

		valorInicial = prompt("Ingrese importe Producto:","0");
		valorInicial = parseInt(valorInicial);
		//alert(isNaN(numero));
		while(isNaN(valorInicial))
		{
			valorInicial = prompt("Error,Ingrese importe Producto:","0");
			valorInicial = parseInt(valorInicial);
			break;
		}

		break;
		
	}	

  valorfinal = valorInicial - (valorInicial*porcentajeDescuento/100);

  document.getElementById('importeFinal').value = valorfinal;
}


