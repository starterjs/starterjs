/**
 * Representa um elemento multidirecional
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function MultDirections(animations, x, y, h, w) {

    GameObject.call(this, animations, x,y,"mult", h,w);

    this.buttonup = null;
    this.buttondown = null;
    this.buttonleft = null;
    this.buttonright = null;

    this.aceleration = 0.05;
    this.desaceleration = 0.05;
    this.maxSpeed = 2;
    this.speed = 1;

    this.setDefaultControll();

    console.log(this.animation)

}

MultDirections.prototype = Object.create(GameObject.prototype);

/**
 * Exibe na tela o objeto MultiDirections
 * @method
 * @override
**/
MultDirections.prototype.print = function (){

    ctx.save();

    var transx = this.x + this.w/2;
    var transy =  this.y + this.h/2;

    ctx.translate(transx, transy);

    ctx.rotate( (this.r ) * Math.PI /180);

    ctx.translate(-transx, -transy);

    GameObject.prototype.print.call(this);

    ctx.restore();

}

/**
 * Configura o controle
 * @method
 * @param up - tecla para o comando up
 * @param down - tecla para o comando down
 * @param left - tecla para o comando left
 * @param right - tecla para o comando rigth
 */
MultDirections.prototype.setControll = function (up, down, left, right) {
    this.buttondown = down;
    this.buttonleft = left;
    this.buttonright = right;
    this.buttonup = up;
}

/**
 * Configura o Controle como padrão - Keys up, down, left and right
 * @method
 */
MultDirections.prototype.setDefaultControll = function () {
    this.buttondown = "DOWN";
    this.buttonleft = "LEFT";
    this.buttonright = "RIGHT";
    this.buttonup = "UP";
}

/**
 * Atualiza estado do objeto
 * @method
 * @override
 */
MultDirections.prototype.update = function () {


    this.x += this.speed * Math.cos(this.r * Math.PI / 180);
    this.y += this.speed * Math.sin(this.r * Math.PI / 180);

    //up
    if( se.teclado.getKey( this.buttonup ) ) {

        if (!se.teclado.getKey(this.buttonright) && !se.teclado.getKey(this.buttonleft)) {
            this.moveUp();
        } else if (se.teclado.getKey(this.buttonright)) {
            this.turnToRight();
        }else if (se.teclado.getKey(this.buttonleft)){
            this.turnToLetf();
        }else{
            return;
        }
    }

    //down
    if(se.teclado.getKey(this.buttondown)){

        if (!se.teclado.getKey(this.buttonright) && !se.teclado.getKey(this.buttonleft)) {
            this.moveDown();
        } else if (se.teclado.getKey(this.buttonright)) {
            this.turnToRight();
        }else if (se.teclado.getKey(this.buttonleft)){
            this.turnToLetf();
        }else{
            return;
        }


    }

   if(se.teclado.getKey(this.buttonright) ){

        if (!se.teclado.getKey(this.buttonup) && !se.teclado.getKey(this.buttondown)) {
            this.moveRight();
        } else if (se.teclado.getKey(this.buttondown)) {
            this.turnToDown();
        }else if (se.teclado.getKey(this.buttonup)){
            this.turnToUp();
        }else{
            return;
        }
    }

    if(se.teclado.getKey(this.buttonleft) ){
        if (!se.teclado.getKey(this.buttonup) && !se.teclado.getKey(this.buttondown)) {
            this.moveLeft();
        } else if (se.teclado.getKey(this.buttondown)) {
            this.turnToDown();
        }else if (se.teclado.getKey(this.buttonup)){
            this.turnToUp();
        }else{
            return;
        }
    }

    if ( (!se.teclado.ESQUERDA) && (!se.teclado.DIREITA) && (!se.teclado.CIMA)&& (!se.teclado.BAIXO)){
        if (this.speed >= 0)
            this.speed -= this.desaceleration;
        if (this.speed < 0)
            this.speed += this.desaceleration;

        if((this.speed < 0.1) && (this.speed > -0.1))
            this.speed = 0;
    }

};

/**
 * Move para a direção cima
 * @method
 */
MultDirections.prototype.moveUp = function () {

    if(this.getRotate() != 270)
        this.setRotate(270);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Move para a baixo
 * @method
 */
MultDirections.prototype.moveDown = function () {

    if(this.getRotate() != 90)
        this.setRotate(90);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Move para a esquerda
 * @method
 */
MultDirections.prototype.moveLeft = function () {

    if(this.getRotate() != 180)
        this.setRotate(180);


    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Move para a direita
 * @method
 */
MultDirections.prototype.moveRight = function () {

    if(this.getRotate() != 360)
        this.setRotate(360);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

/**
 * Rotaciona para a direita
 * @method
 */
MultDirections.prototype.turnToRight = function () {

    if((this.getRotate() >= 270) && (this.getRotate() < 315) ) {
        this.setRotate(this.getRotate() + 1);
    }else if((this.getRotate() <= 90) && (this.getRotate() > 45) ) {
        this.setRotate(this.getRotate() - 1);
    }

};

/**
 * Rotaciona para a esquerda
 * @method
 */
MultDirections.prototype.turnToLetf = function () {

    if( (this.getRotate() <= 270) && (this.getRotate() > 225) ){
        this.setRotate(this.getRotate()-1);
    }else if( (this.getRotate() >= 90) && (this.getRotate() < 135) ) {
        this.setRotate(this.getRotate() + 1);
    }

};


/**
 * Rotaciona para cima
 * @method
 */
MultDirections.prototype.turnToUp = function () {

    if(( this.getRotate() <= 360) && ( this.getRotate() > 315)) {
        this.setRotate(this.getRotate()-1);
    }else if((this.getRotate() >= 180) && ( this.getRotate() < 225)){
        this.setRotate(this.getRotate()+1);
    }
}


/**
 * Rotaciona para baixo
 * @method
 */
MultDirections.prototype.turnToDown = function () {
  console.log(this.getRotate())
    if(  (this.getRotate() == 360) || ( ( this.getRotate() > 0) ) && ( this.getRotate() < 45) )  {
       this.setRotate(this.getRotate()+1);
   }else if((this.getRotate() <= 180) && ( this.getRotate() >  135)){
        this.setRotate(this.getRotate()-1);
    }
}