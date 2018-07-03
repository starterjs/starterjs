/**
 * Representa um objeto do tipo Score - um elemento como imagem e texto ao lado
 * @param {string} name - nome do score
 * @param {Sprite} sprite - image do score
 * @param {int} x - posição x
 * @param {int} y - posicao y
 * @constructor
 */
Score = function (name, sprite, x, y)  {
    this.name = name;
    this.score = 0;
    this.alttext = text;

    this.sprite = null;
    this.text = null;

    this.sprite = new GameObject(sprite, x, y, "guiscore");
    this.text = new Text(this.score, x + this.sprite.getWidth() +10 , y + this.sprite.getHeight()/2);
}

/**
 * Atualiza o score
 * @method
 */
Score.prototype.update = function () {};

/**
 * Exibe o score
 * @method
 */
Score.prototype.print = function () {
    this.text.setText(this.score)
    this.text.print();
    this.sprite.print();
}