function reducespeed(velocity, print) {
    let slowdown = 20
    while(velocity > 0 ) {
        print(velocity)
        velocity -= slowdown
    }
    alert("Ateção!!!\nNave parada. As comportas podem ser abertas apartir desde momento!")   
}
let shipspeed = 150
reducespeed(shipspeed, function(velocity) {
    console.log("Velocidade atual: " + velocity + " Km/s.")
})