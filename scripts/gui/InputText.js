/**
 * Representa um elemento de entrada de texto pelo usuário
 * @extends GameObject
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {string} color - Cor da font
 * @param {int} size - Tamanho da Font
 * @param {string} font - Nome da Font
 * @constructor
 */
function InputText(x, y, color, size, font) {
    GameObject.call(this,undefined, x,y, "gui");
    this.text = "";
    this.color = "#FFF";
    this.size = "10";
    this.size = "Arial";
    this.isfocus = true;

    if(color != undefined)
        this.color = color;
    if(size != undefined)
        this.size = size
    if(font != undefined)
        this.font = font;

    this.textaling = "start";

    this.blocked = false;
    this.maxsize = 100;
    this.z = 100;

    this.start();


}

InputText.prototype = Object.create(GameObject.prototype);


/**
 * Inicia a captura do teclado - é chamado no construtor
 * @method
 */
InputText.prototype.start = function() {
    document.addEventListener('keydown', function(evento) {

        if(!this.blocked) {
            this.blocked = true;
            if (event.keyCode == 8) {
                this.text = this.text.slice(0, -1);
                return;
            } else if (((event.keyCode >= 65 ) && (event.keyCode < 90) ) || ((event.keyCode >= 97 ) && (event.keyCode < 122))){
                this.text += String.fromCharCode(evento.keyCode);
            }
        }
    }.bind(this));

    document.addEventListener('keyup', function(evento) {
        this.blocked = false;
    }.bind(this));
};

/**
 * Imprime o texto de entrada
 * @override
 */
InputText.prototype.print = function() {

    ctx.textAlign= this.textaling;
    ctx.fillStyle = this.color;
    ctx.font = this.size+"px "+this.font;
    ctx.fillText(this.text, this.x, this.y);

    ctx.beginPath();
    ctx.moveTo(this.x, this.y + 2);
    ctx.lineTo(this.x + this.maxsize, this.y + 2);

    ctx.stroke();
}

/**
 * Atribui um texto
 * @param {string} text - texto de entrada
 */
InputText.prototype.setText = function (text) {
    this.text = text;
}

/**
 * Estipula um tamanho máximo para o texto
 * @param {int} maxsize - tamanho máximo
 */
InputText.prototype.setMaxSize = function(maxsize) {
    this.maxsize = maxsize;
}


InputText.prototype.setText = function(text) {
    this.text = text;

}

InputText.prototype.setAling = function(aling) {
    this.textaling = aling;
}


InputText.prototype.toCenter = function(aling) {
    this.textaling = "center";
}


InputText.prototype.toEnd = function(aling) {
    this.textaling = "end";
}


InputText.prototype.toStart = function(aling) {
    this.textaling = "start";
}

InputText.prototype.toLeft = function(aling) {
    this.textaling = "left";
}


InputText.prototype.toRight = function(aling) {
    this.textaling = "right";
}

InputText.prototype.setMaxSize = function( maxsize ){
    this.maxsize = maxsize;
}
