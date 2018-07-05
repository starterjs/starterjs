/**
 * Representa um projétil
 * @class
 * @extends GameObject
 * @param sprite
 * @param {string} sprite - Nome do sprite do background
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {int} v - Velocidade do projétil
 * @param {int} r - Angulo de rotação do projétil
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function Bullet(sprite, x , y, v, r, h, w) {
    GameObject.call(this, sprite, x, y, "bullet", h,w);
    this.velocity = v;
    this.radius = r;
    this.nofire = ["bullet","background"];
    this.fire =[];
    this.isremoving = false;
    this.z = 99;
}


Bullet.prototype = Object.create(GameObject.prototype);

/**
 * Configura os elementos que não terão colisão
 * @method
 * @param {string} nofire - nome de gameobject
 */
Bullet.prototype.setNoFire = function (nofire) {
    this.nofire.push(nofire);
}

/**
 * Configura os elementos que terão colisão
 * @method
 * @param {Array} fire - um vetor de 2 dimensões [ {string} nome, {function} função]
 */
Bullet.prototype.setFire = function (fire) {
    this.fire.push(fire);
}


/**
 * Atualiza o objeto Projétil
 * @method
 * @override
 */
Bullet.prototype.update = function () {
    //se passar sair da tela, remova
    if((this.y < 0) || (this.y > canvas.height))
        se.mlevel.scenes[this.linklevel].objects.splice(se.mlevel.scenes[this.linklevel].objects.indexOf(this), 1);

    //movimento vertical
    this.y+=this.velocity;

    //verifica colisao
    for(var i =0; i < se.mlevel.getCurrentScene().objects.length; i++) {
        if(this.isremoving)
            continue;

        var ret2 = se.mlevel.getCurrentScene().objects[i];
        for (var j = 0; j < this.nofire.length; j++){
            if (ret2.classename == this.nofire[j]) {
                continue;
            }
        }
        if( (this.x + this.w) > ret2.x &&
            this.x < (ret2.x + ret2.w) &&
            (this.y + this.h) > ret2.y &&
            this.y < (ret2.y + ret2.w)){

            for (var j = 0; j < this.fire.length; j++){
                if (ret2.classename == this.fire[j][0]) {
                    if(this.fire[j][1] == "custom")
                        this.fire[j][2]();
                    else if(this.fire[j][1] == "kill") {
                        ret2.fired();
                    }

                    this.remove();
                }
            }
        }
    }
}

/**
 * Remove o projétil do jogo
 * @method
 */
Bullet.prototype.remove = function () {
    if(this.isremoving)
        return;

    this.isremoving = true;
    se.mlevel.removeObject(this);
}