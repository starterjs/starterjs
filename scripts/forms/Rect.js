/**
 * Representa um Retângulo
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @param {string} fill - Estilo do preencimento
 * @param {string} stroke - Estilo da borda
 * @constructor
 */
function Rect(x, y, w, h, fill, stroke) {
    Geometric.call(this, x, y, "rect", h, w, fill, stroke);
}


Rect.prototype = Object.create(Geometric.prototype);

/**
 * Imprime o estado atual do retâmgulo na tela
 * @extends Geometric
 */
Rect.prototype.print = function() {

    var centreX = this.x + (this.w / 2);
    var centreY = this.y + (this.h / 2);
    ctx.save();

    ctx.translate(this.x + (this.w / 2),this.y + (this.h / 2));
    ctx.rotate(this.r * Math.PI / 180);

    if(this.fill != null) {
        ctx.fillStyle = this.fill;
        ctx.fillRect(-(this.w/2), -(this.h/2), this.w, this.h);
    }

    if(this.stroke != null) {
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.linew;
        ctx.strokeRect(-(this.w / 2), -(this.h / 2), this.w, this.h);
    }

    ctx.restore();
    //ctx.rotate( (-this.r * Math.PI) / 180);
    //ctx.translate( - (this.x + (this.w / 2)), -(this.y + (this.h / 2)));

}

