function Player(sprite, x, y,classename,  h, w) {
    GameObject.call(this, sprite, x,y,"player", h,w);
    this.aceleration = 0;
    this.velmax = 5;
    this.gunready = true;
    this.islive = true;
    this.life = 3;
    this.z = 99;
    this.audioLaser = new Sound("laser");
}

//fazendo herança
Player.prototype = Object.create(GameObject.prototype);

Player.prototype.moveUp = function () {

    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;
    if(this.y > 0)
        this.y -=this.aceleration;

}

Player.prototype.moveDown = function () {

    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;

    if(this.y < 600)
        this.y +=this.aceleration;
}

Player.prototype.moveLeft = function () {

    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;

    if(this.x > 0)
        this.x-=this.aceleration;
}

Player.prototype.moveRight = function () {

    if(this.aceleration < this.velmax)
        this.aceleration += 0.2;

    if(this.x < canvas.height  - this.w)
        this.x+=this.aceleration;
}


Player.prototype.update = function () {

    //Comandos do Teclado
	
    //Fogo
    if(se.teclado.ESPACO){
       this.createFire();
    }else{
        this.gunready = true;
    }

	

    //movimento
    if(se.teclado.CIMA){
        this.moveUp();
    }

    if(se.teclado.BAIXO){
      this.moveDown();
    }

    if(se.teclado.DIREITA){
        this.moveRight()
    }

    if(se.teclado.ESQUERDA){
        this.moveLeft();
    }

    if ( (!se.teclado.ESQUERDA) && (!se.teclado.DIREITA) && (!se.teclado.CIMA)&& (!se.teclado.BAIXO) && (this.aceleration > 0))
        this.aceleration-=0.2;
};

Player.prototype.createFire = function () {

    if(this.gunready) {
        laser = new Bullet("lase1",0,0, -4);
        laser.setPosition(this.x + this.w / 2 - laser.w / 2, this.y - laser.h);
        laser.setFire(["enemy", "kill"]);

        //laser.x = this.x + this.w / 2 - laser.w / 2;
        //laser.y = this.y - laser.h;

        se.mlevel.getCurrentScene().addObjects(laser);
        this.audioLaser.play();
        this.gunready = false;
    }
}



Player.prototype.fired = function () {
    this.life--;

    if ( (this.islive) && (this.life == 0)){
        this.islive = false;
        se.mlevel.gameOver();
    }
}