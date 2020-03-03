const btnEmpezar = document.getElementById('btnEmpezar')
const logo = document.getElementById('logo')
const arthas = document.getElementById('arthas')
const sylvanas = document.getElementById('sylvanas')
const ilidan = document.getElementById('ilidan')
const thrall = document.getElementById('thrall')
const jaina = document.getElementById('jaina')
const tyrande = document.getElementById('tyrande')
const medivh = document.getElementById('medivh')
const malfurion = document.getElementById('malfurion')

class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }
    inicializar() {
        this.elegirColor = this.elegirColor.bind(this)
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.imagenes = {
            logo, arthas, sylvanas,
            ilidan, thrall, jaina,
            tyrande, medivh, malfurion
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(50).fill(0).map(n => Math.floor(Math.random() * 9))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }

    transformarNumeroAImagen(numero){
        switch (numero) {
            case 0:
                return 'logo' // cuando se tiene un return no es necesario colocar el break
            case 1:
                return 'arthas'
            case 2:
                return 'ilidan'
            case 3:
                return 'thrall'
            case 4:
                return 'sylvanas'
            case 5:
                return 'jaina'
            case 6:
                return 'tyrande'
            case 7:
                return 'medivh'
            case 8:
                return 'malfurion'
        }
    }

    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++){
            const imagen = this.transformarNumeroAImagen(this.secuencia[i])
            setTimeout(() => this.iluminarImagen(imagen), 1000 * i);
        }
    }

    iluminarImagen(imagen){
        this.imagenes[imagen].classList.add('action')
        setTimeout(() => this.apagarImagen(imagen), 500)
    }

    apagarImagen(imagen){
        this.imagenes[imagen].classList.remove('action')
    }

    agregarEventosClick(){
        this.imagenes.logo.addEventListener('click', this.elegirColor)
        this.imagenes.arthas.addEventListener('click', this.elegirColor)
        this.imagenes.ilidan.addEventListener('click', this.elegirColor)
        this.imagenes.thrall.addEventListener('click', this.elegirColor)
        this.imagenes.sylvanas.addEventListener('click', this.elegirColor)
        this.imagenes.jaina.addEventListener('click', this.elegirColor)
        this.imagenes.tyrande.addEventListener('click', this.elegirColor)
        this.imagenes.medivh.addEventListener('click', this.elegirColor)
        this.imagenes.malfurion.addEventListener('click', this.elegirColor)
    }

    elegirColor(evento){
        console.log(this)
    }
}

function empezarJuego() {
   window.juego = new Juego()
}
