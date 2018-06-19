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
 * @override
 */
Text.prototype.print = function() {
    ctx.textAlign=  this.textaling;
    ctx.fillStyle = this.color;
    ctx.font = this.size+"px "+this.font;
    ctx.fillText(this.text, this.x, this.y);
}

Text.prototype.setText = function(text) {
    this.text = text;

}

Text.prototype.setAling = function(aling) {
    this.textaling = aling;
}


Text.prototype.toCenter = function(aling) {
    this.textaling = "center";
}


Text.prototype.toEnd = function(aling) {
    this.textaling = "end";
}


Text.prototype.toStart = function(aling) {
    this.textaling = "start";
}

Text.prototype.toLeft = function(aling) {
    this.textaling = "left";
}


Text.prototype.toRight = function(aling) {
    this.textaling = "right";
}
