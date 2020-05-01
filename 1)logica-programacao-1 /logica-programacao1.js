// document.write -> Recomendo o uso do Browser
const idade1 = 35
const idade2 = 64

function paragrafo(){
  document.write('<br>')
}

function calculaIdade(num1, num2){
  const valor = num2 - num1
  return valor
}

function frase(){
  const diffIdade = calculaIdade(idade1, idade2)
  document.write(`Nossa diferença de idade é ${diffIdade}` )
  paragrafo()
}

frase()