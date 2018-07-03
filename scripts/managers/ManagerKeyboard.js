/**
 * Essa classe é responsávl pela entrada de teclado
 * @class
 */
function ManagerInputs() {
    /**
     * Flag da tecla direita
     * @type {boolean}
     */
    this.DIREITA = false;
    /**
     * Flag da tecla esquerda
     * @type {boolean}
     */
    this.ESQUERDA = false;
    /**
     * Flag da tecla cima
     * @type {boolean}
     */
    this.CIMA  = false;
    /**
     * Flag da tecla baixo
     * @type {boolean}
     */
    this.BAIXO = false;
    /**
     * Flag da tecla espaço
     * @type {boolean}
     */
    this.ESPACO =  false;

    this.start();
}

/**
 * Inicia a captura do teclado
 * @method
 */
ManagerInputs.prototype.start = function () {

    document.addEventListener('keydown', function(evento) {
        if (evento.keyCode == 38) { // Seta para esquerda
            this.CIMA = true;
        }

        if (evento.keyCode == 40) { // Seta para esquerda
            this.BAIXO  = true;
        }

        if (evento.keyCode == 37) { // Seta para esquerda
           this.ESQUERDA  = true;
        }

        if (evento.keyCode == 39) { // Seta para direita
            this.DIREITA = true;
        }

        if (evento.keyCode == 32) { // Seta para direita
            this.ESPACO  = true;
        }

    }.bind(this))


    document.addEventListener('keyup', function(evento) {

            if (evento.keyCode == 38) { // Seta para esquerda
                this.CIMA = false;
            }

            if (evento.keyCode == 40) { // Seta para esquerda
                this.BAIXO  = false;
            }

            if (evento.keyCode == 37) { // Seta para esquerda
                this.ESQUERDA = false;
            }

            if (evento.keyCode == 39) { // Seta para direita
                this.DIREITA  = false;
            }

        if (evento.keyCode == 32) { // Seta para direita
            this.ESPACO  = false;
        }

        }.bind(this))

}

/**
 * Verifica se a tecla está ou não pressionada
 * @method
 * @param {string} key - tecla
 * @return {boolean} true se a tecla está pressionada
 */
ManagerInputs.prototype.getKey = function (key) {


    if (key == "UP") {
        return this.CIMA;
    } else if (key == "DOWN") {
        return this.BAIXO;
    } else if (key == "RIGHT") {
        return this.DIREITA;
    }
    if (key == "LEFT") {
        return this.ESQUERDA;
    }

}