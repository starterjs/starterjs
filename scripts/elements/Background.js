/**
 * Representa um background
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do background
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function Background(sprite, x, y, h, w) {

    if(x == undefined)
         x= 0;
    if(y == undefined)
        y=0;
    if(h == undefined)
        h = canvas.height;
    if(w == undefined)
        w = canvas.width;

    GameObject.call(this, sprite, x, y, "background", h, w);
    this.z = 0;
}


//fazendo herança
Background.prototype = Object.create(GameObject.prototype);

/**
 * Imprime o background na tela
 */
Background.prototype.print = function(ctx) {
    var ptrn = ctx.createPattern(this.animation[0].getCurrentSprite(), 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, this.w, this.h);
}
