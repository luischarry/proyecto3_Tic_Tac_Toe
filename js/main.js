
let turno = "X"
let jugando = true
let fichasX = 3
let fichasO = 3
let contadorX = 1
let contadorO = 1

const boxlist = document.querySelectorAll('.tablero .col')
let movesArray = new Array(9).fill(null)
boxlist.forEach((box, index) => {
    box.addEventListener('click', () => {
        let info = (msg) => {
            document.getElementById('info').innerHTML = msg
        }
        const result = movesArray.filter(turno => turno)
        if (jugando == true) {
            if (fichasX > 0 || fichasO > 0) { //comprobamos la cantidad de fichas para poder jugar
                if (movesArray[index] === null) {
                    movesArray[index] = turno
                    box.innerHTML = turno;
                    box.classList.add('ocupado');
                    //comprobar casillas 
                    if (movesArray[0] == movesArray[1] && movesArray[1] == movesArray[2] && movesArray[0] != null) {
                        jugando = false
                        info('GANADOR ' + turno)
                        //console.log('GANADOR ' + turno)

                    } else if (movesArray[3] == movesArray[4] && movesArray[4] == movesArray[5] && movesArray[3] != null) {

                        jugando = false
                        info('GANADOR ' + turno)

                    } else if (movesArray[3] == movesArray[4] && movesArray[4] == movesArray[5] && movesArray[3] != null) {

                        jugando = false
                        info('GANADOR ' + turno)

                    } else if (movesArray[6] == movesArray[7] && movesArray[7] == movesArray[8] && movesArray[6] != null) {

                        jugando = false
                        info('GANADOR ' + turno)

                    } else if (movesArray[0] == movesArray[3] && movesArray[3] == movesArray[6] && movesArray[0] != null) {

                        jugando = false
                        info('GANADOR ' + turno)

                    } else if (movesArray[1] == movesArray[4] && movesArray[4] == movesArray[7] && movesArray[1] != null) {

                        jugando = false
                        info('GANADOR ' + turno)

                    } else if (movesArray[2] == movesArray[5] && movesArray[5] == movesArray[8] && movesArray[2] != null) {

                        jugando = false
                        info('GANADOR ' + turno)

                    } else if (movesArray[0] == movesArray[4] && movesArray[4] == movesArray[8] && movesArray[0] != null) {

                        jugando = false
                        info('GANADOR ' + turno)

                    } else if (movesArray[2] == movesArray[4] && movesArray[4] == movesArray[6] && movesArray[2] != null) {

                        jugando = false
                        info('GANADOR ' + turno)
                    }
                    //desccontamos ficha y cambiamos el turno
                    if (turno == 'X' && jugando == true) {
                        fichasX--
                        console.log('fichas x' + fichasX)
                        turno = 'O'
                        info('Es el turno de ' + turno)
                    } else if (jugando == true) {
                        fichasO--
                        console.log('fichas x' + fichasO)
                        turno = 'X'
                        info('Es el turno de ' + turno)
                    }
                    //contador de partida ganada 
                    if (jugando == false && turno == 'X') {
                        document.getElementById('contador1').innerHTML = contadorX
                        i++
                    } else if (jugando == false && turno == 'O') {
                        document.getElementById('contador2').innerHTML = contadorO
                        i1++
                    }
                } else { console.log('casilla ocupada') }

            } else {
                info('TODAS LAS FICHAS EN EL TABLERO ' + turno + ' QUITA FICHA')
                if (turno === "X") {
                    if (movesArray[index] == "X") {
                        movesArray[index] = null
                        box.innerHTML = '';
                        fichasX++
                        console.log(fichasX)
                    }
                } else if (turno === "O") {
                    if (movesArray[index] == "O") {
                        movesArray[index] = null
                        box.innerHTML = '';
                        fichasO++
                        console.log(fichasO)
                    }
                }
            }
        } //console.log(movesArray)//el array con los click guardados
    })
})
//reinicia tablero
const reset = () => {
    document.querySelectorAll(".col").forEach((casilla) => {
        casilla.innerHTML = ""
        movesArray = new Array(9).fill(null)
        fichasX = 3
        fichasO = 3
        jugando = true
        turno = "X"
        document.getElementById('info').innerHTML = 'Comienza X'
    })
}