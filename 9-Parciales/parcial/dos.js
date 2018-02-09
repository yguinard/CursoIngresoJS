
function Mostrar()
{
  var valorfinal;
  var porcentajeIva=21;
  var valorInicial;

  valorInicial = prompt("Ingrese importe:","0");
  valorInicial = parseInt(valorInicial);
  valorfinal = valorInicial + (valorInicial*porcentajeIva/100);
  
  document.getElementById('importeFinal').value = valorfinal;
}
