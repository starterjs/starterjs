/**
 * Esta classe é uma versão do Turtle, criado por Seymour Papert.
 * @constructor
 */
function Turtle() {
    /**
     * Coordenada x do Trutle
     * @type {number}
     */
    this.x = canvas.width/2;
    /**
     * Coordenada y do Turtle
     * @type {number}
     */
    this.y = canvas.height/2;

    /**
     * Espessura da linha
     * @type {number}
     */
    this.linew = 1;

    //this.direction = 0;
    /**
     * Controla se o Turtle risca no chão
     * @type {boolean}
     */
    this.pendown = true;

    this.penolddown = true;
    /**
     * Pilha de movimentos e comandos
     * @type {Array}
     */
    this.stakemoviment = [];


    /**
     * Pilha das linhas e comando anteriores
     * @type {Array}
     */
    this.stakealdlines = [];


    /**
     * Armazena a quantidade de passo do movimento atual
     * @type {number}
     */
    this.stepcurrent = 0;
    /**
     * Velocidade do Turtle;
     * @type {number}
     */
    this.velocity = 10;

    /**
     * Controla se existe um novo comando na pilha
     * @type {boolean}
     */
    this.isnewcommand = true;

    /**
     * Cor da linha
     * @type {string}
     */
    this.color = {r:0, g:0, b:0};

    /**
     * Imagem do turtle
     * @type {Image}
     */
    this.imgturtle = new GameObject([new Animation(["turtle"])], 0,0, "turtle", 40,40);

    /**
     * Guarda a ultima cor para o comando mude cor por
     * @type {string}
     */
    this.lastcolor = "";

    /**
     * Guarda a direção da mudança da cor para o comando mude cor por
     * @type {boolean}
     */
    this.changecolorup = true;

    //self add in currente level (test)
    se.mlevel.getCurrentScene().addObjects(this);
}

/**
 * Muda o modo de pintura no chão para ativo
 */
Turtle.prototype.penDown= function() {
    this.stakemoviment.push([0, "pendown"]);
};

/**
 * Muda o modo de pintura no chão para inativo
 */
Turtle.prototype.penUp= function() {
    this.stakemoviment.push([0, "penup"]);
};

/**
 * Muda o tom do caminho por uma cor determinada
 * @param {int} value - valor para mudança da cor
 */
Turtle.prototype.changeToneFor = function (value) {


    this.color.r += value;
    this.color.g += value;
    this.color.b += value;

    if(this.color.r > 255)
        this.color.r = this.color.r - 255;

    if(this.color.g > 255)
        this.color.g = this.color.g - 255;

    if(this.color.b > 255)
        this.color.b = this.color.b - 255;

    this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"]);
};


/**
 * Muda a cor do caminho para uma cor determinada
 * @param {int} r - valor do vermelho
 * @param {int} g - valor do verde
 * @param {int} b - valor do azul
 */
Turtle.prototype.changeColorTo = function (r,g,b) {


    if((g==undefined) && (b==undefined))
        this.color = r;
    else
        this.color = {r:r, g:g, b:b};

    if(this.color.r > 255)
        this.color.r = this.color.r - 255;

    if(this.color.g > 255)
        this.color.g = this.color.g - 255;

    if(this.color.b > 255)
        this.color.b = this.color.b - 255;

    this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"]);
};


/**
 * Muda a cor do caminho por uma valor determinado
 * @param {int} value - valor da mudança
 */
