/**
 * Representa um objeto do Sprite (printável na tela)
 * @param animations
 * @param {array} - array of animations
 * @constructor
 */
function Sprite(animations,x,y, h, w) {

    GameObject.call(this, animations, x, y, "sprite", h, w);

    this.effects = "none";
    this.text = "";
    this.stackText = [];
    this.timewait = false;
    this.mirred = false;

}

Sprite.prototype = Object.create(GameObject.prototype);

Sprite.prototype.update = function () {
}


Sprite.prototype.print = function () {

    ctx.save();
    if(this.mirred){
      ctx.translate(canvas.width/2,0);
      ctx.scale(-1, 1);
        ctx.translate(-canvas.width/2,0);
    }


    GameObject.prototype.print.call(this);
    ctx.restore();

    if(this.timewait)
        return;

    if(this.effects != "none"){

        ctx.save();

        var oldx = canvas.width - this.x;

        if(this.mirred)
            ctx.translate(oldx , this.y - this.h*0.7);
        else
            ctx.translate(this.x+this.w , this.y - this.h*0.7);

        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = "#aaa";
        ctx.fillStyle = "#fff";

        //calculating height by text size
        var height = ((this.text.length / 12 )* 20) + 20;

        if(height == 0)
            height = 20;

        if(this.effects == "say")
            this.printTalkForm(0, 0, 150, height);
        else  if(this.effects == "think")
            this.printThinkForm(0, 0, 150, height);

        //text setting
        ctx.fillStyle = "#000";
        ctx.textAlign = "start";
        ctx.font = "20 px";

        if(this.text.length > 12) {
            for (var i = 0; i < this.text.length / 12; i++) {
                var str_temp = this.text.substring(i * 12, (i + 1) * 12);

                if(str_temp[0] == " ")
                    str_temp = str_temp.substring(1, str_temp.length);

                ctx.fillText(str_temp, 10, 20 * (i + 1));
            }
        }else{
            ctx.fillText(this.text, 10,20);
        }

        ctx.restore();

    }else if(this.stackText.length > 0){

        text_temp = this.stackText.shift();

        if(text_temp[2] == "say")
            this.sayForSeconds(text_temp[0], text_temp[1]);

        else if(text_temp[2] == "think")
            this.thinkForSeconds(text_temp[0], text_temp[1]);

        else if(text_temp[2] == "wait"){

            this.timewait = true;
            var _this = this;
            window.setTimeout(function () {
                _this.timewait = false;
            }, text_temp[1]*1000);
        }
    }



}

Sprite.prototype.say = function (text) {
    this.effects = "say";
    this.text= text;
}

Sprite.prototype.cleanEffects = function (text, secunds) {
   this.effects = "none"
}

Sprite.prototype.sayForSeconds = function (text, secunds) {

    if((this.effects != "none")  || (this.timewait)) {
        this.stackText.push([text, secunds, "say"]);
        return;
    }

    this.say(text);
    var _this = this;
    window.setTimeout(function () {
        _this.effects = "none";
    }, secunds*1000);
}


Sprite.prototype.think = function (text) {
    this.text= text;
    this.effects = "think";
}

Sprite.prototype.thinkForSeconds = function (text, secunds) {

    if((this.effects != "none") || (this.timewait)){
        this.stackText.push([text, secunds, "think"]);
        return;
    }

    this.think(text);

    var _this = this;

    window.setTimeout(function () {
        _this.effects = "none";
    }, secunds*1000);
}

/**
 * Muda o tamanho do sprite com base na porcentagem
 * @param {float} percent - numero decimal
 */
Sprite.prototype.changeSizeFor = function (percent) {
    if(typeof percent == "string"){
        percent = percent.substring(0, percent.length-1);
        if( !isNaN(percent) ) {

            percent = parseFloat(percent) / 100;

        } else
            percent = 0;
    }

    this.h *= percent;
    this.w *= percent;



}

/**
 * Muda o tamanho do sprite por uma tamanho específico
 * @param size
 */
Sprite.prototype.changeSizeTo = function (size) {
   this.h += size;
   this.w += size;
   this.x -= size/2;
   this.y -= size/2;
}


Sprite.prototype.printTalkForm  = function(x, y, width, height) {

        var radius = 5;

        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);

        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);


        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius +10, y + height);
        ctx.lineTo(x  - 10 , y + height + 20);


        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);

        ctx.quadraticCurveTo(x, y, x + radius, y);

        ctx.closePath();

        ctx.fill();
        ctx.stroke();
}


Sprite.prototype.printThinkForm  = function(x, y, width, height) {

    var radius = 5;

    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);

    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);


    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius , y + height);

    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);

    ctx.quadraticCurveTo(x, y, x + radius, y);

    ctx.closePath();

    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x+10 , y + height + 20, radius*1.4, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x , y + height + 40, radius, 0, 2 * Math.PI, false);
    ctx.closePath();


    ctx.fill();
    ctx.stroke();

}

Sprite.prototype.wait = function (secunds) {
    if(this.effects == "none"){
        this.timewait = true;
        var _this = this;
        window.setTimeout(function () {
            _this.timewait = false;
        }, secunds*1000);
    }else
        this.stackText.push(["", secunds, "wait"]);
}

Sprite.prototype.setMirror = function (mirror) {
    this.mirred = mirror;
    this.x = canvas.width - this.x;
}