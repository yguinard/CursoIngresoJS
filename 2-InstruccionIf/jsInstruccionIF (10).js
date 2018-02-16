function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
		var notaRandom;

		notaRandom = Math.random() * 10 + 1; 
		notaRandom = Math.floor(notaRandom);
		//alert(notaRandom);

		if(notaRandom<4)
		{
			alert("Nota: " + notaRandom + " Vamos, la proxima se puede.");
		}
		else 
		{
			if(notaRandom<9)
			{
				alert("Nota: " + notaRandom + " APROBÓ.");	
			}
			else
			{
				alert("Nota: " + notaRandom + " EXCELENTE.");	
			}
		}	
		
}//FIN DE LA FUNCIÓN