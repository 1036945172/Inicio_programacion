function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascotas')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador )
}
function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML='Hipodoge' 
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML='Capipepo'
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML='Ratigueya'
    }else{
        alert('Selecciona una mascota')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let numeroAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
    if(numeroAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if(numeroAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }

}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)

}
window.addEventListener('load',iniciarJuego)