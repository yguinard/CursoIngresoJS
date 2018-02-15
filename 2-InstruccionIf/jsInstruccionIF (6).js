function Mostrar()
{
//tomo la edad  
	var edad;
	edad = document.getElementById('edad').value;
/*
	if(edad<13)}{
		alert("niño");
	}
	if(edad>12 && edad <18){        //evitar signo adicionales como >=
		alert("adolecente");
	}
	if(edad>17){
		alert("mayor");
	}*/ //forma 1 de hacer el ejercicio performance bajo
	

	if(edad<13)
	{
		alert("niño");
	}
	else
	{
		if(edad>17)
		{
			alert("mayor");
		}else
		{
			alert("adolecente");
		}// forma 2 mejor perfomance
			
	}



}//FIN DE LA FUNCIÓN