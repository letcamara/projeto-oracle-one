const loginCadastrado = "alura";
const senhaCadastrada = "alura321";

let maximoTentativa = 3
let tentativaAtual = 1

while(tentativaAtual <= maximoTentativa){
  const loginInformado = prompt("Informe seu login");
  const senhaInformada = prompt("Informe sua senha");

  if(loginCadastrado === loginInformado && senhaCadastrada === senhaInformada){
    alert("Bem-vindo ao sistema " + loginInformado);
  }
  else {
    if(tentativaAtual === maximoTentativa){
      alert(`Tentativa: ${tentativaAtual}/ ${maximoTentativa}. Conta bloqueada`);
    } 
    else{
      alert(`Tentativas: ${tentativaAtual}/ ${maximoTentativa}. Login inválido. Tente novamente`);
    }
  }
  tentativaAtual++
}



