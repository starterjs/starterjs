/**
 * Representa um Retângulo
 * @extends Geometric
 * @param {string} sprite - Nome do sprite do botão
 * @param {array} p1 -  Ponto 1
 * @param {array} p2 - Ponto 2
 * @param {array} p3 - Ponto 3
 * @constructor
 */
function Triangle(p1, p2, p3, fill, stroke) {
    Geometric.call(this, p1[0], p1[1], "triangle", undefined, undefined, fill, stroke);
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
}

Triangle.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 * @override
 */
Triangle.prototype.print = function() {

    var centerX = (this.p1[0] + this.p2[0]+this.p3[0])/3;
    var centerY = (this.p1[1] + this.p2[1]+this.p3[1])/3;

    ctx.fillRect(centerX, centerY,10,10)

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(this.r*Math.PI/180);
    ctx.translate(-centerX, - centerY);

    ctx.beginPath();
    ctx.moveTo(this.p1[0],this.p1[1]);
    ctx.lineTo(this.p2[0], this.p2[1]);
    ctx.lineTo(this.p3[0], this.p3[1]);
    ctx.lineTo(this.p1[0], this.p1[1]);

    if(this.fill != null) {
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    if(this.stroke != null) {
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
    }

    ctx.restore();





}


/**
 * Translada o objeto
 * @param {int} x - Quantidade de pixels na horizontal
 * @param {int} y - Quantidade de pixels na vertical
 * @override
 */
Triangle.prototype.translate = function(x, y) {
    this.p1[0]+=x;
    this.p2[0]+=x;
    this.p3[0]+=x;

    this.p1[1]+=y;
    this.p2[1]+=y;
    this.p3[1]+=y;
}