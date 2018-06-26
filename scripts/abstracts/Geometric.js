/**
 * Representa uma figura Geométrica
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @param {string} fill - Estilo do preencimento
 * @param {string} stroke - Estilo da borda
 * @constructor
 */
function Geometric(x, y, classename, w, h,  fill, stroke, r, z) {

    GameObject.call(this, undefined, x, y, classename, w, h, r, z);

    this.stroke = null;
    if(stroke != undefined)
        this.stroke = stroke;

    this.fill = null;
    if(fill != undefined)
        this.fill = fill;

    this.linew = 1;

}


Geometric.prototype = Object.create(GameObject.prototype);


/**
 * Configura o preenchimento do retângulo
 */
Geometric.prototype.setFill = function(fill) {
    this.fill = fill;
}
/**
 * Limpa  a configuração de preenchimento do retângulo
 */
Geometric.prototype.clearFill = function(fill) {
    this.fill = null;
}

/**
 * Configura a borda do retângulo
 */
Geometric.prototype.setStroke = function(stroke) {
    this.stroke = stroke;
}

/**
 * Limpa a configuração de borda do retângulo
 */
Geometric.prototype.clearStroke = function() {
    this.stroke = null;
}

/**
 * Configura o tamanho da linha da borda do retângulo
 */
Geometric.prototype.setLineWidth = function(width) {
    this.linew = width;
}

/**
 * Obtém o tamanho da linha da borda do retângulo
 */
Geometric.prototype.getLineWidth = function() {
    return this.linew;
}
