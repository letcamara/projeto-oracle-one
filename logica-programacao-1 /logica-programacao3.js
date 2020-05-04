const numeroPensado = 25
const numeroSort = sorteia(50)

function sorteia(num){
  const numMax = Math.floor(Math.random() * num)
  return numMax
}

if(numeroPensado === numeroSort){
  return console.log(`Número sorteado: ${numeroSort} - Parabéns, você acertou`)
} else {
    if(numeroPensado > numeroSort) {
       return console.log(`Número sorteado: ${numeroSort} - O número pensado é maior`)
    } 
    return console.log(`Número sorteado: ${numeroSort} - O número pensado é menor`)
}


