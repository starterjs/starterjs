//um elemento como imagem e texto ao lado
Score = function (name, sprite, x, y)  {
    this.name = name;
    this.score = 0;
    this.alttext = text;

    this.sprite = null;
    this.text = null;

    this.sprite = new GameObject(sprite, x, y, "guiscore");
    this.text = new Text(this.score, x + this.sprite.getWidth() +10 , y + this.sprite.getHeight()/2);
    console.log(this.score)

}

Score.prototype.update = function () {};

Score.prototype.print = function () {
    this.text.setText(this.score)
    this.text.print();
    this.sprite.print();
}