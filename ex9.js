class Spaceships {
    constructor(name, crewQuantity) {
      this.hitched = false
      this.doors = false
      this.name = name
      this.crewQuantity = crewQuantity
    }
    
    hitching() {
      this.hitched = true
      this.doors = true
    }
  }
  
  let spaceStation = new Array()
  
  function createSpaceship() {
    let name = prompt('Nome da nave')
    let crewQuantity = Number(prompt('Quantidade de tripulantes'))
    
    let newSpaceship = new Spaceships(name, crewQuantity)
    newSpaceship.hitching
    spaceStation.push(newSpaceship)
  }
  
  function showSpaceships(spaceStation) {
    let spaceships = ''
    spaceStation.forEach((spaceship, index) => {
      spaceships += `N ${(index + 1)} - Nave: ${spaceship.name} - Tripulação: ${spaceship.crewQuantity}
  `
    })
    alert(spaceships)
  }
  
  function menu() {
    let option
    while(option != 3) {
      option = prompt(`Sistema de acoplamento:
  1 - Acoplar nove
  2 - Mostrar naves acopladas
  3 - Sair`)
      switch(option) {
          case '1':
            createSpaceship()
            break
          case '2':
            showSpaceships(spaceStation)
            break
          case '3':
            break
          default:
            alert('Comando inválido')
      }  
    }
  }
  
  menu()