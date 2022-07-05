let pilotName = prompt("Qual o seu nome, piloto?")
let velocity = ""
let choosenVelocity = prompt("Qual velocidade você deseja imprimir?")

let velocityConfirm = confirm("Você deseja acelerar a nave para " + choosenVelocity + "km/s?")

let newVelocity = velocity + choosenVelocity

if(newVelocity <=0) {
  alert("Nave parada, considere aumentar a velocidade!")
} else if(newVelocity <= 40) { 
  alert("Você está devagar, podemos aumentar mais!")
} else if(newVelocity >=40 && newVelocity <=80) {
  alert("Parece uma boa velocidade para menter!")
} else if(newVelocity >=80 && newVelocity <=100) {
  alert("Velocidade alta, considere diminuir!!!")
} else if(newVelocity >=100) {
  alert("Velocidade perigosa, controle automático forçado!")
}

alert(pilotName + ", a velocidade da nave é " + newVelocity + " km/s.")