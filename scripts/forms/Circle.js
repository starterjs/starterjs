/**
 * Representa um Círculo
 * @extends Geometric
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} r - Raio do círculo
 * @constructor
 */
function Circle(x, y, r, fill, stroke) {

    Geometric.call(this, x, y, "rect", undefined, undefined, fill, stroke);
    this.radius = r;
}

Circle.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 */
Circle.prototype.print = function() {
    var centreX = this.x + (this.radius / 2);
    var centreY = this.y + (this.radius / 2);

    ctx.save();
    ctx.translate(centreX, centreY);
    ctx.rotate(this.r * Math.PI / 180);
    ctx.translate(-centreX, -centreY);

    ctx.beginPath();
    ctx.arc(this.x + this.radius/2, this.y + this.radius/2, this.radius, 0, 2*Math.PI);


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

