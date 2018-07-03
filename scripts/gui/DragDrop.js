/**
 * Representa um elemento dragdrop
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function DragDrop(sprite, x, y, callback, w, h){
    this.classename = "dragdrop";
    GameObject.call(this, sprite, x, y, "dragdrop", h,w);
    if(callback!= undefined)
        this.targetFunction = callback;
    else
        this.targetFunction = function (){ console.warn("esse objeto não possui uma targetFunction!")};

    this.dragdroped = false;
    this.xoffset = 0;
    this.yoffset = 0;
}


DragDrop.prototype = Object.create(GameObject.prototype);

/**
 * Atualiza o dragdrop
 * @method
 */
DragDrop.prototype.print = function(){

    if(this.dragdroped){
        var alfa = ctx.globalAlpha;
        ctx.globalAlpha = 0.4;
        this.x = se.mmouse.getMouseX()+ this.xoffset;
        this.y = se.mmouse.getMouseY()+ this.yoffset;
        ctx.drawImage(this.sprite, this.x , this.y , this.w, this.h);
        ctx.globalAlpha = alfa;
    }else{
        ctx.drawImage(this.sprite, this.x , this.y , this.w, this.h);
    }
}

/**
 * Controla o modo dragdrop, conforme o clique do mouse
 * @method
 */
DragDrop.prototype.click = function(){

    if(this.dragdroped){
        this.dragdroped  = false;
        this.xoffset = 0;
        this.yoffset = 0;

    }else{
        //
        this.dragdroped = true;
        this.xoffset = this.x - se.mmouse.getMouseX();
        this.yoffset = this.y - se.mmouse.getMouseY();
    }


}

/* Função alvo do dragdrop, chamada por algum evento
* @method
*/
DragDrop.prototype.target = function(){
    this.targetFunction();
}

/* Atribue a função à função alvo do dragdrop
* @method
* @param {function} fn - função alvo
*/
DragDrop.prototype.setTarget = function(fn){
    this.targetFunction = fn;
}
