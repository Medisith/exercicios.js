alert("Agora iremos saber um pouco mais sobre a sua família!" +
       "\nFalaremos sobre a pessoa mais nova e a mais velha.")

let olderName = prompt("Qual o nome da pessoa mais velha?")

let olderAge = prompt("Qual a idade de " + olderName + " ?")

let youngerName = prompt("Qual o nome da pessoa mais nova?")

let youngerAge = prompt("Qual a idade de " + youngerName + " ?")

let ageDifference = olderAge - youngerAge

alert("A pessoa mais velha é: " + olderName + "\nA pessoa mais nova é: " + youngerName + "\nA diferença de idades é de " + ageDifference + " anos.")