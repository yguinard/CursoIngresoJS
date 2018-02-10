function Mostrar()
{
	var largo;
	var ancho;
	var perimetroTerreno;
	var numeroDeLineas = 3; 

	largo = document.getElementById('alrgo').value;
	ancho = document.getElementById('ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	perimetroTerreno = (largo *2) + (ancho * 2);
	perimetroTerreno = numeroDeLineas * perimetroTerreno;
	alert("Metros de alambre Necesarios: " + perimetroTerreno);

}
