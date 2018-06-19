/**
 * Representa um carro top view
 * @todo implementar essa classe
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x -  Coordenada x do texto
 * @param {int} y - Coordenada y do texto
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function Car(sprite, x, y, h, w) {
    GameObject.call(this, sprite, x,y,"car", h,w);


    this.buttonup = null;
    this.buttondown = null;
    this.buttonleft = null;
    this.buttonright = null;

    this.aceleration = 0.1;
    this.desaceleration = 0.05;
    this.maxSpeed = 4;
    this.speed = 1;

}

Car.prototype = Object.create(GameObject.prototype);

Car.prototype.print = function (){


    ctx.save();

    var transx = this.x + this.w/2;
    var transy =  this.y + this.h/2;

    ctx.translate(transx, transy);

    ctx.rotate( (this.r ) * Math.PI /180);

    ctx.translate(-transx, -transy);

    ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);

    ctx.restore();


}


Car.prototype.setControll = function (up, down, left, right) {
    this.buttondown = down;
    this.buttonleft = left;
    this.buttonright = right;
    this.buttonup = up;
}

Car.prototype.setDefaultControll = function () {
    this.buttondown = "DOWN";
    this.buttonleft = "LEFT";
    this.buttonright = "RIGHT";
    this.buttonup = "UP";
}

Car.prototype.update = function () {


    this.x += this.speed * Math.cos(this.r * Math.PI / 180);
    this.y += this.speed * Math.sin(this.r * Math.PI / 180);

    //movimento
    if( se.teclado.getKey( this.buttonup ) ){
        this.moveUp();
    }

    if(se.teclado.getKey(this.buttondown)){
        this.moveDown();
    }

    if(se.teclado.getKey(this.buttonright)){
        this.moveRight()
    }

    if(se.teclado.getKey(this.buttonleft)){
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


Car.prototype.moveUp = function () {

   if(Math.abs( this.speed ) < this.maxSpeed) {
       if (this.speed >= 0)
           this.speed += this.aceleration;
       if (this.speed < 0)
           this.speed -= this.aceleration;
   }
    if(this.speed < 0)
        this.speed = -this.speed;

    //this.x += this.speed * Math.cos(this.r * Math.PI / 180);
    //this.y += this.speed * Math.sin(this.r * Math.PI / 180);


}

Car.prototype.moveDown = function () {
    console.log(this.speed)
    if(Math.abs( this.speed ) < this.maxSpeed) {
        if(this.speed >= 0)
            this.speed += this.aceleration;
        if(this.speed < 0)
            this.speed -= this.aceleration;
    }

    if(this.speed > 0)
        this.speed = -this.speed;

}

Car.prototype.moveLeft = function () {
    if( se.teclado.getKey( this.buttonup ))
        this.r -=1;
    else if( se.teclado.getKey( this.buttondown ))
        this.r +=1;
}

Car.prototype.moveRight = function () {
    if( se.teclado.getKey( this.buttonup ))
        this.r +=1;
    else if( se.teclado.getKey( this.buttondown ))
        this.r -=1;
}