/**
 * @class
 * @classdesc Representa um Butão.
 * @extends GameObject
 * @param {string} sprite - Nome do sprite do botão
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {funcition} Callback - função chamada no click
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 */
function Button(sprite, x, y, callback, w, h){
    this.classename = "button";
    GameObject.call(this, sprite, x, y, "button", h,w);

    if(callback!= undefined) {
        this.clickFunction = callback;
    }else{
        this.clickFunction  = function () {console.warn("Esse objeto não possui uma clickFunction")}
    }

}

Button.prototype = Object.create(GameObject.prototype);


/**
 * Chama a função estipulado quando há o clique
 * @method
 * @name Button.click
 */
Button.prototype.click = function(){
    if(this.clickFunction != undefined)
        this.clickFunction();
}

/**
 * Atribui uma função à função de clique do botão
 * @method
 * @param {function} fn - função de clique
 */
Button.prototype.setClick = function(fn){
    this.clickFunction = fn;
}
