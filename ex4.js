let nomeNave = prompt("Digite o nome da nave: ")

let resultadoDobra = 0

let opcao = prompt("Deseja entrar na dobra: ? \n 1-Sim\n 2-Não")


while(opcao == "1"){
    resultadoDobra += 1
    let opcao = prompt("Ok! Deseja entrar em mais uma borda espacial?\nDigite 1 para sim e 2 para não:")
  if(opcao == "2") {
        confirm("Fim! A Nave " + nomeNave + " entrou em " + resultadoDobra + " dobra(s) espacial(is).")
        break
    }
  }