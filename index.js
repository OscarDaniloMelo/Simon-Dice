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
const ULTIMO_NIVEL = 50

class Juego {
    constructor() {
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500);
    }
    inicializar() {
        this.inicializar = this.inicializar.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toggleBtnEmpezar()
        this.nivel = 1
        this.imagenes = {
            logo, arthas, sylvanas,
            ilidan, thrall, jaina,
            tyrande, medivh, malfurion
        }
    }

    toggleBtnEmpezar(){
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        } else {
            btnEmpezar.classList.add('hide')
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 9))
    }

    siguienteNivel(){
        this.subNivel = 0
        // this.nombreAtributo = 'valor' para agregar atributos a nuestro objeto sin necesidad de inicializarlos en el contructor
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
    transformarImagenANumero(imagen){
        switch (imagen) {
            case 'logo':
                return 0 // cuando se tiene un return no es necesario colocar el break
            case 'arthas':
                return 1
            case 'ilidan':
                return 2
            case 'thrall':
                return 3
            case 'sylvanas':
                return 4
            case 'jaina':
                return 5
            case 'tyrande':
                return 6
            case 'medivh':
                return 7
            case 'malfurion':
                return 8
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
        setTimeout(() => this.apagarImagen(imagen), 350)
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

    eliminarEventosClick(){
        this.imagenes.logo.removeEventListener('click', this.elegirColor)
        this.imagenes.arthas.removeEventListener('click', this.elegirColor)
        this.imagenes.ilidan.removeEventListener('click', this.elegirColor)
        this.imagenes.thrall.removeEventListener('click', this.elegirColor)
        this.imagenes.sylvanas.removeEventListener('click', this.elegirColor)
        this.imagenes.jaina.removeEventListener('click', this.elegirColor)
        this.imagenes.tyrande.removeEventListener('click', this.elegirColor)
        this.imagenes.medivh.removeEventListener('click', this.elegirColor)
        this.imagenes.malfurion.removeEventListener('click', this.elegirColor)
    }

    elegirColor(evento){
        const nombreImagen = evento.target.dataset.imagen
        const numeroImagen = this.transformarImagenANumero(nombreImagen)
        this.iluminarImagen(nombreImagen)
        if ( numeroImagen === this.secuencia[this.subNivel]){
            this.subNivel++
            if (this.subNivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick()
                if (this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego()
                } else {
                    setTimeout(this.siguienteNivel, 1500)
                }
            }
        } else {
            this.perdioElJuego()
        }
    }

    ganoElJuego(){
        swal('FELICIDADES!', 'Has ganado el juego!', 'success', {button: 'Otra vez!'})
        .then(this.inicializar)
    }

    perdioElJuego(){
        swal('CIELOS!', 'Te ha faltado poco', 'error', {button: 'Intenta de nuevo'})
        .then(() => {
            this.eliminarEventosClick()
            this.inicializar()
        })
    }
}

function empezarJuego() {
   window.juego = new Juego()
}
