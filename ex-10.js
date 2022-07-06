class spaceship {
    constructor(name, crew){
        this.name = name
        this.crew = crew
        this.velocity = 0
    }

    static get deceleration(){
        return 0.17
    }

    set acelerar(acceleration){
        this.velocity += (acceleration * (1 - spaceship.deceleration))
    }
    
    get getInfo(){
        return this.info
    }
}

class battleSpaceship extends spaceship{
    constructor(name, crew, weapons){
        super(name, crew)
        this.weapons = weapons
        this.info = 'batalha'
    }
}

class transportSpaceship extends spaceship{
    constructor(name, crew, slot){
        super(name, crew)
        this.slot = slot
        this.info = 'transporte'
    }
}

class discoverySpaceship extends spaceship{
    constructor(name, crew, equipments){
        super(name, crew)
        this.equipments = equipments
        this.info = 'descoberta'
    }
}


function createSpaceship() {
    let name = prompt('Informe o nome da nave:')
    let crews = prompt('Informe a quantidade de tripulantes:')
    let type
    while(type != 'batalha' && type != 'transporte'){
        type = prompt('Informe o tipo da nave:').toLowerCase()

        switch (type) {
            case 'batalha':
                let weapons = prompt('Quantas armas a nave de batalha tem disponíveis?')
                return new battleSpaceship(name, crews, weapons)
            case 'transporte':
                let slot = prompt('Quantidade de lugares que a nave comporta:')
                return new transportSpaceship(name, crews, slot)
            case 'descoberta':
                let equipments = prompt('Quantidade de equipamentos da nave:')
                return new discoverySpaceship(name, crews, equipments)
            default:
                alert('Este tipo de nave não está disponível, tipos disponíveis:\n\n1- Batalha\n2- Transporte\n3- Descoberta')
                break;
        }
    }
}

var nave = new createSpaceship()

function menu() {
    let option
    while (option != 3) {
        option = prompt('O que você deseja fazer?\n1- Acelerar a nave\n2- Trocar a Nave\n3- Imprimir e sair')

        switch (option) {
            case '1':
                let acceleration = Number(prompt('Velocidade para acelerar:'))
                nave.acelerar = acceleration;
                alert('Velocidade atual da nave: '+nave.velocity)
                break;
            case '2':
                nave = new createSpaceship()
                break;
            case '3':
                let info = nave.getInfo
                switch (info) {
                    case 'batalha':
                        alert('Nome: '+nave.name+'\nQuantidade de tripulantes: '+nave.crew+'\nVelocidade atual: '+nave.velocity+'km/s\nQuantidade de armas: '+nave.weapons)
                        break;
                    case 'transporte':
                        alert('Nome: '+nave.name+'\nQuantidade de tripulantes: '+nave.crew+'\nVelocidade atual: '+nave.velocity+'km/s\nQuantidade de lugares: '+nave.slot)
                        break;
                    case 'descoberta':
                        alert('Nome: '+nave.name+'\nQuantidade de tripulantes: '+nave.crew+'\nVelocidade atual: '+nave.velocity+'km/s\nQuantidade de equipamentos: '+nave.equipments)
                        break;
                    default:
                        alert('Parou de funcionar.')
                        break;
                }
                break;
            default:
                alert('Esta opção não existe.')
                break;
        }
    }
}

menu()
