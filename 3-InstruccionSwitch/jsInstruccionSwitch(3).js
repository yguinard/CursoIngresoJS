/*Enunciado
al seleccionar un mes informar. 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días"
*/
function Mostrar()
{
//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;
	//alert (mesDelAño);
	switch(mesDelAño)
	{
		case "Febrero":
		{
			alert(mesDelAño + " Este mes no tiene más de 29 días.");
			break;
		}
		
		default:
		{
			alert(mesDelAño + " Este mes tiene 30 o más días.");
		}
	}		
	


}//FIN DE LA FUNCIÓN