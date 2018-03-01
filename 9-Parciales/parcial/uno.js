
function Mostrar()
{
	var baseTriangulo;
	var alturaTriangulo;
	var perimetroTriangulo;
	var superficieTriangulo;
	
	baseTriangulo = document.getElementById('laBase').value;
	baseTriangulo = parseInt(baseTriangulo);
	alturaTriangulo = prompt("Ingrese alturaTriangulo:","0");
	alturaTriangulo = parseInt(alturaTriangulo);


	perimetroTriangulo = 3 * baseTriangulo ;
	//superficieTriangulo = (Math.sqrt(3)/4)*Math.pow(baseTriangulo, 2);
	superficieTriangulo = (baseTriangulo*alturaTriangulo)/2;
	document.write("<br>El perimetro del Triangulo es: " + perimetroTriangulo);
	document.write("<br>El Area del Triangulo es: " + superficieTriangulo);


}
