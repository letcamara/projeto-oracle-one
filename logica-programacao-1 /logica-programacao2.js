const data = new Date()
const chegadaAoBrasil = 1500
const idadeMedia = 28
const ano = data.getFullYear()

function diffGeracoes(){
  return ano - chegadaAoBrasil
}

function mediaGeracoes(){
  const resultadoGeracoes = diffGeracoes() / idadeMedia
  return Math.floor(resultadoGeracoes)
} 

function pulaLinha(){
  document.write('<br>')
}

function mostraFrase(frase){
  document.write(frase)
  pulaLinha()
}

mostraFrase(`Se passaram, aproximadamente, ${mediaGeracoes()} gerações`)