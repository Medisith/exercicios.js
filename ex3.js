let lyDistance = prompt(`Qual a distância em anos luz que deseja converter?`)

let chosenOption = prompt(`Qual unidade deseja utilizar para a conversão?
Parsec - pc (Digite 1)
Unidade astronômica - AU (Digite 2)
Quilômetros - km (Digite 3)`)

switch (chosenOption) {
    case "1":
        unity = "Parsec"
        convertedValue = lyDistance * (0.306601);
        break;
    case "2":
        unity = "Unidade astronômica"
        convertedValue = lyDistance * (63241.1);
        break;
    case "3":
        unity = "Quilômetros"
        convertedValue = lyDistance * (9.5) * Math.pow(10, 12)
        break;
    default:
        alert(`Distância digitada: ${lyDistance} anos luz \nUnidade não identificada: Conversão fora do escopo.`)
}

alert(`Distância digitada: ${lyDistance} anos luz
Distancia convertida: ${convertedValue} ${unity}.`)