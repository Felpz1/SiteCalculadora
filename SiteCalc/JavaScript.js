function JavaScript()
{
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var result;
 var texto='';

 if(document.getElementById('soma').checked)
  texto = soma(num1, num2);
 else if(document.getElementById('subtracao').checked)
  texto = subtracao(num1, num2);
 else if(document.getElementById('multiplicacao').checked)
  texto = multiplicacao(num1, num2);
 else if(document.getElementById('divisao').checked)
  texto = divisao(num1, num2);
document.formulario.resultado.value = texto;

}

function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}