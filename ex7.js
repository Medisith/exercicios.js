let spaceshipName = prompt('Insira o nome da sua espaçonave');
let velocity = 0
let chosenOption = ""

function optionValidation() {
    if (chosenOption == 1 || chosenOption == 2 || chosenOption == 3){
        let validation = 1
        return validation
    } else { 
        let validation = 0
        return validation
    }
} 

function showMenu() {
    chosenOption = prompt('Escolha uma opção: \n1- Acelerar a nave em 5km/s \n2- Diminuir a nave em 5km/s\n3- Sair');
}

function increaseVelocity(velocity, velocityVariable) {
    let newVelocity = velocity + velocityVariable
    console.log(newVelocity);
    return newVelocity

}

function decreaseVelocity(velocity, velocityVariable) {
    let newVelocity = velocity - velocityVariable
    return newVelocity
}

console.log('velocidade inicial: ' + velocity);

while(chosenOption != 3){
    showMenu();
    let validation = optionValidation();
    if (chosenOption == 1 && validation == 1) {
        velocity = increaseVelocity(velocity, 5);
        console.log('A nave agora está a ' + velocity + ' km/s');
        alert(spaceshipName + ' , você se encontra agora a ' + velocity + ' km/s')
    } else if (chosenOption == 2 && validation == 1) {
         if (velocity == 0) {
             alert('Não é possivel diminuir a velocidade da nave abaixo de 0km/s');
         } else {
             velocity = decreaseVelocity(velocity, 5);
             console.log('A nave agora está a ' + velocity + ' km/s');
             alert(spaceshipName + ' , você se encontra agora a ' + velocity + ' km/s')
         }
    } else if (validation == 0) {
        alert('Escolha uma opção válida');
    }
}