Turtle.prototype.changeColorFor = function (value) {


    if(this.changecolorup) {

        if (( this.lastcolor != "r") && (this.color.r != 255) ) {

            this.color.r += value;

            if (this.color.r > 255) {
                this.color.r = 255;
                this.lastcolor = "r";
            }
        } else if (( this.lastcolor != "g") && (this.color.g != 255)) {

            // console.log(this.lastcolor ,this.color.r );

            this.color.g += value;

            if (this.color.g > 255) {
                this.color.g = 255;
                this.lastcolor = "g";
            }
        } else if (( this.lastcolor != "b") && (this.color.b != 255) ) {

            this.color.b += value;
            if (this.color.b > 255) {
                this.color.b = 255;
                this.lastcolor = "b";
            }

        }

        if ((this.color.r == 255) && (this.color.g == 255) && (this.color.b == 255)) {
            this.changecolorup = false;
        }
    }else{

        if (( this.lastcolor != "r") && (this.color.r != 0)) {

            this.color.r -= value;
            if (this.color.r < 0) {
                this.color.r = 0;
                this.lastcolor = "r";
            }
        } else if (( this.lastcolor != "g") && (this.color.g != 0)) {

            // console.log(this.lastcolor ,this.color.r );

            this.color.g -= value;

            if (this.color.g < 0) {
                this.color.g = 0;
                this.lastcolor = "g";
            }
        } else if (( this.lastcolor != "b") && (this.color.b != 0)) {

            this.color.b -= value;

            if (this.color.b < 0) {
                this.color.b = 0;
                this.lastcolor = "b";
            }

        }

        if ((this.color.r == 0) && (this.color.g == 0) && (this.color.b == 0)) {
            this.changecolorup = true;
        }

    }



    this.stakemoviment.push(["rgb("+this.color.r+","+this.color.g+","+this.color.b+")","changecolor"]);
};



/**
 * Muda o tamanho do caminho para um valor determinado
 * @param {int} size - tamanho do caminho
 */
Turtle.prototype.changeSizeTo = function (size) {
   this.linew = size;
    this.stakemoviment.push([this.linew ,"changesize"]);
};

/**
 * Muda o tamanho do caminho por um valor determinado (soma)
 * @param {int} size - tamanho do caminho
 */
Turtle.prototype.changeSizeFor = function (size) {
    this.linew += size;
    this.stakemoviment.push([this.linew ,"changesize"]);
};


Turtle.prototype.print= function() {};

/**
 * Limpa a tela
 */
Turtle.prototype.clean= function() {
    this.stakemoviment.push([this.stakemoviment.length ,"clean"]);
};

/**
 * Faz o Turtle andar para frente
 * @param {int} steps - Quantidade de passos
 */
Turtle.prototype.forward = function(steps) {
   this.stakemoviment.push([steps, "forward"]);
}

/**
 * Faz o Turtle andar para trás
 * @param {int} steps - Quantidade de passos
 */
Turtle.prototype.back = function(steps) {
    this.stakemoviment.push([steps, "back"]);
}

/**
 * Rotadiona o Turtle pela esquerda
 * @param {int} angle - Ângulo de inclinação
 */
Turtle.prototype.left = function(angle) {
    this.stakemoviment.push([-angle, "left"]);
}

/**
 * Rotaciona o Turtle pela direita
 * @param {int} angle - Ângulo de inclinação
 */
Turtle.prototype.right= function(angle) {
    this.stakemoviment.push([angle, "right"]);
}


/**
 * Desenha as linhas atuais
 * @override
 */
