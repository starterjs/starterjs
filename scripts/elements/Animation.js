/**
* Representa uma sequência de imagens para animação
* @param animations
* @param {array} - array of animations
* @constructor
*/
function Animation(sprites) {

    this.sprites = [];

    if(Array.isArray(sprites)){

        for(var i=0; i< sprites.length; i++){

            var sprite_temp =  se.loader.getAssets(sprites[i]) ;

            if((!sprite_temp instanceof Image) || (sprite_temp == null)){
                throw new Error("Ocorreu um erro ao carregar a imagem" + sprite_temp + ". Verifique o nome adicionado aos resources");
            }else{
                this.sprites.push(sprite_temp);

            }
        }

    }

    /*else{

        console.log(typeof sprites)
        var sprite_temp = se.loader.getAssets(sprites);
        if((!this.sprite instanceof Image) || (this.sprite == null)){
            throw new Error("Ocorreu um erro ao carregar a imagem" + sprite + ". Verifique o nome adicionado aos resources");
        }else{
            this.currentsprite = 0;
            this.sprites.push(sprite_temp);

            if(this.h == 0)
                this.h = this.sprite.height;
            if(this.w == 0)
                this.w = this.sprite.width;
        }
    }*/



    this.currentsprite = 0;
    this.timesprite = 5;
    this.stop = false;
    this.start();
	
	
}

Animation.prototype.start = function () {
	
    var _this = this;
	
    window.setTimeout(
        function(){
            _this.update(_this);
        }
        , this.timesprite*1000
    );
}

Animation.prototype.update = function (_this) {

    if(this.stop)
        return;

    if(_this.getCurrentIndexSprite() < _this.sprites.length-1)
        _this.nextSprite();
    else
        _this.setCurrentIndexSprite(0);

    window.setTimeout(
        function(){
            _this.update(_this);
        }
        , _this.timesprite*1000
    );
}

/**
 * Avança para o próximo sprite
 */
Animation.prototype.nextSprite = function () {
   this.currentsprite++;
}

/**
 * Retorna ao sprite anterior
 */

Animation.prototype.priorSprite = function () {
    this.currentsprite--;
}

/**
 * Especifica o tempo de intervalo entre os sprites
 * @param interval
 */
Animation.prototype.setInterval = function (interval) {
    this.timesprite = interval;
}

/**
 * Especifica o sprite atual com base no indice
 * @param index
 */
Animation.prototype.setCurrentIndexSprite = function (index) {
    if(index < this.sprites.length)
        this.currentsprite = index;
    else
        console.warn("Índice fora da faixa da aminação atual");
}

/**
 * Retorna o indice do sprite atual
 * @return {number|*}
 */
Animation.prototype.getCurrentIndexSprite = function () {
    return this.currentsprite;
}

/**
 * Retorna o sprite atual
 * @return {*}
 */
Animation.prototype.getCurrentSprite = function () {
    return this.sprites[this.currentsprite];
}

/**
 * Especifica sprites da animação
 * @param sprites
 */
Animation.prototype.setSprites = function (sprites) {
    this.sprites = sprites;
}


/**
* Para de executar a animação atual
*/
Animation.prototype.stopAnimation = function () {
   this.stop = true;
}

/**
* Retoma a animação atual
*/
Animation.prototype.startAnimation = function () {
    this.stop = false;
}

/**
 * Especifica uma altura ou largura do gameobject com base no primeiro sprite da animação
 * @param type
 * @return {number}
 */
Animation.prototype.autoSize = function(type){
    if(type == "h")
        return this.sprites[0].height
    else if(type == "w")
        return this.sprites[0].width;
    else
        return 0;
}
