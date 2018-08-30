/**
* Representa uma sequência de imagens para animação
 * @todo implementar classe
* @param animations
* @param {array} - array of animations
* @constructor
*/
function Animation(sprites) {

    this.sprites = sprites;
    this.currentsprite = 0;
    this.timesprite = 1;
    this.start();
	
	
}

Animation.prototype.start = function () {
	
    var _this = this;
	
    window.setTimeout(
        function(){
            _this.update(_this);
        }
        , this.timesprite
    );
}

Animation.prototype.update = function (_this) {

    console.log(_this)
    if(_this.getCurrentIndexSprite() < _this.sprites.length-1)
        _this.nextSprite();
    else
        _this.setCurrentIndexSprite(0);

    window.setTimeout(
        function(){
            _this.update(_this);
        }
        , _this.timesprite
    );
}


Animation.prototype.nextSprite = function () {
   this.currentsprite++;
}

Animation.prototype.priorSprite = function () {
    this.currentsprite--;
}

Animation.prototype.setInterval = function (interval) {
    this.timesprite = interval;
}

Animation.prototype.setCurrentIndexSprite = function (time) {
    this.currentsprite = time;
}

Animation.prototype.getCurrentIndexSprite = function () {
    return this.currentsprite;
}

Animation.prototype.getCurrentSprite = function () {
    return this.sprites[this.currentsprite];
}


Animation.prototype.setSprites = function (sprites) {
    this.sprites = sprites;
}