Turtle.prototype.update = function () {

    this.pintaldline();


    //for any commando
    if(this.stakemoviment.length > 0){

        movetox = this.x;
        movetoy = this.y;

        if(this.stakemoviment[0][1] == "pendown"){
            this.stakealdlines.push( this.stakemoviment[0] );
            this.pendown = true;
            this.stakemoviment.splice(0,1);

            //return;
        }else if(this.stakemoviment[0][1] == "penup") {
            this.stakealdlines.push(this.stakemoviment[0]);
            this.pendown = false;
            this.stakemoviment.splice(0, 1);

            //return;

        }else  if(this.stakemoviment[0][1] == "changecolor") {
            this.stakealdlines.push(this.stakemoviment[0]);
            this.stakemoviment.splice(0, 1);

            //return;

        }else if (this.stakemoviment[0][1] == "changesize") {

            this.stakealdlines.push(this.stakemoviment[0]);
            this.stakemoviment.splice(0, 1);

            //return;

        }else if (this.stakemoviment[0][1] == "clean") {
            this.stakealdlines.push( this.stakemoviment[0] );
            this.stakemoviment.splice(0, 1);

            //return;

        }else if((this.stakemoviment[0][1] == "right") || (this.stakemoviment[0][1] == "left") ){
            this.stakealdlines.push( [ this.stakemoviment[0][0], this.stakemoviment[0][1], movetox, movetoy ]);
            ctx.translate(movetox, movetoy);
            ctx.rotate( this.stakemoviment[0][0] * Math.PI / 180);
            ctx.translate(-movetox, - movetoy);
            this.stakemoviment.splice(0,1);

            //return;

        }else if ((this.stakemoviment[0][1] == "forward") || (this.stakemoviment[0][1] == "back") ){

            if(this.stakemoviment[0][1] == "forward")
                this.y-= this.velocity;
            else if(this.stakemoviment[0][1] == "back")
                this.y+= this.velocity;

            this.stepcurrent+= this.velocity;


            if(this.pendown) {

                ctx.beginPath();
                ctx.moveTo(movetox,  movetoy);
                ctx.lineTo(this.x, this.y);
                ctx.strokeStyle = "rgb("+this.color.r+","+this.color.g+","+this.color.b+")";
                ctx.stroke();
                ctx.closePath();
            }

            //if coount is equal or more of steps
            if(this.stepcurrent >= this.stakemoviment[0][0]){
                this.stakemoviment.splice(0,1);
                this.stepcurrent = 0;
                this.stakealdlines[this.stakealdlines.length - 1][2] = this.x;
                this.stakealdlines[this.stakealdlines.length - 1][3] = this.y;

                this.isnewcommand = true;


            } else{
                //update lines
                if(this.isnewcommand){
                    this.isnewcommand = false;
                    this.stakealdlines.push([movetox, movetoy, this.x, this.y,this.stakemoviment[0][1]]);
                }else{
                    this.stakealdlines[this.stakealdlines.length - 1][2] = this.x;
                    this.stakealdlines[this.stakealdlines.length - 1][3] = this.y;
                }
            }

        }

        this.imgturtle.setPosition( this.x - (this.imgturtle.getWidth()/2), this.y-this.imgturtle.getHeight())
        this.imgturtle.print();

    }
}

/**
 * Desenha as linhas anteriores
 */
Turtle.prototype.pintaldline = function () {
   
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);

    for (var i = 0; i < this.stakealdlines.length; i++) {

        if ( this.stakealdlines[i][1] == "pendown") {
           this.penolddown = true;

            continue;
        } else if (this.stakealdlines[i][1] == "penup") {
            this.penolddown = false;

            continue;

        }else  if(this.stakealdlines[i][1] == "changecolor") {
            ctx.strokeStyle = this.stakealdlines[i][0];

            continue;
        }else if (this.stakealdlines[i][1]  == "changesize") {
            ctx.lineWidth = this.stakealdlines[i][0];

            continue;

        }else if( this.stakealdlines[i][1] == "clean"){

            this.stakealdlines.slice(0, this.stakealdlines[i][0]);

            continue;
        }else if ((this.stakealdlines[i][1] == "right") || (this.stakealdlines[i][1] == "left")) {
            ctx.translate(this.stakealdlines[i][2], this.stakealdlines[i][3]);
            ctx.rotate(this.stakealdlines[i][0] * Math.PI / 180);
            ctx.translate(-this.stakealdlines[i][2], -this.stakealdlines[i][3]);

            continue;

        }else {
            if(this.penolddown) {


                if(this.stakealdlines[i][4] == "forward"){
                    ctx.beginPath();
                    ctx.moveTo(this.stakealdlines[i][0], this.stakealdlines[i][1]);
                    ctx.lineTo(this.stakealdlines[i][2], this.stakealdlines[i][3]);
                    ctx.strokeStyle = this.stroke;
                    ctx.stroke();
                    ctx.closePath();

                }else if(this.stakealdlines[i][4] == "back"){

                    ctx.beginPath();
                    ctx.moveTo(this.stakealdlines[i][2], this.stakealdlines[i][3]);
                    ctx.lineTo(this.stakealdlines[i][0], this.stakealdlines[i][1]);
                    ctx.strokeStyle = this.stroke;
                    ctx.stroke();
                    ctx.closePath();
                }


            }
        }

    }


    if(this.stakemoviment.length == 0){
        this.imgturtle.setPosition( this.x - (this.imgturtle.getWidth()/2), this.y-this.imgturtle.getHeight())
        this.imgturtle.print();
    }


    ctx.restore();

}
