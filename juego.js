  //1 es piedra, 2 es papel y 3 es tijera
  function aleatorio(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function jugar(jugada){
    let resultado = ""
    if(jugada==1){
            resultado ="piedra"
        }else if(jugada==2){
            resultado="papel"
        }else if(jugada==3){
            resultado="tijera"
        }else{
           resultado="No es una opcion, solo se puede de uno a tres"
    }
    return resultado
  }
      let jugador = 0
      let computador = 0
      let triunfos= 0
      let perdidas= 0

      while (triunfos < 3 && perdidas < 3){
        computador= aleatorio(1,3)
        jugador=prompt("Elije: 1-para piedra, 2-para papel y 3-para tijera")
        //alert("Elejiste " + jugador)

        alert("Computador elige: "+ jugar(computador))
        alert("Tu eliges: "+ jugar(jugador))
  //Empezar a jugar
        if(computador==jugador){
            alert("wooo, Hubo empate")
            }else if(jugador==1 && computador==3){
                alert("Felicitaciones, Ganaste")
                triunfos=triunfos+1
            }else if(jugador==2 && computador==1){
                alert("Felicitaciones, Ganaste")
                triunfos=triunfos+1
            }else if(jugador==3 && computador==2){
                alert("Felicitaciones, Ganaste")
                triunfos=triunfos+1
            }else{
                alert("Aaaaa, Perdiste")
                perdidas=perdidas+1
            }
      }
      alert("Ganaste " + triunfos + " Veces. Perdiste "+ perdidas+ " Veces.")