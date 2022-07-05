let nomeNave = prompt("Digite o nome da espaçonave")

let caracter = prompt("Qual caracter deseja substituir ?")

let newcaracter = prompt("Por qual caractere deseja substituir ?")

let NewSpaceship = ""

for(let i = 0; i < nomeNave.length; i++){
  if(nomeNave[i] == caracter){
    NewSpaceship += newcaracter
  }else{
      NewSpaceship += nomeNave[i]
  }
}

console.log("O novo nome da nave é: " + NewSpaceship)