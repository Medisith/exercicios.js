index.js

const planet = require('./planet')
const info = require('./info');

info.planets.push(new planet('Terra', 1));
info.planets.push(new planet('Mercúrio', 0.39));
info.planets.push(new planet('Vênus', 0.72));
info.planets.push(new planet('Marte', 1.52));
info.planets.push(new planet('Júpiter', 5.2));
info.planets.push(new planet('Saturno', 9.53));
info.planets.push(new planet('Urano', 19.1));
info.planets.push(new planet('Neturno', 30));

console.log(info.convert())

planet.js

class planet {
    constructor(name, AU) {
        this.name = name;
        this.AU = AU;
    }
}

module.exports = planet;

info.js

module.exports = {
    central_star: 'Sol',
    km: '149597870.69',
    planets: [],
    
    operation(AU) {
        return (AU * parseFloat(this.km)).toFixed(2)
    },

    convert() {
        this.planets.forEach(element => {
            console.log(`Planeta: ${element.name}, AU: ${element.AU}, km: ${this.operation(element.AU)}`)
        });
    }
}