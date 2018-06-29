/**
 * Representa um elemento multidirecional
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 * @todo implementar o turnDown e Up além de transição automática
 */
function MultDirections(sprite, x, y, h, w) {

    GameObject.call(this, sprite, x,y,"mult", h,w);

    this.buttonup = null;
    this.buttondown = null;
    this.buttonleft = null;
    this.buttonright = null;

    this.aceleration = 0.05;
    this.desaceleration = 0.05;
    this.maxSpeed = 2;
    this.speed = 1;

    this.setDefaultControll();

}

MultDirections.prototype = Object.create(GameObject.prototype);

/*
*
*/
MultDirections.prototype.print = function (){

    ctx.save();

    var transx = this.x + this.w/2;
    var transy =  this.y + this.h/2;

    ctx.translate(transx, transy);

    ctx.rotate( (this.r ) * Math.PI /180);

    ctx.translate(-transx, -transy);

    ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);

    ctx.restore();


}


MultDirections.prototype.setControll = function (up, down, left, right) {
    this.buttondown = down;
    this.buttonleft = left;
    this.buttonright = right;
    this.buttonup = up;
}

MultDirections.prototype.setDefaultControll = function () {
    this.buttondown = "DOWN";
    this.buttonleft = "LEFT";
    this.buttonright = "RIGHT";
    this.buttonup = "UP";
}

MultDirections.prototype.update = function () {


    this.x += this.speed * Math.cos(this.r * Math.PI / 180);
    this.y += this.speed * Math.sin(this.r * Math.PI / 180);

    //modificar
    //deve ser um if aninhado
    /*se up{
       se !rigth e !left{
          this.moveUp();
       }else rigth{
           this.turnToRight();
       }else left{
           this.turnToLeft();
       }
    }
    */
    if( se.teclado.getKey( this.buttonup ) ) {

        if (!se.teclado.getKey(this.buttonright) && !se.teclado.getKey(this.buttonleft)) {
            this.moveUp();
        } else if (se.teclado.getKey(this.buttonright)) {
            this.turnToRight();
        }else{
            this.turnToLetf();
        }
    }

    if(se.teclado.getKey(this.buttondown)){
        if (!se.teclado.getKey(this.buttonright) && !se.teclado.getKey(this.buttonleft)) {
            this.moveDown();
        } else if (se.teclado.getKey(this.buttonright)) {
            this.turnToRight();
        }else{
            this.turnToLetf();
        }


    }

    if(se.teclado.getKey(this.buttonright) && !se.teclado.getKey(this.buttondown) && !se.teclado.getKey(this.buttonup)){
        this.moveRight()
    }

    if(se.teclado.getKey(this.buttonleft) && !se.teclado.getKey(this.buttondown) && !se.teclado.getKey(this.buttonup)){
        this.moveLeft();
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


MultDirections.prototype.moveUp = function () {

    if(this.getRotate() != 270)
        this.setRotate(270);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

MultDirections.prototype.moveDown = function () {

    if(this.getRotate() != 90)
        this.setRotate(90);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}


MultDirections.prototype.moveLeft = function () {

    if(this.getRotate() != 180)
        this.setRotate(180);


    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}

MultDirections.prototype.moveRight = function () {

    if(this.getRotate() != 360)
        this.setRotate(360);

    if(Math.abs( this.speed ) < this.maxSpeed) {
        this.speed += this.aceleration;
    }
}


MultDirections.prototype.turnToRight = function () {

    if((this.getRotate() >= 270) && (this.getRotate() < 325) ) {
        this.setRotate(this.getRotate() + 1);
    }else if((this.getRotate() <= 90) && (this.getRotate() > 45) ) {
        this.setRotate(this.getRotate() - 1);
    }

};

MultDirections.prototype.turnToLetf = function () {

    console.log("turn" + this.getRotate())
    if( (this.getRotate() <= 270) && (this.getRotate() > 235) ){
        this.setRotate(this.getRotate()-1);
    }else if( (this.getRotate() >= 90) && (this.getRotate() < 135) ) {
        this.setRotate(this.getRotate() + 1);
    }

};


/**
 * @todo implementar método
 */
MultDirections.prototype.turnToUp = function () {
  return null;
}


/**
 * @todo implementar método
 */
MultDirections.prototype.turnToDown = function () {
return null;
}