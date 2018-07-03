/**
 * Representa um texto estático
 * @extends GameObject
 * @param {string} text - Texto
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {string} color - Cor da font
 * @param {int} size - Tamanho da Font
 * @param {string} font - Nome da Font
 * @extends GameObject
 * @constructor
 */
function Text(text, x, y, color, size, font, fn) {

    GameObject.call(this,undefined, x,y, "gui");

    this.text = text;
    this.color = "#FFF";
    this.size = "20";
    this.font = "Arial";

    if(color != undefined)
        this.color = color;
    if(size != undefined)
        this.size = size;
    if(font != undefined)
        this.font = font;

    this.z = 100;

    this.callback = function () {};

    if(fn != undefined)
        this.callback = fn;

    this.textaling = "start";

}

Text.prototype = Object.create(GameObject.prototype);

/**
 * Imprime o texto
 * @method
 * @override
 */
Text.prototype.print = function() {
    ctx.textAlign=  this.textaling;
    ctx.fillStyle = this.color;
    ctx.font = this.size+"px "+this.font;
    ctx.fillText(this.text, this.x, this.y);
}

/**
 * Configura o texto
 * @method
 * @param {string} text - texto para ser exibido
 */
Text.prototype.setText = function(text) {
    this.text = text;

}

/**
 * Configura alinhamento
 * @method
 * @param {string} aling - pode ser start, center, end, left ou right
 */
Text.prototype.setAling = function(aling) {
    this.textaling = aling;
}

/**
 * Configura o alinhamento para o centro
 */
Text.prototype.toCenter = function() {
    this.textaling = "center";
}

/**
 * Configura o alinhamento para o final
 */
Text.prototype.toEnd = function() {
    this.textaling = "end";
}


/**
 * Configura o alinhamento para o início
 */
Text.prototype.toStart = function() {
    this.textaling = "start";
}

/**
 * Configura o alinhamento para a esquerda
 */
Text.prototype.toLeft = function() {
    this.textaling = "left";
}

/**
 * Configura o alinhamento para a direita
 */
Text.prototype.toRight = function() {
    this.textaling = "right";
}
