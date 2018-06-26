/**
 * Representa um Game Object
 * @param sprite
 * @param {string} sprite - Nome do sprite do background
 * @param {int} x - Coordenada x do botão
 * @param {int} y - Coordenada y do botão
 * @param {string} classname - Nome da classe do objeto (grupo)
 * @param {int} w - Largura do sprite
 * @param {int} h - Altura do sprite
 * @constructor
 */
function GameObject(sprite, x, y, classename, w, h, r, z) {
    this.sprite = null;

    this.x = 0;
    if(x !=undefined)
        this.x = x;
    this.y = 0;

    if(y !=undefined)
        this.y = y;

    this.classename = classename;

    this.w = 0;
    if(w != undefined)
        this.w = w;

    this.h = 0;

    if(h != undefined)
        this.h = h;

    this.z = 0;
    if(z != undefined)
        this.z = z;
    this.r = 0;
    if(r != undefined)
        this.r = r;

    if(sprite != undefined) {
        this.sprite = se.loader.getAssets(sprite);
        if((!this.sprite instanceof Image) || (this.sprite == null)){
            throw new Error("Ocorreu um erro ao carregar a imagem" + sprite + ". Verifique o nome adicionado aos resources");
        }else{
            this.currentsprite = 0;
            if(this.h == 0)
                this.h = this.sprite.height;
            if(this.w == 0)
                this.w = this.sprite.width;
        }

    }

    this.linklevel = se.mlevel.currentLevel;


    //self add in currente level (test)
    if(se.mlevel.getCurrentLevel()!= undefined)
        se.mlevel.getCurrentLevel().addObjects(this);
    else
        console.warn("Impossível inserir objeto no nível atual.");
}

/**
 * Atualiza o estado o objeto, é chamado há cada lopp
 */
GameObject.prototype.update = function() {

}

/**
 * Imprime o estado atual do objeto na tela
 */
GameObject.prototype.print = function() {
        ctx.drawImage(this.sprite, this.x, this.y, this.w, this.h);
}

/**
 * Define a rotação do objeto
 * @param {int} r - rotação
 */
GameObject.prototype.setRotate = function (r) {
    this.r = r;
}


/**
 * Retorna a rotação do objeto
 * @return {int} r - rotação
 */
GameObject.prototype.getRotate = function () {
    return this.r;
}



/**
 * Configura a posição do objeto
 * @param {int} x - Coordenada x do objeto
 * @param {int} y - Coordenada y do objeto
 */
GameObject.prototype.setPosition = function (x, y) {
    this.x = x;
    this.y = y;
}

/**
 * Configura a posição do objeto
 * @param {GameObject} object - O objeto âncora
 * @param {string} position - a posição do objeto ancorado (top, bottom, left, right)
 * @todo impelentar as outras posições
 */
GameObject.prototype.setPositionByObject = function (object, position) {

    if(position == "top"){

        this.x = object.x + object.w / 2 - this.w / 2;
        this.y = object.y - this.h;
    }
}

/**
 * Configura a largura do objeto
 * @param {int} width - Largura do objeto
 */
GameObject.prototype.setWidth = function (width) {
    this.w = width;
}

/**
 * Obtém a largura do objeto
 * @return {int} width - Largura do objeto
 */
GameObject.prototype.getWidth = function () {
   return this.w;
}

/**
 * Configura a altura do objeto
 * @param {int} height - Altura do objeto
 */
GameObject.prototype.setHeight = function (height) {
    this.h = height;
}

/**
 * Obtém a altura do objeto
 * @return {int} height - Altura do objeto
 */
GameObject.prototype.getHeight = function () {
    return this.h;
}

/**
 * Configura o tamanho do objeto
 * @param {int} Largura do objeto
 * @param {int} Altura do objeto
 */
GameObject.prototype.setSize = function (width, height) {
    this.w = width;
    this.h = height;
}

/**
 * Translada o objeto
 * @param {int} x - Quantidade de pixels na horizontal
 * @param {int} y - Quantidade de pixels na vertical
 */
GameObject.prototype.translate = function(x, y) {
    this.x +=x;
    this.y+=y;
}