const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
    constructor() {
        this.inicializar()
    }
    inicializar() {
        btnEmpezar.classList.add('hide')
    }
}

function empezarJuego() {
   var juego = new Juego()
}
